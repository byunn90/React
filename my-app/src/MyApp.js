import React, { useState, useEffect } from "react";
import MyFooter from "./components/footer";

function MyApp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <MyFooter />
    </div>
  );
}

export default MyApp;
