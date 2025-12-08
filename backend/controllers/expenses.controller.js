import Expense from "../model/expense.model.js";
import { categorizeExpenseLLM } from "../utils/categorizeExpenseLLM.js";
import { generateSpendingInsights } from "../utils/generateSpendingInsights.js";
import { previousMonthCategorySpendingMapping } from "../utils/previousMonthCategorySpendingMapping.js";


export const saveExpenses = async (req, res) => {
  const { description_original, amount, date } = req.body.expenseDetails;
  console.log("adding expense: ",description_original, amount, date);
  try {
    if (!description_original.trim() || !amount || !date) {
      return res
        .status(403)
        .json({ message: "expense description, amount & date is required." });
    }

    const modelResponse = await categorizeExpenseLLM(description_original);
    // console.log(modelResponse);

    const newExpense = new Expense({
      date,
      amount,
      description_original,
      description_processed: modelResponse.description_processed,
      category: modelResponse.category
    });

    const result = await newExpense.save()

    if(!result){
      throw new Error("Error while saving new expense in db.")
    }

    //updating cache when new expense gets added
    // const key = new Date(date).toISOString().split("T")[0];
    // if(pastSeventDaysExpenseCacheMap.has(key)){
    //   pastSeventDaysExpenseCacheMap.get(key).unshift(result.toObject())
    // }else{
    //   pastSeventDaysExpenseCacheMap.set(key, [result.toObject()])
    // }

    // console.log(pastSeventDaysExpenseCacheMap)
    res.status(201).json({result, message: "Expense saved."})
  } catch (err) {
    console.log("Error is saveExpense: ", err);
    res.status(500).json({ message: "Error while saving expense." });
  }
};

export const getCoreMetrics = async(req,res) => {
  //previous month
  //months(total spend)
  //avg. daily spend
  //top category
  //top 3 category
  //this month
  //month (total so far)
  
    const now = new Date(); //today's date
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const startOfPreviousMonth = new Date(currentYear, currentMonth - 1, 1);
    const endOfPreviousMonth = new Date(currentYear, currentMonth, 0);
    const startOfCurrentMonth = new Date(currentYear, currentMonth);
    const endOfCurrentDay = new Date(now.setHours(23,59,0,0));

  try{

    const [previousMonthExpenses,tillNowCurrentMonthExpenses] = await Promise.all([
      Expense.find({
      date: {
        $gte: startOfPreviousMonth,
        $lte: endOfPreviousMonth
      }
    }).lean(),
      Expense.find({
      date: {
        $gte: startOfCurrentMonth,
        $lte: endOfCurrentDay
      }
    }).lean(),

    ])

    // console.log(tillNowCurrentMonthExpenses);
    

    if(!previousMonthExpenses || !tillNowCurrentMonthExpenses){
      throw new Error("Error while getting previous & current  month expenses.");
    }

    //total expense of previous month
    const totalSpendInPreviousMonth = previousMonthExpenses.reduce((sum,e) => sum + e.amount, 0);

    //total expense of current month till now
    const totalSpendInCurrentMonth = tillNowCurrentMonthExpenses.reduce((sum,e) => sum + e.amount, 0);
    console.log("totalSpendInCurrentMonth",totalSpendInCurrentMonth)
    
    const previouMonthSpendingDays = new Set(previousMonthExpenses.map(e => new Date(e.date).getDate())).size;

    const currentMonthSpendingDays = new Set(tillNowCurrentMonthExpenses.map(e => new Date(e.date).getDate())).size;

    //average per day expense of previous month
    const avgPerdaySpendingInPreviousMonth = totalSpendInPreviousMonth / previouMonthSpendingDays;

    //average per day expense of current month
    const avgPerdaySpendingInCurrentMonth = totalSpendInCurrentMonth / currentMonthSpendingDays;


    //top category & top 3 category expenses previous month
    const top3CategoryExpensesPreviousMonth =  previousMonthCategorySpendingMapping(previousMonthExpenses);
    console.log(top3CategoryExpensesPreviousMonth)
    //top category & top 3 category expenses current month
    const top3CategoryExpensesCurrentMonth =  previousMonthCategorySpendingMapping(tillNowCurrentMonthExpenses);
  

    res.status(200).json({result: {
      previous: {
        totalSpend: totalSpendInPreviousMonth,
        avgPerDay:  Math.trunc(avgPerdaySpendingInPreviousMonth * 100) / 100,
        top3Categories: top3CategoryExpensesPreviousMonth.top3Categories
      },
      current: {
        totalSpend: totalSpendInCurrentMonth,
        avgPerDay:  Math.trunc(avgPerdaySpendingInCurrentMonth * 100) / 100,
        top3Categories: top3CategoryExpensesCurrentMonth.top3Categories
      }
    },message: "got core metrics."})
  }catch (err) {
    console.log("Error in saveExpense: ", err);
    res.status(500).json({ message: "Error while saving expense." });
  }
}

export const getExpenseForADate = async(req,res) => {
  const {date} = req.body;
  console.log("DATE IN BODY",date);
  const today = new Date();
  const todayEnd = today.setHours(23,59,59,0);
  const todaycopy = new Date();
  const sevendaybeforedate = todaycopy.setDate(todaycopy.getDate() - 6);
  const sevendaybeforedatestart = new Date(sevendaybeforedate).setHours(0,0,0,0);
  console.log(date);

  let expenses;
  try{

    const bodyDate = new Date(date).toISOString().split("T")[0];
    // console.log(pastSeventDaysExpenseCacheMap.get(bodyDate));

    //check cache first if data present return
    // if(pastSeventDaysExpenseCacheMap.has(bodyDate)){
    //   return res.status(200).json(
    //     {
    //       result: pastSeventDaysExpenseCacheMap.get(bodyDate),
    //       message: `Found expense for ${bodyDate} date in cache.`
    //     }
    //   )
    // }

    console.log("bodyDate is less",new Date(date).getTime(),sevendaybeforedatestart);
    if(new Date(date).getTime() < sevendaybeforedatestart){
      console.log("bodyDate is less")
      const bodyDateStart = new Date(date).setHours(0,0,0,0);
      const bodyDateEnd = new Date(date).setHours(23,59,59,0);
      expenses = await Expense.find(
        {
          date: {
            $gte: bodyDateStart,
            $lte: bodyDateEnd
          }
        }
      ).lean();

      return res.status(200).json({result: expenses, message: `Got expenses for ${new Date(date).toISOString().split("T")[0]}`})
    }

    //clearing cache
    // pastSeventDaysExpenseCacheMap.clear();
    //if not present in cache get expense from db.
    expenses = await Expense.find(
      {
        date: {
          $gte: sevendaybeforedatestart,
          $lte: todayEnd
        }
      }
    ).lean();
    console.log("Expenses", expenses);

    if(!expenses.length){
      return res.status(404).json({message: "No expenses found for past 7 days."});
    }

    //got expense from db now store the freshly fetched expense in cache
    // for(const e of expenses){
    //   const key = new Date(e.date).toISOString().split("T")[0];
    //   if(!pastSeventDaysExpenseCacheMap.has(key)){
    //     pastSeventDaysExpenseCacheMap.set(key,[])
    //   }

    //   pastSeventDaysExpenseCacheMap.get(key).push(e)
    // }

    // console.log(pastSeventDaysExpenseCacheMap);
    
    // const result = pastSeventDaysExpenseCacheMap.get(bodyDate);
    res.status(200).json({result: expenses || [], message: "got all expenses from db."});
  }catch(err){
    console.log("Error in getExpenseForADate ", err);
    res.status(500).json({message: "Error while getting expense for a date."});
  }
}

export const getCharts = async(req,res) => {
  // const now = new Date();
  const currentDayEnd = new Date(new Date().setHours(23,59,59,0))
  console.log(currentDayEnd);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentMonthStart = new Date(currentYear, currentMonth, 1);
  // const currentMonthEnd = new Date(new Date(currentYear, currentMonth + 1, 0).setHours(23,59,59,0))

  try{
    const dailySpend = await Expense.aggregate([
      { $match: {date: { $gte: currentMonthStart, $lte: currentDayEnd}}},
      { $group: {
        _id: { $dateToString: { format: "%d",date: "$date"}},
        total: { $sum: "$amount"}
      }},
      { $sort: { "_id": 1}}
    ])

    const categorySpend = await Expense.aggregate([
      { $match: {date: {$gte: currentMonthStart, $lte: currentDayEnd}}},
      { $group: {
        _id: "$category",
        total: { $sum: "$amount"}
      }},
      {$sort: { total: -1}}
    ])

    const weeklySpendByCategory = await Expense.aggregate([
      {
        $match: {
          date: { $gte: currentMonthStart, $lte: currentDayEnd}
        }
      },
      {
        $group: {
          _id: {
            week: { $isoWeek: "$date"},
            category: "$category"
          },
          total: {$sum: "$amount"}
        }
      },
      {
        $group: {
          _id: "$_id.week",
          categories: {
            $push: {
              category: "$_id.category",
              total: "$total"
            }
          },
          weekTotal: {$sum: "$total"}
        }
      },
      {
        $sort: {"_id": 1}
      }
    ])

    const monthlyTrend = await Expense.aggregate([
      {
        $match: {
          date: {$lte: currentDayEnd}
        }
      },
      {
        $group: {
          _id:{
            year: {$year: "$date"},
            month: {$month: "$date", }
          },
          totalSpent: {$sum: "$amount"}
        }
      },
      {
        $sort: {"_id.year": 1, "_id.month": 1}
      }
    ])

    function getMonthName(year,month){
      return new Date(year,month - 1).toLocaleString("en-IN", {month: "short"})
    }

    const formattedMonthlyTrend =  monthlyTrend.map((item) => (
      {
        month: `${getMonthName(item._id.year,item._id.month)} ${item._id.year}`,
        total: item.totalSpent 
      }
    ))

    const allChartsData = {
      dailySpend,
      categorySpend,
      weeklySpendByCategory, //giving iso week later decide want week range or not
      monthlyTrend: formattedMonthlyTrend
    }

    const insights = await generateSpendingInsights(allChartsData);

    res.status(200).json({result: allChartsData,insights, message: "generated charts successfully."});

  }catch(err){
    console.log("Error in getting charts data: ", err);
    res.status(500).json({ message: "Error while getting charts data." });
  }
}


