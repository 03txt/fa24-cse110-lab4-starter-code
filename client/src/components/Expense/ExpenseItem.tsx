import { Expense } from "../../types/types";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";


const ExpenseItem = (currentExpense: Expense) => {
  // Exercise: Consume the AppContext here

  const { expenses, setExpenses } = useContext(AppContext);
  
  const handleDeleteExpense = (currentExpense: Expense) => {
    // Exercise: Remove expense from expenses context array

      //Filter list with unwanted budget list
      const currentExpenses = expenses.filter(
        (expense) => expense.id !== currentExpense.id
      );

      setExpenses(currentExpenses);

  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>{currentExpense.description}</div>
      <div>${currentExpense.cost}</div>
      <div>
        <button onClick={() => handleDeleteExpense(currentExpense)}>
          x
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
