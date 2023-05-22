import React, { useState, useEffect } from "react";

function MyApp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked using ${count}`;
  });

  function increamentClick() {
    setCount(count + 1);
  }

  const decreamentClick = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (count <= 0) {
      // Stop decrementing at 0
      setCount(0);
    } else if (count >= 10) {
      // Stop incrementing at 10
      setCount(10);
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increamentClick}>Increase</button>
      <span>{count}</span>
      <button onClick={decreamentClick}>Decrease me</button>
    </div>
  );
}

export default MyApp;
