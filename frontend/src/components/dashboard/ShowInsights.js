"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Slider from "react-slick";


const insights = [
  {
    title: "High Bill & Utilities Spending in a Recent Week",
    detail:
      "A significant portion of your spending (₹799) in a recent week was allocated to 'Bills & utilities,' which dominated the week's total expenditure. Consider reviewing subscription plans or utility usage for potential savings.",
  },
  {
    title: "Family & Pets Spending Concentrated in One Week",
    detail:
      "Your 'Family & pets' expenses (₹350) were recorded entirely in a single week. Planning such expenses in advance could help balance your weekly budget.",
  },
  {
    title: "Entertainment as a Major Spending Category",
    detail:
      "'Entertainment' accounted for ₹230 in a recent week, making it one of the top spending categories. Tracking discretionary spending could help identify opportunities to save.",
  },
  {
    title: "Partial Data for Current Month",
    detail:
      "Early signs show lower spending (₹1,279) this month compared to previous months. Monitor trends as the month progresses to ensure alignment with your budget.",
  },
  {
    title: "Significant Spending Fluctuations Across Months",
    detail:
      "Your monthly spending varied significantly, peaking in September (₹43,839) and dropping sharply in November (₹1,279 so far). Reviewing these fluctuations can help in creating a more stable budget plan.",
  },
];

export default function ShowInsights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    dots: true,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "40px" },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, centerPadding: "20px" },
      },
    ],
  };
  return (
    <div className="relative bg-white pt-32 pb-44 z-0">
      <div className="max-w-screen-xl mx-auto">
        <Slider {...settings} className="slider-container">
          {insights.map((insight, i) => (
            <div key={i} className="px-2 py-3">
              <motion.div
                initial={{scale: 0.95, opacity: 0.8}}
                animate={{
                    scale: activeIndex === i ? 1.05 : 0.95,
                    opacity: activeIndex === i ? 1 : 0.8
                }}
                transition={{ duration: 0.3, ease: "easeInOut"}}
                className={`min-h-[250px] h-full p-6 rounded-xl flex flex-col space-y-3 transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-white border-2 border-lightred"
                    : "bg-mywhite"
                }`}
              >
                <h2 className="text-xl font-bold leading-7 tracking-tight max-w-sm text-lightred">
                  {insight.title}
                </h2>
                <p>{insight.detail}</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
