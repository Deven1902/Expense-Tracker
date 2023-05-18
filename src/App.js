import React, { useState, useEffect } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      const newExp = [expense, ...prevExpenses];
      localStorage.setItem("expenses", JSON.stringify(newExp));
      return newExp
    });
  };

  useEffect(() => {
    let exp = localStorage.getItem('expenses')

    if (exp) {
      exp = JSON.parse(exp)
    }
    else {
      exp = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 50,
          date: new Date(2020, 7, 14),
        },

        {
          id: 'e2',
          title: 'New TV',
          amount: 50000,
          date: new Date(2021, 2, 12),
        },

        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 10000,
          date: new Date(2021, 2, 28),
        },

        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ];
    }

    for (let i in exp) {
      exp[i].date = new Date(exp[i].date)
    }
    setExpenses(exp)
  }, []);


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;