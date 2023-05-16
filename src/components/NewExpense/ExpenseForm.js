import React, { useState } from 'react';
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        console.log(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredTitle('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className="new_expense__control">
                    <label>Title</label>
                    <input type='text'placeholder="Title" onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className="new_expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" placeholder='0' onChange={amountChangeHandler} value={enteredAmount}/>
                </div>
                <div className="new_expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler} value={enteredDate}/>
                </div>
            </div>
            <div className="new_expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm