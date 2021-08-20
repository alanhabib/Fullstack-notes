import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./context/AppContext";
import ToDoTemplate from "./styling/template";
import { GlobalStyle } from "./styling/globalStyling";
import { JackInTheBox } from "react-awesome-reveal";

function App() {
  return (
    <AppProvider>
      <JackInTheBox triggerOnce>
        <GlobalStyle />
        <ToDoTemplate>
          <IncomeExpenses />
          <TransactionList />
          <AddExpense />
        </ToDoTemplate>
      </JackInTheBox>
    </AppProvider>
  );
}

export default App;
