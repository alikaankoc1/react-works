import React, { useState } from "react";

function App() {
  const [firstName] = useState("Ali Kaan");
  const [lastName] = useState("Koç");

  return (
    <div>
      <div>{firstName}</div>
      <div>{lastName}</div>
    </div>
  );
}
export default App;
