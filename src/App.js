import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from 'react';

const DUMMY_EXPENSES = [
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
    date: new Date(2021 ,1, 26)
  },
  {
    id: 3,
    title: "Gas Payment",
    amount: 41.75,
    date: new Date(2021 ,3, 18)
  },
  {
    id: 4,
    title: "Carwash Cost",
    amount: 24.99,
    date: new Date(2021 ,4, 28)
  },
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
