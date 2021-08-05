import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Transaction from "./Transaction";
import styled from "styled-components";

const TransactionList = () => {
  const { getExpenses, expenses } = useContext(AppContext);

  useEffect(() => {
    getExpenses();
  }, []);

  const ExpenseList = styled.div`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height: 450px;
    width: 100%;
    overflow-y: scroll;
    padding: 20px;
  `;

  const EmptyArray = styled.div`
    font-size: 24px;
    color: #63e6be;
  `;

  return (
    <ExpenseList>
      {Array.isArray(expenses) && expenses.length ? (
        expenses?.map((expense) => (
          <Transaction
            key={expense?.id}
            id={expense?.id}
            text={expense?.expense}
            amount={expense?.amount}
          />
        ))
      ) : (
        <EmptyArray>There are no descriptions...</EmptyArray>
      )}
    </ExpenseList>
  );
};

export default TransactionList;
