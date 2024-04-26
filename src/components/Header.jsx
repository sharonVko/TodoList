import { useState } from "react";

const Header = ({ onAddTodo }) => {
  const [newTodoText, setNewTodoText] = useState("");
  const [shake, setShake] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    const trimmedText = newTodoText.trim();

    if (trimmedText === "") {
      setShake(true);
      setTimeout(() => setShake(false), 820); // Remove shake class after animation duration
      setNewTodoText(""); // Clear input field
      return; // Ignore empty inputs
    }

    onAddTodo(trimmedText); // Pass the trimmed text to the onAddTodo function
    setNewTodoText(""); // Clear input field
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Neues Todo eingeben"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          className={shake ? "shake" : ""}
        />
        <button type="submit">Hinzufügen</button>
      </form>
    </header>
  );
};

export default Header;
