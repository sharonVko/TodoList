import { useState } from "react";

const TodoItem = ({ todo, onDelete, onToggleDone }) => {
  const [isChecked, setIsChecked] = useState(todo.checked);
  const [editTodo, setEditTodo] = useState(todo.value);

  const handleToggleDone = () => {
    setIsChecked(!isChecked);
    onToggleDone(todo.id); // Pass the todo ID to the parent component
  };

  return (
    <div className="checkbox-animate check">
      <li className={`todo-item ${isChecked ? "done" : ""}`}>
        <label>
          <input type="checkbox" className="check" checked={isChecked} onChange={handleToggleDone} />
          <span className="input-check"></span>
        </label>
        <input className="todo-text todo-input" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
        <button className={`delete-btn ${isChecked ? "done" : ""}`} onClick={() => onDelete(todo.id)}></button>
      </li>
    </div>
  );
};

export default TodoItem;
