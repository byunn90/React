import React, { useState } from "react";
import "./public/button.css";
function MyApp() {
  const [count, setCount] = useState(0);

  const increament = () => {
    if (count === 10) return;

    setCount(count + 1);
  };

  const decreament = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <button className="Increament" onClick={increament}>
          increase me
        </button>
        <span>{count}</span>
        <button className="decreament" onClick={decreament}>
          {" "}
          decrease me
        </button>
      </div>
    </>
  );
}

export default MyApp;
