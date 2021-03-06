import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [inputHandler, setInputHandler] = useState({
  //     enteredTitle : '',
  //     enteredAmount : '',
  //     enteredDate : ''
  // });
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setEnteredTitle({
    //     ...inputHandler,
    //     enteredTitle : event.target.value
    // });when there are multiple states scheduled there can be a discrepancy using this approach
    //the following approach ensures that the previous state (latest) is referred(when there is a dependency on previous state then use the following form)
    // setInputHandler((prevState)=>{
    //     return{...prevState,enteredTitle : event.target.value}
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setInputHandler((prevState)=>{
    //     return{...prevState,enteredAmount : event.target.value}
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setInputHandler((prevState)=>{
    //     return{...prevState,enteredDate : event.target.value}
    // });
  };
  // const [buttonClick, setButtonClick] = useState(false);
  // const AddExpenseHandler = () => {
  //   setButtonClick(true);
  // };
  // const cancelHandler = () => {
  //   setButtonClick(false);
  // };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSubmitForm(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  // if (buttonClick) {
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
  // }
  // return (
  //   <div className="new-expense__actions">
  //     <button type="button" onClick={AddExpenseHandler}>
  //       Add Expense
  //     </button>
  //   </div>
  // );
};
export default ExpenseForm;
