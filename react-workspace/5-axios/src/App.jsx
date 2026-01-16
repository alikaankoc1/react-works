import React, { useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3005";
function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/user");
    console.log(response);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return <div></div>;
}

export default App;
