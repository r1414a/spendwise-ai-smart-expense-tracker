"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import AddExpenseInput from "./AddExpenseInput";
import DatesForSelection from "./DatesForSelection";
import ShowAllExpenses from "./ShowAllExpenses";
import useSWR from "swr";
import ExpenseLoadingSkeleton from "./ExpenseLoadingSkeleton";

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

export default function ShowAndAddExpenseWrapper() {
  const [expenses, setExpenses] = useState([]);
  const today = new Date();
  const [sevenDate, setSevenDate] = useState({
    iso: today.toISOString(),
    string: new Date(today).toISOString().split("T")[0],
  });

  const [beforeDate, setBeforeDate] = useState({
    iso: "",
    string: "",
  });


  // const todaycopy = new Date();
  // const sevendaybeforedate = todaycopy.setDate(todaycopy.getDate() - 6);
  // const sevendaybeforedatestart = new Date(sevendaybeforedate).setHours(0, 0, 0, 0);

  // const isDateLessThanPastSevenDays = new Date(selectedDate.iso).getTime() < sevendaybeforedatestart

  const key = !expenses.length ? ["/api/expense/get-expense", sevenDate.iso] : null;

  const { data: pastSevenExpense, isLoading, mutate: mutateSeven } = useSWR(
    key,
    getExpenses,
    {
      // fallbackData: singleDateExpense,
      revalidateOnFocus: false,
      revalidateOnReconnect: true
    }
  );

  const key2 = beforeDate.iso ? ["/api/expense/get-expense", beforeDate.iso] : null;
  const {
    data: beforeSevenExpense,
    isLoading: beforeSevenLoading,
    error: beforeSevenError,
    mutate: mutateBefore
  } = useSWR(
    key2,
    getExpenses,
    {
      // fallbackData: singleDateExpense,
      revalidateOnFocus: false,
      revalidateOnReconnect: true
    }
  );


  useEffect(() => {
    if (!pastSevenExpense) return;

    setExpenses(pastSevenExpense);
  }, [pastSevenExpense]);

  // new Date("2025-11-19T19:00:00.000Z")
  const selectedDateExpense = useMemo(() => {
    console.log("running memo", expenses)

    if (beforeDate.iso) {
      return beforeSevenExpense || [];
    }

    if (!expenses.length) return [];

    const start = new Date(sevenDate.iso).setHours(0, 0, 0, 0);
    const end = new Date(sevenDate.iso).setHours(23, 59, 59, 0)
    console.log(start, end)

    return expenses.filter((item) => {
      const itemTime = new Date(item.date).getTime();
      return itemTime >= start && itemTime <= end;
    });
  }, [expenses, sevenDate, beforeDate, beforeSevenExpense]);

  function handleDateClick(e, date) {
    const { name } = e.target;
    console.log("clicked date", date, name);
    if (name === "seven") {
      if (beforeDate.iso) {
        setBeforeDate({
          iso: "", string: ""
        })
      }
      setSevenDate({
        iso: date.toISOString(),
        string: new Date(date).toISOString().split("T")[0],
      })
      return;
    }

    if (sevenDate.iso) {
      setSevenDate({
        iso: "", string: ""
      })
    }
    setBeforeDate({
      iso: date.toISOString(),
      string: new Date(date).toISOString().split("T")[0],
    });
  }

  console.log("parent", expenses);

  return (
    <section>
      {/* <div className="flex justify-between  max-w-screen-xl mx-auto">
        
      </div> */}
      <div className="relative bg-darkblue py-16 z-0 min-h-[80vh] px-4 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-4">
          <div className="order-2 md:order-1 basis-2/3 ">
            <DatesForSelection
              handleDateClick={handleDateClick}
              sevenDateInString={sevenDate.string}
              beforeDateInString={beforeDate.string}
            />
            
            {/* <ExpenseLoadingSkeleton/> */}

            {
              isLoading ? (<ExpenseLoadingSkeleton/>)
                :
                (
                  <ShowAllExpenses singleDateExpense={selectedDateExpense || []} />
                )
            }

          </div>

          <div className="order-1 md:order-2 basis-1/3">
            <AddExpenseInput selectedDate={beforeDate.iso ? { ...beforeDate, from: "before" } : { ...sevenDate, from: "seven" }}
              setExpenses={setExpenses}
              mutateBefore={mutateBefore} />
          </div>
        </div>
      </div>
    </section>
  );
}
