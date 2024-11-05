import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { v4 as uuidv4 } from 'uuid'; //https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13
import { createExpense } from "../../utils/expense-utils";
import ExpenseItem from "./ExpenseItem";

const AddExpenseForm = () => {
  // Exercise: Consume the AppContext here

  const initialExpense = {
    id: "",
    description: "",
    cost: 0,
  };

  const { expenses, setExpenses } = useContext(AppContext);

  const [expenseItem, setExpenseItem] = useState(initialExpense); 

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isNaN(expenseItem.cost) || expenseItem.cost <= 0) {
      return;
    }

    const create = {
      id: uuidv4(),
      description: expenseItem.description,
      cost: expenseItem.cost,
    }

    createExpense(create); 

    setExpenses([...expenses, create]);

    setExpenseItem(initialExpense);

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
            value={expenseItem.description}
            onChange = {(event) =>
              setExpenseItem({ ...expenseItem, description: event.target.value })}>
          </input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required
            type="text"
            className="form-control"
            id="cost"
            value={expenseItem.cost || ''}
            onChange={(event) =>
              setExpenseItem({ ...expenseItem, cost: Number(event.target.value) })}>
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
