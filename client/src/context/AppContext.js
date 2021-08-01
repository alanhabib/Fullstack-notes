import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  expenses: [],
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteExpense = (id) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };

  const addExpense = (expense) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        deleteExpense,
        addExpense,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
