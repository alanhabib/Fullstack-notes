import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./context/AppContext";
import ToDoTemplate from "./styling/template";
import { GlobalStyle } from "./styling/globalStyling";

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
