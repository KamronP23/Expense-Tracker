import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


function App() {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021 ,0, 28)
    },
    {
      id: 2,
      title: "Car Payment",
      amount: 228.00,
      date: new Date(2021 ,1, 28)
    },
    {
      id: 3,
      title: "Gas Payment",
      amount: 41.75,
      date: new Date(2021 ,3, 28)
    },
    {
      id: 4,
      title: "Carwash Cost",
      amount: 24.99,
      date: new Date(2021 ,4, 28)
    },
  ]
  console.log(expenses)
  const addExpenseHandler = expense => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
