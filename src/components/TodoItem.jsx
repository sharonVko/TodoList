import React, { useState } from "react";

const TodoItem = ({ todo, onDelete, onToggleDone }) => {
  const [isChecked, setIsChecked] = useState(todo.checked);
  const [editTodo, setEditTodo] = useState(todo.value);

  const handleToggleDone = () => {
    setIsChecked(!isChecked);
    onToggleDone(todo.id); // Pass the todo ID to the parent component
  };

  return (
    <li className={`todo-item ${isChecked ? "done" : ""}`}>
      <input
        className="check-btn"
        type="checkbox"
        checked={isChecked}
        onChange={handleToggleDone}
      />
      <input
        className="todo-text todo-input"
        value={editTodo}
        onChange={(e) => setEditTodo(e.target.value)}
      />
      <button className="delete-btn" onClick={() => onDelete(todo.id)}></button>
    </li>
  );
};

export default TodoItem;
