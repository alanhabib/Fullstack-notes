import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Balance = () => {
  const { expenses } = useContext(AppContext);
  const sumAmount = expenses.reduce((total: number, item: any) => {
    return (total += item.amount);
  }, 0);
  return (
    <>
      <h4>YOUR BALANCE</h4>
      <h1 id="balance">Amount: {sumAmount}</h1>
    </>
  );
};

export default Balance;
