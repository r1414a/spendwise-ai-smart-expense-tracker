import { useState } from "react";
import InputHelperText from "./InputHelperText";
import useSWRMutation from "swr/mutation";

const addExpense = async (url, { arg }) => {
  const { description_original, amount, date } = arg;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ expenseDetails: { description_original, amount, date } }),
  })
  const data = await res.json();
  return data.result;
}

export default function AddExpenseInput({ selectedDate, setExpenses, mutateBefore }) {
  const [expenseDetails, setExpenseDetails] = useState({
    description: "",
    amount: 0,
  });

  const {
    trigger,
    isMutating,
    error
  } = useSWRMutation("/api/expense/create", addExpense)


  async function handleAddClick(e) {
    e.preventDefault();
    try {
      const res = await trigger({
        description_original: expenseDetails.description,
        amount: expenseDetails.amount,
        date: selectedDate.iso
      })
      console.log("result", res);

      if (selectedDate.from === "before") {
        mutateBefore();
      } else {
        setExpenses((prev) => ([...prev, res]));
        // mutateSeven();
      }

      setExpenseDetails({ description: "", amount: "" });
    } catch (err) {
      console.log("Error while adding expense: ", err);
    }
  }

  return (
    <div className=" flex flex-col gap-3">
      <p className="text-lg font-memdium text-mywhite tracking-wide">
        What did you spend your money?
      </p>
      <form onSubmit={(e) => handleAddClick(e)} className="flex gap-2 items-end">
        <div className="flex gap-2">
          <div>
            <label
              htmlFor="expense_description"
              className="block text-sm font-semibold text-lightgray tracking-wide"
            >
              Description:
            </label>

            <input
              onChange={(e) =>
                setExpenseDetails((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              type="text"
              value={expenseDetails.description}
              id="expense_description"
              className="block w-full p-2.5 bg-lightblue text-sm text-boxbg border border-lightgray/20 rounded-lg tracking-wider focus:ring-0 focus:outline-none placeholder:tracking-wider placeholder:text-myborder/70"
              placeholder="1kg ki chini"
              required
            />
          </div>
          <div>
            <label
              htmlFor="expense-amount"
              className="block text-sm font-semibold text-lightgray tracking-wide"
            >
              Amount:
            </label>
            <input
              type="number"
              id="expense-amount"
              value={expenseDetails.amount}
              onChange={(e) =>
                setExpenseDetails((prev) => ({
                  ...prev,
                  amount: Number(e.target.value),
                }))
              }
              aria-describedby="helper-text-explanation"
              className="block w-full p-2.5 bg-lightblue text-sm text-boxbg border border-lightgray/20 rounded-lg tracking-wider focus:ring-0 focus:outline-none placeholder:tracking-wider placeholder:text-myborder/70"
              placeholder="120"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={!expenseDetails.description || expenseDetails.amount === 0 || isMutating}
          className="bg-lightred hover:bg-mywhite text-mywhite hover:text-gray font-medium rounded-md text-sm px-4 py-2.5 cursor-pointer disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:bg-lightred"
        >
          {isMutating ? "Adding" : "Add"}
        </button>
      </form>
      <p className=" text-lightred text-sm">
        This expense will be added for date: {selectedDate.string}
      </p>
      <InputHelperText />
    </div>
  );
}
