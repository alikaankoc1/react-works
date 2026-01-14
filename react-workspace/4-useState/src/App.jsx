import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1);
  };
  const azalt = () => {
    if (count >= 1) setCount(count - 1);
  };
  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={arttir}>Arttır</button>
        <button onClick={azalt}>Azalt</button>
      </div>
      <div></div>
    </div>
  );
}

export default App;
