import { React, useState } from "react";
import ToastMessage from "./ToastMessage";
import ListItem from "./ListItem";
import ListInput from "./ListInput";

const Listing = () => {
  const [listData, setListData] = useState([]);
  const [error, setError] = useState(false);

  const handleDelete = (index) => {
    setListData(listData.filter((x, i) => i !== index));
  };

  return (
    <>
      <h1>To Do List</h1>
      <ListInput
        listData={listData}
        setListData={setListData}
        setError={setError}
      />
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
