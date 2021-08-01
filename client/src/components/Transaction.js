import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const Transaction = (props) => {
  const { deleteExpense } = useContext(AppContext);

  return (
    <li>
      {props.text}
      <div>
        <span className="badge badge-primary badge-pill mr-3">
          £{props.amount}
        </span>
        <TiDelete
          onClick={() => deleteExpense(props.id)}
          size="1.5em"
        ></TiDelete>
      </div>
    </li>
  );
};

export default Transaction;
