import { useState } from "react";

const TodoItem = () => {
  const [todoValue, setTodoValue] = useState("");

  function handleChange(event) {
    setTodoValue(event.target.value);
  }
  return (
    <section className="todo-item">
      <input
        className="todo-input"
        type="text"
        placeholder="add a todo"
        value={todoValue}
        onChange={handleChange}
      />
      <button className="delete-btn"></button>
      <button className="check-btn" type="checkbox"></button>
    </section>
  );
};
export default TodoItem;
