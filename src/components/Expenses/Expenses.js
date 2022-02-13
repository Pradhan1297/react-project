import Card from "../UI/Card";
import { useState } from "react";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [yearSelected, setYearSelected] = useState("2020");
  const yearSelectionHandler = (year) => {
    setYearSelected(year);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearSelected;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={yearSelected}
          onYearSelection={yearSelectionHandler}
        />
        {/* {props.items.filter(expense => expense.date.getFullYear() == yearSelected).map((filteredexpense) => ( */}
        {/* {filteredExpenses.map((filteredexpense) => (
        <ExpenseItem
          key={filteredexpense.id}
          title={filteredexpense.title}
          amount={filteredexpense.amount}
          date={filteredexpense.date}
        />
      ))} */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
