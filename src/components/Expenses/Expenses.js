import Card from "../UI/Card";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [yearSelected, setYearSelected] = useState("2020");
  const yearSelectionHandler = (year) => {
    setYearSelected(year);
  };
  const filteredExpenses = () => {
    return props.item.filter(
      (expense) => expense.date.getFullYear().toString() === yearSelected
    );
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={yearSelected}
        onYearSelection={yearSelectionHandler}
      />
      {/* {props.items.filter(expense => expense.date.getFullYear() == yearSelected).map((filteredexpense) => ( */}
      {filteredExpenses.map((filteredexpense) => (
        <ExpenseItem
          key={filteredexpense.id}
          title={filteredexpense.title}
          amount={filteredexpense.amount}
          date={filteredexpense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
