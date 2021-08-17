import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { MdDelete } from "react-icons/md";
import styled from "styled-components";
import axios from "axios";
import { IExpenseItem } from "../context/interface";

const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const ToDoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #fff;
  box-shadow: var(--box-shadow);
  color: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 10px 0;
  border-radius: 8px;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding: 0 8px;
  color: #20c997;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Transaction = (props: IExpenseItem) => {
  const { dispatch } = useContext(AppContext);

  const deleteExpense = async (id: any) => {
    await axios.delete(`http://localhost:8080/api/delete/${id}`);
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  return (
    <ToDoItemBlock>
      <Text>{props.expense}</Text>
      <ButtonWrapper>
        <Text>{props.amount}</Text>
        <Remove
          onClick={() => {
            deleteExpense(props.id);
          }}
        >
          <MdDelete />
        </Remove>
      </ButtonWrapper>
    </ToDoItemBlock>
  );
};

export default Transaction;
