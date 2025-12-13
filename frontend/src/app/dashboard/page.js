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
    console.log("chart Data: ", chartData);
  }catch(err){
    console.log(err);
  }


  // console.log(chartData);
  return (
    <main className="overflow-x-hidden">
      <div className="z-20 absolute right-44 top-44 w-96 h-96 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 blur-3xl"></div>

      <CoreMetrics />
      
      <ShowAndAddExpenseWrapper/>

      <ShowCharts chartData={chartData?.result}/>
      <ShowInsights/>
    </main>
  );
}
