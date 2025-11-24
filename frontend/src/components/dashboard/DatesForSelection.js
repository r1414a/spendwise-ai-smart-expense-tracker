"use client";

import { memo, useMemo } from "react";
import Calendar from "./Calendar";


const DatesForSelection = ({ handleDateClick, selectedDateInString }) => {
  console.log("dateForSelection")
  const today = new Date();
  const last7Days = useMemo(() => {
    const result = [...Array(7)].map((_, index) => {
      const d = new Date();
      console.log(d);
      d.setDate(today.getDate() - index);
      return d;
    });

    return result.reverse();
  },[]);
  return (
    <div className="relative text-mywhite z-40 flex flex-col md:flex-row items-start md:items-center justify-start gap-4">
      <div className="absolute -top-8">
        <p className="font-semibold ">Select date:</p>
      </div>
      <div className="flex gap-2 items-center">
        {last7Days.map((item, i) => (
          <button
            key={i}
            onClick={() => handleDateClick(item, i)}
            className={`${
              new Date(item).toISOString().split("T")[0] == selectedDateInString
                ? "bg-lightred "
                : "bg-lightblue text-gray outline outline-lightgray/40"
            } rounded-md py-2 md:py-2.5 px-3 md:px-4 cursor-pointer hover:bg-lightred hover:text-mywhite`}
          >
            {item.getDate()}
          </button>
        ))}
      </div>
      <Calendar handleDateClick={handleDateClick} />
    </div>
  );
}


export default memo(DatesForSelection);