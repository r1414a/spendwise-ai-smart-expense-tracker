import CoreMetrics from "@/components/dashboard/CoreMetrics";
import ShowAndAddExpenseWrapper from "@/components/dashboard/ShowAndAddExpenseWrapper";
import ShowCharts from "@/components/dashboard/ShowCharts";
import ShowInsights from "@/components/dashboard/ShowInsights";

export default async function Dashboard() {
  const today = new Date().toISOString();
  let chartData;
  try{
    const res = await fetch(`${process.env.API_URL}/api/expense/charts`);
    chartData = await res.json();
  }catch(err){
    console.log(err);
  }



  // const [getExpenseRes, chartDataRes] = await Promise.all([
  //   fetch(`${process.env.API_URL}/api/expense/get-expense`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({date:today})
  //   }
  // ),
  // fetch(`${process.env.API_URL}/api/expense/charts`)
  // ]);

  // const [getExpenseData, chartData] = await Promise.all([getExpenseRes.json(), chartDataRes.json()]);

  console.log(chartData);
  return (
    <main className="overflow-x-hidden">
      <div className="z-20 absolute right-44 top-44 w-96 h-96 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 blur-3xl"></div>

      <CoreMetrics />
      
      {/* <ShowAndAddExpenseWrapper singleDateExpense={getExpenseData.result}/> */}
      <ShowAndAddExpenseWrapper/>

      <ShowCharts chartData={chartData?.result}/>
      <ShowInsights/>
    </main>
  );
}
