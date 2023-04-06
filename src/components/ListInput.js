import { useState, React } from "react";

const ListInput = (props) => {
  const { listData, setListData, setError } = props;
  const handleAdd = () => {
    if (input.trim() === "") {
      setError(true);
      return;
    }
    setListData([...listData, { text: input }]);
    setInput("");
    setError(false);
  };
  const [input, setInput] = useState("");

  return (
    <>
      <input
        type="text"
        value={input}
        placeholder="Enter a task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default ListInput;
