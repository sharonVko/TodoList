import "./App.css";
import "./index.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { ThemeSwitchButton } from "./components/ThemeSwitchButton";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return JSON.parse(savedTodos) || [];
  });

  const addTodo = (newTodoText) => {
    if (newTodoText.trim() === "") return; // Ignore empty inputs

    const newTodo = {
      id: uuidv4(),
      value: newTodoText,
      checked: false,
    };
    setTodos([newTodo, ...todos]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }),
    [todos];

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleDone = (todoId) => {
    setTodos(todos.map((todo) => (todo.id === todoId ? { ...todo, checked: !todo.checked } : todo)));
  };

  const clearList = () => {
    setTodos([]);
  };

  return (
    <div className="App">
      <Header onAddTodo={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onToggleDone={toggleDone} />
      {todos.length != 0 && (
        <button className="clear-btn" onClick={() => clearList()}>
          Liste löschen
        </button>
      )}
      <ThemeSwitchButton />
    </div>
  );
};

export default App;
