import { useState } from "react";

const Header = ({ onAddTodo }) => {
  const [newTodoText, setNewTodoText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    if (newTodoText.trim() === "") return; // Ignore empty inputs

    onAddTodo(newTodoText);
    setNewTodoText(""); // Clear input field
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Neues Todo eingeben" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} />
        <button type="submit">Hinzufügen</button>
      </form>
    </header>
  );
};

export default Header;
