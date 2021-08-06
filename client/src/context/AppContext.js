import axios from "axios";
import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  expenses: [],
  error: null,
  loading: true,
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getExpenses = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/get");
      dispatch({
        type: "GET_EXPENSES",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "EXPENSE_ERROR",
        payload: err,
      });
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/delete/${id}`);
      dispatch({
        type: "DELETE_EXPENSE",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "EXPENSE_ERROR",
        payload: err.response.data.error,
      });
    }
  };

  const addExpense = async (expense) => {
    try {
      await axios.post("http://localhost:8080/api/insert", expense);
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    } catch (err) {
      dispatch({
        type: "EXPENSE_ERROR",
        payload: err.response.data.error,
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        error: state.error,
        loading: state.loading,
        getExpenses,
        deleteExpense,
        addExpense,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
