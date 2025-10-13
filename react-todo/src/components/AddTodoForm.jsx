import React, { useState } from "react";

function AddTodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        data-testid="todo-input"
      />
      <button type="submit" data-testid="add-btn">
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
