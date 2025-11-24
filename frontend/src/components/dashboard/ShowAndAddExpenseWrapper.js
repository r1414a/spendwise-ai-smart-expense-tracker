"use client";

import { useCallback, useState } from "react";
import AddExpenseInput from "./AddExpenseInput";
import DatesForSelection from "./DatesForSelection";
import ShowAllExpenses from "./ShowAllExpenses";
import useSWR from "swr";

const getExpenses = async ([url, date]) => {
  console.log("getEXPENSE", date);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ date }),
  });
  const data = await res.json();
  return data.result;
};

export default function ShowAndAddExpenseWrapper({ singleDateExpense }) {
  const today = new Date();
  // const [expenses, setExpenses] = useState(singleDateExpense);
  const [selectedDate, setSelectedDate] = useState({
    iso: today.toISOString(),
    string: new Date(today).toISOString().split("T")[0],
  });

  const { data, isLoading, mutate } = useSWR(
    ["/api/expense/get-expense", selectedDate.iso],
    getExpenses,
    {
      fallbackData: singleDateExpense,
      revalidateOnFocus: false,
      revalidateOnReconnect: true
    }
  );

  function handleDateClick(date) {
    setSelectedDate({
      iso: date.toISOString(),
      string: new Date(date).toISOString().split("T")[0],
    }); 
  }

  console.log(data);
  return (
    <section>
      {/* <div className="flex justify-between  max-w-screen-xl mx-auto">
        
      </div> */}
      <div className="relative bg-darkblue py-16 z-0 min-h-[80vh] px-4 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-4">
          <div className="order-2 md:order-1 basis-2/3 ">
            <DatesForSelection
              handleDateClick={handleDateClick}
              selectedDateInString={selectedDate.string}
            />
            {/* {isLoading ? (
              <p className="text-mywhite"->Loading...</p>
            ) : ( */}
              <ShowAllExpenses singleDateExpense={data || []} />
            {/* )} */}
          </div>

          <div className="order-1 md:order-2 basis-1/3">
            <AddExpenseInput selectedDate={selectedDate} mutateExpenses={mutate}/>
          </div>
        </div>
      </div>
    </section>
  );
}
