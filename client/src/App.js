import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddExpense from "./components/AddExpense";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import { createGlobalStyle } from "styled-components";
import ToDoTemplate from "./styling/template";

const GlobalStyle = createGlobalStyle`

:root {
  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

* {
  box-sizing: border-box;
}

body {
  background-color: #e9ecef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
}

h1 {
  letter-spacing: 1px;
  margin: 0;
}

h4 {
  margin: 0;
  text-transform: uppercase;
}
`;

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <ToDoTemplate>
        <IncomeExpenses />
        <TransactionList />
        <AddExpense />
      </ToDoTemplate>
    </AppProvider>
  );
}

export default App;
