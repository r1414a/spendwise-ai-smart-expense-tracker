"use client";

import { RiDeleteBin6Line } from "react-icons/ri";
import useSWRMutation from "swr/mutation";

const deleteExpense = async(url, {arg}) => {
  const {expenseid} = arg
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}/${expenseid}`,{
    method: "DELETE"
  });
  const data = await res.json();
  return data.result;
}

export default function DeleteExpense({isBefore, mutateBefore, expenseAfterDelete,expenseid}){
    const {
    trigger,
    isMutating,
    error,
  } = useSWRMutation('/api/expense/delete', deleteExpense);

  async function handleExpenseDelete(){
    console.log(expenseid)
      try{
        const res = await trigger({
          expenseid
        });
        console.log("delete res: ", res);

        if(isBefore){
            mutateBefore();
        }

        expenseAfterDelete(expenseid);
      }catch(err){
        console.log("Error while deleting expense: ", err);
      }
  }
    return(
        <div onClick={handleExpenseDelete} className="border border-white p-1 rounded-sm cursor-pointer"><RiDeleteBin6Line className="text-white text-md"/></div>
    )
}