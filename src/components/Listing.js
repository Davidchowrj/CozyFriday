import { React, useState } from "react";
import ToastMessage from "./ToastMessage";

const ListItem = ({ data, onDelete }) => {
  return (
    <li>
      <span style={{ marginRight: "10px" }}>{data.text}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

const Listing = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState(false);

  const handleAdd = () => {
    if (newTodo.trim() === "") {
      setError(true);
      return;
    }
    setTodoList([...todoList, { text: newTodo }]);
    setNewTodo("");
    setError(false);
  };

  const handleDelete = (index) => {
    setTodoList(todoList.filter((x, i) => i !== index));
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {error && (
        <ToastMessage
          isVisible={error}
          setIsVisible={setError}
          message="Please input something"
        />
      )}
      <ul style={{ listStyleType: "none" }}>
        {todoList.map((x, index) => (
          <ListItem data={x} onDelete={() => handleDelete(index)} />
        ))}
      </ul>
    </>
  );
};

export default Listing;
