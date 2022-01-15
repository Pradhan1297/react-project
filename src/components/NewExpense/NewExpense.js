import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const onSubmitFormHandler = (enteredExpense) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpense,
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitForm={onSubmitFormHandler} />
    </div>
  );
};

export default NewExpense;
