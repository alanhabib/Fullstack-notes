import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

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
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");

  const { addExpense } = useContext(AppContext);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!expense || !amount) {
      return;
    }
    const newExpense = {
      expense,
      amount: parseInt(amount),
    };

    addExpense(newExpense);
    setExpense("");
    setAmount("");
  };

  return (
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
  );
};

export default AddExpense;
