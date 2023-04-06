import { React, useState } from "react";
import ToastMessage from "./ToastMessage";
import ListItem from "./ListItem";

const Listing = () => {
  const [listData, setListData] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleAdd = () => {
    if (input.trim() === "") {
      setError(true);
      return;
    }
    setListData([...listData, { text: input }]);
    setInput("");
    setError(false);
  };

  const handleDelete = (index) => {
    setListData(listData.filter((x, i) => i !== index));
  };

  return (
    <>
      <h1>To Do List</h1>
      <input
        type="text"
        value={input}
        placeholder="Enter a task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {error && (
        <ToastMessage
          isVisible={error}
          setIsVisible={setError}
          message="Please input a Task"
        />
      )}
      <ul style={{ listStyleType: "none" }}>
        {listData.map((x, i) => (
          <ListItem data={x} onDelete={() => handleDelete(i)} />
        ))}
      </ul>
    </>
  );
};

export default Listing;
