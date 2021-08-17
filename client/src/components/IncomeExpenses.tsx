import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import { FaReact } from "react-icons/fa";

const Text = styled.h4`
  color: #20c997;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  & > div {
    flex: 1;
    text-align: center;
  }

  & > div:first-of-type {
    border-right: 1px solid #dedede;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Title = styled.h2`
  color: #20c997;
`;

const IconWrapper = styled.div`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  cursor: pointer;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: white;
  border-radius: 50px;
  border: none;
  outline: none;
  padding: 10px;
  margin-left: 40px;
`;

const IncomeExpenses = () => {
  const { state } = useContext(AppContext);
  const sumAmount = state.expenses?.reduce((total, item) => {
    return (total += item.amount);
  }, 0);

  return (
    <>
      <TitleContainer>
        <Title>Welcome!</Title>
        <IconWrapper>
          <FaReact />
        </IconWrapper>
      </TitleContainer>

      <DescriptionWrapper>
        <div>
          <Text>Expenses: {state.expenses.length}</Text>
        </div>
        <div>
          <Text>Amount: {sumAmount}</Text>
        </div>
      </DescriptionWrapper>
    </>
  );
};

export default IncomeExpenses;
