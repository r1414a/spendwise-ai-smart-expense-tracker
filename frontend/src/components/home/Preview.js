import Heading from "../ui/Heading";

const PREVIEW = [
  {
    t: "Daily Expenses",
    c: " Track what you spend each day with an easy, intuitive view with easy access to past day's expenses.",
  },
  {
    t: "Core Metrics",
    c: " Instantly see your total spend in a month, average spend per day, and top three categories you spend on.",
  },
  {
    t: "Natural Input in Hinglish",
    c: " Simply type things like “1kg bhindi 130rs” — no strict format needed. The AI understands, extracts amount, and categorizes it automatically.",
  },
];

export default function Preview() {
  return (
    <section className="bg-lightblue py-32">
      <div className="max-w-screen-xl mx-auto">
        <Heading
          css="text-center"
          heading="See Your Finances Clearly"
        />
        <p className="mt-2.5 text-myborder/70 text-lg text-center max-w-lg mx-auto">
          Get a complete overview of your daily spending and long-term progress,
          powered by AI insights.
        </p>
        <div className="mt-16">
            <ul className="flex justify-between space-y-3">
              {PREVIEW.map((item) => (
                <li key={item.t}>
                  <span className="text-lightred font-semibold text-xl underline underline-offset-6">
                    {item.t}
                  </span>
                  <p className="mt-1 text-myborder/70  max-w-xs">{item.c}</p>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </section>
  );
}

/*
3. Dashboard Preview Section — “See Your Finances Clearly”

Show a screenshot or live demo of your dashboard:

Daily expenses view

Core metrics (Total, Average, Projected)

Category cards

You can even animate it slightly or fake a dashboard UI using a mock image.

🔹 4. Insights & Charts Section — “Visualize. Understand. Improve.”

Stacked Bar chart → weekly spending by category

Line chart → monthly trend

Pie chart → spending breakdown

Add small explanation:

“AI turns your numbers into meaningful insights.”
*/
