import React, { Dispatch } from "react";

export interface IExpenseItem {
  id?: string;
  expense: string;
  amount: number;
}

export interface IExpenseState {
  expenses: IExpenseItem[];
}

export interface IContextModel {
  state: IExpenseState;
  dispatch: Dispatch<IExpenseAction>;
}

export type IExpenseAction =
  | { type: "ADD"; payload: IExpenseItem }
  | { type: "DELETE"; payload: string }
  | { type: "GET"; payload: IExpenseItem[] };
