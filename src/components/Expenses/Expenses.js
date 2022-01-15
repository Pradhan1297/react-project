import Card from "../UI/Card";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [yearSelected, setYearSelected] = useState("2020");
  const yearSelectionHandler = (year) => {
    setYearSelected(year);
    console.log(yearSelected);
  };
  return (
    <Card className="expenses">
        <ExpensesFilter
          selectedYear={yearSelected}
          onYearSelection={yearSelectionHandler}
        />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
