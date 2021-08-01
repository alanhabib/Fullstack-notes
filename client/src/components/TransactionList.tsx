import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { expenses } = useContext(AppContext);
  return (
    <div>
      <>
        <h3>History</h3>
        <ul className="list">
          {expenses.map((expense: any) => (
            <Transaction
              key={expense.id}
              id={expense.id}
              text={expense.text}
              amount={expense.amount}
            />
          ))}
        </ul>
      </>
    </div>
  );
};

export default TransactionList;
