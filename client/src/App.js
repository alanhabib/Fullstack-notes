import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddExpense from "./components/AddExpense";
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
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
