import React, { useState } from 'react';
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
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

        const userTimezoneOffset = 420; // Pacific Time Zone offset in minutes (PT is UTC-7:00)
        const selectedDate = new Date(enteredDate + 'T00:00:00'); // Converts the entered date to a Date object (set time to 00:00:00 to avoid time zone issues)
        const adjustedDate = new Date(selectedDate.getTime() + userTimezoneOffset * 60000); // Adjusts the date to the Pacific Time Zone

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: adjustedDate,
        };
        console.log(expenseData.date)
        console.log(enteredDate)
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
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