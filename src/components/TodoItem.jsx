const TodoItem = () => {
  return (
    <section className="todo-item">
      <input
        className="todo-input"
        type="text"
        placeholder="add a todo"
        value=""
      />
      <button className="delete-btn">delete</button>
      <button className="check-btn" type="checkbox">
        check
      </button>
    </section>
  );
};
export default TodoItem;
