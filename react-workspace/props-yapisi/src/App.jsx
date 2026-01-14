import React from "react";
import "./App.css";
import Product from "./Product";
import Login from "./Login";

function App() {
  return (
    <div>
      <Product productName="Ayakkabı" price={3200} />
      <hr />
      <hr />
      <hr />
      <Login>
        <Product productName="telefon" price={85000} />
      </Login>
    </div>
  );
}

export default App;
