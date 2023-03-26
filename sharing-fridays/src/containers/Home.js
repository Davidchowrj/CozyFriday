import React, { useState } from "react";
import logo from "../logo.svg";

const Home = () => {
  const [counter, setCounter] = useState(null);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="container">
      <div>
        You've clicked {counter} times <br />
        <button onClick={handleCounter}> Click Me</button>
      </div>
    </div>
  );
};

export default Home;
