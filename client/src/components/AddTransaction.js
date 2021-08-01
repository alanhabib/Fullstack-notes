import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = () => {
  const { addExpense } = useContext(AppContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (!text || !amount) {
      return;
    }
    const expense = {
      id: uuidv4(),
      text,
      amount: parseInt(amount),
    };

    addExpense(expense);
    setText("");
    setAmount("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            value={text}
            id="text"
            placeholder="Enter text..."
            name="text"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            id="amount"
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            value={amount}
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
