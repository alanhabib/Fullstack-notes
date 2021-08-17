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
        expenses: state.expenses.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
