import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onToggleDone }) => {
  const [isChecked, setIsChecked] = useState(todo.checked);

  const handleToggleDone = () => {
    setIsChecked(!isChecked);
    onToggleDone(todo.id); // Pass the todo ID to the parent component
  };

  return (
    <li className={`todo-item ${isChecked ? 'done' : ''}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggleDone}
      />
      <span className="todo-text">{todo.value}</span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>Löschen</button>
    </li>
  );
};

export default TodoItem;