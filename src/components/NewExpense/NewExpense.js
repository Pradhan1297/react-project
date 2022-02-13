import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [buttonClick, setButtonClick] = useState(false);

  const addExpenseHandler = () => {
    setButtonClick(true);
  };

  const cancelHandler = () => {
    setButtonClick(false);
  };

  const onSubmitFormHandler = (enteredExpense) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpense,
    };
    setButtonClick(false);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {!buttonClick && (
        <button type="button" onClick={addExpenseHandler}>
          Add Expense
        </button>
      )}
      {buttonClick && (
        <ExpenseForm
          onSubmitForm={onSubmitFormHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
