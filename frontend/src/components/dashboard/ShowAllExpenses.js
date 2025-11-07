const expense = {
  amount: 280,
  category: "Groceries",
  date: "2025-10-16T17:45:00.000Z",
  description_original: "veg market",
  description_processed: "vegetable market",
  _id: "68e918807ab480eb64ba7faa",
};

import { FaPerson } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";

export default function ShowAllExpenses({ singleDateExpense }) {
  console.log("singleDateExpense", singleDateExpense);
  return (
   <div className="">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-30  blur-3xl z-0"></div>
      {
        singleDateExpense.length === 0
        ?
        (
          <div className="mt-10 p-4 rounded-xl max-w-md bg-white/20 backdrop-blur-sm ring-1 ring-lightgray/60 ">
           <p className="text-center text-white">No expense on this day.</p>
           </div>
        )
        :
        (
           <div className="mt-10 relative z-10 flex flex-wrap gap-4 mx-auto">
        {singleDateExpense.map((expense) => (
          <div key={expense._id} className="p-4 rounded-xl min-w-sm bg-white/20 backdrop-blur-sm ring-1 ring-lightgray/60 ">
            <div className="space-y-3">
              <div className="flex gap-4 items-center">
              <h1 className="text-mywhite text-xl font-semibold">
                {expense.category}
              </h1>
               <h3 className="text-sm bg-lightblue text-lightred p-1 rounded-lg">
                ₹{expense.amount}
              </h3>
              </div>
              <div className="space-y-1">
                <p className="text-mywhite flex gap-2 text-sm items-center">
                  <span className="flex gap-2 items-center text-lightgray">
                    <FaPerson />
                    original description:{" "}
                  </span>
                  {expense.description_original}
                </p>
                <p className="text-mywhite flex gap-2 text-sm items-center">
                  <span className="flex gap-2 items-center text-lightgray">
                    <FaRobot />
                    processed description:{" "}
                  </span>
                  {expense.description_processed}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
        )
      }
     
    </div>
  );
}
