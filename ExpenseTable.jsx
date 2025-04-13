import React from "react";
import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";

const ExpenseTable = ({ expenses, deleteExpense, sortExpenses }) => {
  return (
    <div style={{ margin: "1rem" }}>
      <div style={{ marginBottom: "1rem", textAlign: "center" }}>
        <button
          onClick={() => sortExpenses("name")}
          style={{ marginRight: "0.5rem" }}
        >
          Sort by Name
        </button>
        <button onClick={() => sortExpenses("category")}>
          Sort by Category
        </button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ddd" }}>Expense Name</th>
            <th style={{ borderBottom: "1px solid #ddd" }}>Category</th>
            <th style={{ borderBottom: "1px solid #ddd" }}>Amount</th>
            <th style={{ borderBottom: "1px solid #ddd" }}>Date</th>
            <th style={{ borderBottom: "1px solid #ddd" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length ? (
            expenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                expense={expense}
                onDelete={deleteExpense}
              />
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "1rem" }}>
                No expenses found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

ExpenseTable.propTypes = {
  expenses: PropTypes.array.isRequired,
  deleteExpense: PropTypes.func.isRequired,
  sortExpenses: PropTypes.func.isRequired,
};

export default ExpenseTable;
