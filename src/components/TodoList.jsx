import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onToggleDone }) => {
  const [filter, setFilter] = useState("all"); // 'all', 'done', 'pending'

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "done":
        return todos.filter((todo) => todo.checked);
      case "pending":
        return todos.filter((todo) => !todo.checked);
      default:
        return todos;
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
      <div className="todo-list">
        <div className="filters">
          <button onClick={() => handleFilterChange("all")}>Alle</button>
          <button onClick={() => handleFilterChange("done")}>Erledigt</button>
          <button onClick={() => handleFilterChange("pending")}>
            Ausstehend
          </button>
        </div>
        <ul>
          {filteredTodos().map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={() => onDelete(todo.id)}
              onToggleDone={() => onToggleDone(todo.id)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
