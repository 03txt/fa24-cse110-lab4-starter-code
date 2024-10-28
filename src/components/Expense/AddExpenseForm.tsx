import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

const AddExpenseForm = () => {
  // Exercise: Consume the AppContext here

  const initialExpense = {
    id: "",
    name: "",
    cost: 0,
  };

  const { expenses, setExpenses } = useContext(AppContext);

  const [expenseItem, setExpenseItem] = useState(initialExpense); 

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const create = {
      id: "",
      name: expenseItem.name,
      cost: expenseItem.cost,
    }

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
