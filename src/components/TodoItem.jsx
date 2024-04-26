import { useState } from "react";

const TodoItem = ({ todo, onDelete, onToggleDone }) => {
  const [isChecked, setIsChecked] = useState(todo.checked);
  const [editTodo, setEditTodo] = useState(todo.value);

  const handleToggleDone = () => {
    setIsChecked(!isChecked);
    onToggleDone(todo.id); // Pass the todo ID to the parent component
  };

  return (
    <>
      <li className={`todo-item ${isChecked ? "done" : ""}`}>
        <label className={`check-btn ${isChecked ? "done" : ""}`}>
          <input type="checkbox" className="opacity-0 w-0 h-0" checked={isChecked} onChange={handleToggleDone} />
        </label>
        <input className="todo-text todo-input" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
        <button className={`delete-btn ${isChecked ? "done" : ""}`} onClick={() => onDelete(todo.id)}></button>
      </li>
    </>
  );
};

export default TodoItem;
