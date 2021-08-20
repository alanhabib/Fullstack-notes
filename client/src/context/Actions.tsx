import { IExpenseAction, IExpenseItem } from "./interface";

export const addExpense = (todo: IExpenseItem): IExpenseAction => ({
  type: "ADD",
  payload: todo,
});

export const deleteExpense = (id: string): IExpenseAction => ({
  type: "DELETE",
  payload: id,
});

export const getExpenses = (todo: IExpenseItem[]): IExpenseAction => ({
  type: "GET",
  payload: todo,
});

export const updateExpense = (todo: IExpenseItem): IExpenseAction => ({
  type: "UPDATE",
  payload: todo,
});
