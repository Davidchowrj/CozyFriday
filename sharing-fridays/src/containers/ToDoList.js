import { React, useState } from "react";

const TodoListItem = ({ data, onDelete }) => {
  return (
    <li>
      <span style={{ marginRight: "10px" }}>{data.text}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

const ToDoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    if (newTodo.trim() === "") {
      return;
    }
    setTodoList([...todoList, { text: newTodo }]);
    setNewTodo("");
  };

  const handleDelete = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
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
      <ul style={{ listStyleType: "none" }}>
        {todoList.map((x, index) => (
          <TodoListItem data={x} onDelete={() => handleDelete(index)} />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
