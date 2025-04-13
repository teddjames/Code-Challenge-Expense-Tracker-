import React from "react";
import PropTypes from "prop-types";

const ExpenseItem = ({ expense, onDelete }) => {
  return (
    <tr>
      <td style={{ borderBottom: "1px solid #ddd", padding: "0.5rem" }}>
        {expense.name}
      </td>
      <td style={{ borderBottom: "1px solid #ddd", padding: "0.5rem" }}>
        {expense.category}
      </td>
      <td style={{ borderBottom: "1px solid #ddd", padding: "0.5rem" }}>
        ${expense.amount.toFixed(2)}
      </td>
      <td style={{ borderBottom: "1px solid #ddd", padding: "0.5rem" }}>
        {expense.date}
      </td>
      <td style={{ borderBottom: "1px solid #ddd", padding: "0.5rem" }}>
        <button onClick={() => onDelete(expense.id)}>Delete</button>
      </td>
    </tr>
  );
};

ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ExpenseItem;
