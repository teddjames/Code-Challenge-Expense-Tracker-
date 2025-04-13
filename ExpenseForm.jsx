import React, { useState } from "react";
import PropTypes from "prop-types";

const ExpenseForm = ({ addExpense }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    amount: "",
    date: "",
  });

  // Updating the state on input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handling form submission, validating and resetting form
  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseToAdd = {
      ...formData,
      id: Date.now(), // Unique ID based on timestamp
      amount: parseFloat(formData.amount),
    };

    addExpense(expenseToAdd);
    setFormData({ name: "", category: "", amount: "", date: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ margin: "1rem 0", textAlign: "center" }}
    >
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Expense Name"
        required
        style={{ marginRight: "0.5rem" }}
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        required
        style={{ marginRight: "0.5rem" }}
      />
      <input
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        type="number"
        placeholder="Amount"
        required
        style={{ marginRight: "0.5rem" }}
      />
      <input
        name="date"
        value={formData.date}
        onChange={handleChange}
        type="date"
        style={{ marginRight: "0.5rem" }}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

ExpenseForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

export default ExpenseForm;
