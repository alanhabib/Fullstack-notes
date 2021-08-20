import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Transaction from "./Transaction";
import styled from "styled-components";
import axios from "axios";

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

const TransactionList = () => {
  const { state, dispatch } = useContext(AppContext);

  const getExpenses = async () => {
    const res = await axios.get("http://localhost:8080/api/get");
    dispatch({
      type: "GET",
      payload: res.data.data,
    });
  };

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <ExpenseList>
      {Array.isArray(state.expenses) && state.expenses.length ? (
        state.expenses?.map((expense) => (
          <Transaction
            key={expense?.id}
            id={expense?.id}
            expense={expense?.expense}
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
