import TodoItem from "./TodoItem";
import { useState } from "react";

/*[{ id: 1 }, { id: 2 }, { id: 3 }];*/
//mit useState Anzeige todos aktualisieren
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <h1 className="text-3xl font-bold">fancy todo list</h1>
      <button
        onClick={() => {
          const newTodo = {
            id: todos.length + 1,
            value: "test",
            checked: false,
          };
          setTodos([...todos, newTodo]);
        }}
      >
        click
      </button>

      {todos.map((todo) => (
        <TodoItem key={todo.id} />
      ))}
    </>
  );
};
export default TodoList;
