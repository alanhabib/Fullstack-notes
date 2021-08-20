import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import { IExpenseItem } from "../context/interface";
import axios from "axios";

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  font-size: 60px;
  color: white;
  border-radius: 40px;
  border: none;
  outline: none;
`;

const InputWrapper = styled.div``;

const Input = styled.input`
  border: 1px solid #dedede;
  border-radius: 8px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #dedede;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #63e6be;
  }
`;

const Label = styled.label`
  display: inline-block;
  color: #20c997;
  margin: 8px 0;
  font-weight: 700;
`;

const Title = styled.h3`
  border-bottom: 1px solid #dedede;
  padding-bottom: 10px;
  margin: 40px 0 10px;
  color: #20c997;
`;

const Container = styled.div`
  margin-bottom: 30px;
`;

const AddExpense = () => {
  const [expense, setExpense] = useState<string | undefined>("");
  const [amount, setAmount] = useState<any>("");

  const { dispatch, state } = useContext(AppContext);

  const addExpense = async (expense: IExpenseItem) => {
    await axios.post("http://localhost:8080/api/insert", expense);
    dispatch({
      type: "ADD",
      payload: expense,
    });

    const res = await axios.get("http://localhost:8080/api/get");
    dispatch({
      type: "GET",
      payload: res.data.data,
    });
  };

  useEffect(() => {
    if (state.editing.bool) {
      let pressedItem = state.expenses.find((e) => e.id === state.editing.id);
      setExpense(pressedItem?.expense);
      setAmount(pressedItem?.amount);
    }
  }, [state.editing]);

  const onSubmit = async (event: React.SyntheticEvent): Promise<any> => {
    event.preventDefault();
    if (!expense || !amount) {
      return;
    }
    const newExpense = {
      expense,
      amount: parseInt(amount),
    };

    if (state.editing.bool) {
      const updatedExpense = {
        id: state.editing.id,
        expense,
        amount,
      };
      dispatch({
        type: "UPDATE",
        payload: updatedExpense,
      });

      await axios.put("http://localhost:8080/api/update", updatedExpense);

      const res = await axios.get("http://localhost:8080/api/get");
      dispatch({
        type: "GET",
        payload: res.data.data,
      });

      dispatch({
        type: "EDITING",
        payload: { ...state.editing, bool: false },
      });
      setExpense("");
      setAmount("");
      return;
    }

    addExpense(newExpense);
    setExpense("");
    setAmount("");
  };

  const handleUpdate = (updatedTodo: any) => {
    const updated = state.expenses.map((item: IExpenseItem) => {
      return item.id === state.editing.id ? updatedTodo : item;
    });
  };

  return (
    <>
      {state.editing.bool ? (
        // if we are editing - display the edit todo input
        // make sure to add the handleEditFormSubmit function in the "onSubmit" prop
        <>
          <Title>Edit your expense</Title>
          <Container>
            <InputWrapper>
              <Label htmlFor="text">Description</Label>
              <Input
                onChange={(e) => setExpense(e.target.value)}
                type="text"
                value={expense}
                placeholder="Enter description..."
                name="expense"
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="amount">Amount</Label>
              <Input
                name="amount"
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                value={amount}
                placeholder="Enter amount..."
              />
            </InputWrapper>
          </Container>
          <CircleButton onClick={onSubmit}>
            <MdAdd />
          </CircleButton>
        </>
      ) : (
        <>
          <Title>Add new description</Title>
          <Container>
            <InputWrapper>
              <Label htmlFor="text">Description</Label>
              <Input
                onChange={(e) => setExpense(e.target.value)}
                type="text"
                value={expense}
                placeholder="Enter description..."
                name="text"
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="amount">Amount</Label>
              <Input
                name="amount"
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                value={amount}
                placeholder="Enter amount..."
              />
            </InputWrapper>
          </Container>
          <CircleButton onClick={onSubmit}>
            <MdAdd />
          </CircleButton>
        </>
      )}
    </>
  );
};

export default AddExpense;
