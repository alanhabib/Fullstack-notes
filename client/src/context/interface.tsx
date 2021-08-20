import React, { Dispatch } from "react";

export interface IExpenseItem {
  id?: string;
  expense: string;
  amount: number;
}

export interface IEditItem {
  id: string;
  bool: boolean;
}

export interface IExpenseState {
  expenses: IExpenseItem[];
  editing: IEditItem;
}

export interface IContextModel {
  state: IExpenseState;
  dispatch: Dispatch<IExpenseAction>;
}

export type IExpenseAction =
  | { type: "ADD"; payload: IExpenseItem }
  | { type: "DELETE"; payload: string }
  | { type: "GET"; payload: IExpenseItem[] }
  | { type: "EDITING"; payload: IEditItem }
  | { type: "UPDATE"; payload: IExpenseItem };
