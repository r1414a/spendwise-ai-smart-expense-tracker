"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Label,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import BarCustomTooltip from "./BarCustomTooltip";
import ChartDesc from "./ChartDesc";


const data = {
  result: {
    dailySpend: [
      {
        _id: "02",
        total: 199,
      },
      {
        _id: "03",
        total: 870,
      },
      {
        _id: "04",
        total: 120,
      },
      {
        _id: "05",
        total: 820,
      },
      {
        _id: "06",
        total: 240,
      },
      {
        _id: "07",
        total: 540,
      },
      {
        _id: "08",
        total: 190,
      },
      {
        _id: "09",
        total: 335,
      },
      {
        _id: "10",
        total: 2150,
      },
      {
        _id: "11",
        total: 220,
      },
      {
        _id: "12",
        total: 420,
      },
      {
        _id: "13",
        total: 450,
      },
      {
        _id: "14",
        total: 249,
      },
      {
        _id: "15",
        total: 95,
      },
      {
        _id: "16",
        total: 280,
      },
      {
        _id: "17",
        total: 900,
      },
      {
        _id: "18",
        total: 600,
      },
      {
        _id: "19",
        total: 890,
      },
      {
        _id: "20",
        total: 1800,
      },
      {
        _id: "21",
        total: 50,
      },
      {
        _id: "22",
        total: 310,
      },
      {
        _id: "23",
        total: 244,
      },
      {
        _id: "24",
        total: 320,
      },
      {
        _id: "25",
        total: 2500,
      },
      {
        _id: "26",
        total: 2000,
      },
      {
        _id: "27",
        total: 1150,
      },
    ],
    categorySpend: [
      {
        _id: "Fuel",
        total: 3300,
      },
      {
        _id: "Bills & utilities",
        total: 1898,
      },
      {
        _id: "Food & drinks",
        total: 1500,
      },
      {
        _id: "Groceries",
        total: 1180,
      },
      {
        _id: "Medical",
        total: 915,
      },
      {
        _id: "Entertainment",
        total: 900,
      },
      {
        _id: "Fitness",
        total: 900,
      },
      {
        _id: "Commute",
        total: 590,
      },
      {
        _id: "Household",
        total: 310,
      },
      {
        _id: "Family & pets",
        total: 199,
      },
      {
        _id: "Personal care",
        total: 180,
      },
      {
        _id: "Charity",
        total: 100,
      },
    ],
    weeklySpendByCategory: [
      {
        "_id": 40,
        "categories": [
          {
            "category": "Medical",
            "total": 820
          },
          {
            "category": "Fuel",
            "total": 800
          },
          {
            "category": "Food & drinks",
            "total": 70
          },
          {
            "category": "Bills & utilities",
            "total": 199
          },
          {
            "category": "Groceries",
            "total": 120
          }
        ],
        "weekTotal": 2009
      },
      {
        "_id": 41,
        "categories": [
          {
            "category": "Commute",
            "total": 140
          },
          {
            "category": "Fuel",
            "total": 700
          },
          {
            "category": "Charity",
            "total": 100
          },
          {
            "category": "Groceries",
            "total": 730
          },
          {
            "category": "Entertainment",
            "total": 300
          },
          {
            "category": "Personal care",
            "total": 180
          },
          {
            "category": "Food & drinks",
            "total": 495
          },
          {
            "category": "Bills & utilities",
            "total": 1450
          }
        ],
        "weekTotal": 4095
      },
      {
        "_id": 42,
        "categories": [
          {
            "category": "Bills & utilities",
            "total": 249
          },
          {
            "category": "Entertainment",
            "total": 600
          },
          {
            "category": "Groceries",
            "total": 280
          },
          {
            "category": "Food & drinks",
            "total": 890
          },
          {
            "category": "Fitness",
            "total": 900
          },
          {
            "category": "Medical",
            "total": 95
          },
          {
            "category": "Commute",
            "total": 450
          }
        ],
        "weekTotal": 3464
      },
      {
        "_id": 43,
        "categories": [
          {
            "category": "Food & drinks",
            "total": 365
          },
          {
            "category": "ATM",
            "total": 2000
          },
          {
            "category": "Family & pets",
            "total": 199
          },
          {
            "category": "Groceries",
            "total": 50
          },
          {
            "category": "Fuel",
            "total": 1800
          },
          {
            "category": "Education",
            "total": 2500
          },
          {
            "category": "Household",
            "total": 310
          }
        ],
        "weekTotal": 7224
      },
      {
        "_id": 44,
        "categories": [
          {
            "category": "Bills & utilities",
            "total": 1150
          }
        ],
        "weekTotal": 1150
      }
    ],
    monthlyTrend: [
      {
        month: "Aug 2025",
        total: 28789,
      },
      {
        month: "Sept 2025",
        total: 43839,
      },
      {
        month: "Oct 2025",
        total: 11972,
      },
    ],
  },
  message: "generated charts successfully.",
};

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
const COLORS = ["#111827", "#f02d5e", "#222222", "#5A5A5A", "#171918", "#343835", "#4B5563", "#9B59B6"];

export default function ShowCharts({chartData}) {

  const weeklySpendByCategoryDataTransformed = chartData.weeklySpendByCategory.map((data, index) => {
  const obj = { week: `Week ${index + 1}`};

  data.categories.forEach((c) => {
    obj[c.category] = c.total;
  })

  return obj;
})

const categories = [
  ...new Set(chartData.weeklySpendByCategory.flatMap((week) => week.categories.map((c) => c.category)))
];

  return (
    <section className="bg-lightblue min-h-screen">
      <div className="max-w-[95vw] mx-auto py-32">
        <div className="flex">
          <div className="basis-1/2">
            <ResponsiveContainer width="100%" height={450}>
              <BarChart
                data={chartData.dailySpend}
                margin={{ top: 0, right: 0, left: 10, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={"_id"} stroke="#111827" fontSize={12}>
                  <Label
                    value="Current Month Dates"
                    offset={-10}
                    position="insideBottom"
                    fontSize={14}
                    fontWeight={600}
                    fill="#f02d5e"
                  />
                </XAxis>
                <YAxis stroke="#111827" fontSize={12}>
                  <Label
                    value="Total Spend (₹)"
                    angle={-90}
                    position="insideLeft"
                    fontSize={14}
                    textAnchor="middle"
                    fontWeight={600}
                    fill="#f02d5e"
                  />
                </YAxis>
                {/* <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#BABABA', fontSize: "12px" }} /> */}
                <Tooltip content={<BarCustomTooltip />} />
                <Bar dataKey="total" fill="#f02d5e" barSize={30}>
                  {
                    chartData.dailySpend.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))
                  }
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <ChartDesc desc="This chart shows your total spending for each day of the current month, helping you track and manage daily expenses at a glance."/>
          </div>
          <div className="basis-1/2">
            <ResponsiveContainer width="100%" height={450}>
              <PieChart>
                <Pie
                  activeShape={{
                    fill: "#cccccc"
                  }}
                  data={chartData.categorySpend}
                  dataKey="total"
                  nameKey="_id"
                  cx="50%"
                  cy="50%"
                  label={({name, value}) => `₹${value}`}
                >
                  {
                    chartData.categorySpend.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))
                  }
                </Pie>
                <Tooltip formatter={(name,value) => [`₹${name}`, `${value}`]} wrapperStyle={{ backgroundColor: '#BABABA', fontSize: "12px"}}/>
              </PieChart>
            </ResponsiveContainer>

            <ChartDesc desc="This chart shows how much you’ve spent in each category this month, helping you see where most of your money goes."/>
          </div>
        </div>


        <div className="flex mt-20">
          <div className="basis-1/2">
            <ResponsiveContainer width="100%" height={450}>
                <BarChart data={weeklySpendByCategoryDataTransformed}
                margin={{ top: 0, right: 0, left: 10, bottom: 30 }}
                >
                   <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"week"} stroke="#111827" fontSize={12}>
                  <Label
                    value="Current Month Weeks"
                    offset={-10}
                    position="insideBottom"
                    fontSize={14}
                    fontWeight={600}
                    fill="#f02d5e"
                  />
                </XAxis>
                <YAxis stroke="#111827" fontSize={12}>
                  <Label
                    value="Total Spend (₹)"
                    angle={-90}
                    position="insideLeft"
                    fontSize={14}
                    textAnchor="middle"
                    fontWeight={600}
                    fill="#f02d5e"
                  />
                </YAxis>
                <Tooltip formatter={(name,value) => [`₹${name}`,`${value}`]} wrapperStyle={{ backgroundColor: '#BABABA', fontSize: "12px"}}/>
                {
                  categories.map((cat, idx) => (
                    <Bar
                      key={cat}
                      dataKey={cat}
                      stackId="a"
                      fill={COLORS[idx % COLORS.length]}
                    />
                  ))
                }
                
                </BarChart>
            </ResponsiveContainer>

            <ChartDesc desc="This chart shows your weekly spending across different categories for the month.
It helps you see where most of your money went and how your habits changed each week."/>
          </div>
          <div className="basis-1/2">
            <ResponsiveContainer width="100%" height={450}>
              <LineChart data={chartData.monthlyTrend} margin={{ top: 0, right: 0, left: 10, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="total" stroke="#f02d5e" strokeWidth={2}/>
                <XAxis dataKey="month" stroke="#111827" fontSize={12}>
                  <Label
                    value="Months"
                    offset={-10}
                    position="insideBottom"
                    fontSize={14}
                    fontWeight={600}
                    fill="#f02d5e"
                  />
                </XAxis>
                <YAxis stroke="#111827" fontSize={12}>
                  <Label
                    value="Total Spend (₹)"
                    angle={-90}
                    position="insideLeft"
                    fontSize={14}
                    textAnchor="middle"
                    fontWeight={600}
                    fill="#f02d5e"
                  />
                </YAxis>
                <Tooltip formatter={(name,value) => [`₹${name}`,`${value}`]} wrapperStyle={{ backgroundColor: '#BABABA', fontSize: "12px"}}/>
              </LineChart>
            </ResponsiveContainer>

            <ChartDesc desc="This chart shows your total spending for each month, helping you track how your expenses change over time and identify months where you spent more or saved better."/>
          </div>
        </div>
      </div>
    </section>
  );
}
