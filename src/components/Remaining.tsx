import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses } = useContext(AppContext);
  let budget = 1000;

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const budgetLeft = budget - totalExpenses;

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  // Exercise: Create an alert when Remaining is less than 0.
  useEffect(() => {

      if (budgetLeft < 0) {
        window.alert("Warning: You have exceeded your budget!");
      }
    }, [budgetLeft]);

  return (

    <div className={`alert ${alertType}`}>
      <span>Remaining: ${budgetLeft}</span>
    </div>
  );
};
export default Remaining;
