import React, { useState, useContext } from "react";
import { Expense } from "../../types/types";

const AddExpenseForm = () => {
  // Exercise: Consume the AppContext here

  // Exercise: Create name and cost to state variables

  const initialExpense = {
    id: -1,
    name: "",
    cost: "",
  };

  const [expenseItem, setExpenseItem] = useState(initialExpense); 

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Exercise: Add add new expense to expenses context array
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            value={expenseItem.name}
            onChange = {(event) =>
              setExpenseItem({ ...expenseItem, name: event.target.value })}>
          </input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required
            type="text"
            className="form-control"
            id="cost"
            value={expenseItem.cost}
            onChange={(event) =>
              setExpenseItem({ ...expenseItem, cost: event.target.value })}>
          </input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
