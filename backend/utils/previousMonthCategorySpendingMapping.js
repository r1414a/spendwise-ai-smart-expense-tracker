export function previousMonthCategorySpendingMapping(previousMonthExpenses){
    let categoryTotal = {};
    for(const expense of previousMonthExpenses){
      categoryTotal[expense.category] = 
      (categoryTotal[expense.category] || 0) + expense.amount;
    }

    const sortedCategoryArr = Object.entries(categoryTotal).sort((a,b) =>  b[1] - a[1]);
    const sortedCategoryObj = Object.fromEntries(sortedCategoryArr);

    const top3Categories = Object.fromEntries(sortedCategoryArr.slice(0,3));


    return {
        // categorySpendingMapping: sortedCategoryObj,
        top3Categories 
    }
}