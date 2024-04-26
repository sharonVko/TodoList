import "./App.css";
import "./index.css";
import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodoText) => {
    if (newTodoText.trim() === "") return; // Ignore empty inputs

    const newTodo = {
      id: todos.length + 1,
      value: newTodoText,
      checked: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleDone = (todoId) => {
    setTodos(todos.map((todo) => (todo.id === todoId ? { ...todo, checked: !todo.checked } : todo)));
  };

  return (
    <div className="App">
      <Header onAddTodo={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onToggleDone={toggleDone} />
    </div>
  );
};

export default App;
