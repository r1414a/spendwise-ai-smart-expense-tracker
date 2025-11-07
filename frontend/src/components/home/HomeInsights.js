import Heading from "../ui/Heading";
import { FaChartPie } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { BiLineChart } from "react-icons/bi";
import { MdStackedBarChart } from "react-icons/md";

const CHARTS = [
  {
    icon: <IoBarChartSharp className="text-3xl"/>,
    t: "Daily Spend",
    chartType: "Bar Chart",
    c: "Track how much you spend each day. Identify your busiest spending days and spot patterns instantly.",
  },
  {
    icon: <FaChartPie className="text-3xl"/>,
    t: "Category Spend",
    chartType: "Pie Chart",
    c: "Understand where your money goes. See which categories take up the largest part of your budget.",
  },
  {
    icon: <MdStackedBarChart className="text-3xl"/>,
    t: "Weekly Spend by Category",
    chartType: "Stacked Bar Chart",
    c: "Break down your spending by category each week. Compare habits across weeks and adjust accordingly.",
  },
  {
    icon: <BiLineChart className="text-3xl"/>,
    t: "Monthly Trend",
    chartType: "Line Chart",
    c: "Track your spending month over month. Identify growth or reduction trends and forecast future spending.",
  },
];

export default function HomeInsights() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-screen-xl mx-auto">
        <Heading css="text-center" heading="Visualize. Understand. Improve." />
        <p className="mt-2.5 text-myborder/70 text-lg text-center max-w-2xl mx-auto">
          Turn your spending data into meaningful insights. See daily, weekly,
          monthly, and category-wise trends at a glance, and make smarter
          financial decisions.
        </p>
        <div className="mt-16 flex gap-10">
          {CHARTS.map((chart, i) => (
            <div key={i}>
                <h3 className="font-semibold text-lg underline underline-offset-7 text-lightred">
                  {chart.t}
                </h3>
              <p className="mt-2 text-myborder/70  max-w-xs">{chart.c}</p>
              <p className="flex gap-2 items-center  mt-2 text-sm text-myborder/70 font-semibold">{chart.icon}{chart.chartType}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
