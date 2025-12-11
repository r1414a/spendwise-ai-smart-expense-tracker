"use client";

import { memo, useMemo } from "react";
import Calendar from "./Calendar";


const DatesForSelection = ({ handleDateClick, sevenDateInString, beforeDateInString }) => {
  // console.log("dateForSelection")
  const today = new Date();
  const last7Days = useMemo(() => {
    const result = [...Array(7)].map((_, index) => {
      const d = new Date();
      // console.log(d);
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
            name="seven"
            key={i}
            onClick={(e) => handleDateClick(e,item)}
            className={`${
              new Date(item).toISOString().split("T")[0] == sevenDateInString
                ? "bg-lightred "
                : "bg-lightblue text-gray outline outline-lightgray/40"
            } rounded-sm w-10 h-10 sm:w-12 sm:h-12 cursor-pointer hover:bg-lightred hover:text-mywhite`}
          >
            {item.getDate()}
          </button>
        ))}
      </div>
      <Calendar handleDateClick={handleDateClick} beforeDateInString={beforeDateInString}/>
    </div>
  );
}


export default memo(DatesForSelection);