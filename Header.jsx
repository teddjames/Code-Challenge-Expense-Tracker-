import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#f8f9fa",
    padding: "1rem",
    textAlign: "center",
    borderBottom: "1px solid #ddd",
  };

  return (
    <header style={headerStyle}>
      <h1>Expense Tracker</h1>
      {/* I can add addition navigation elements here, if I want */}
    </header>
  );
};

export default Header;
