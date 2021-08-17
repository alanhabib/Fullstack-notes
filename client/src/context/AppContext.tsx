import { createContext, useReducer } from "react";
import { IContextModel, IExpenseState } from "./interface";
import Reducer from "./Reducer";

const initialState: IExpenseState = {
  expenses: [],
};

export const AppContext = createContext({} as IContextModel);

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
