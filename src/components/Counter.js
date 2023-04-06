import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(null);

  const slowFunction = () => {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  };

  const handleCounter = () => {
    // slowFunction();
    setCounter(counter + 1);
  };

  return (
    <>
      <h2>
        You've clicked {counter} times <br />
      </h2>
      <button onClick={handleCounter}> Click Me</button>
    </>
  );
};

export default Counter;
