import { useState } from "react";

const TodoItem = () => {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <section className="todo-item">
      <input
        className="todo-input"
        type="text"
        placeholder="add a todo"
        value={name}
        onChange={handleChange}
      />
      <button className="delete-btn">delete</button>
      <button className="check-btn" type="checkbox">
        check
      </button>
    </section>
  );
};
export default TodoItem;
