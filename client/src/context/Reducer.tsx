import { IExpenseAction, IExpenseState } from "./interface";

export default (
  state: IExpenseState,
  action: IExpenseAction
): IExpenseState => {
  switch (action.type) {
    case "GET":
      return {
        ...state,
        expenses: action.payload,
      };
    case "ADD":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case "DELETE":
      return {
        ...state,
        expenses: state.expenses.filter(({ id }) => id !== action.payload),
      };

    case "EDITING":
      return {
        ...state,
        editing: action.payload,
      };

    case "UPDATE":
      const newExpense = state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return action.payload;
        }
        return expense;
      });
      return {
        ...state,
        expenses: newExpense,
      };

    default:
      return state;
  }
};
