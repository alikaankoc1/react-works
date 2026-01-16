import React, { useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3005";
function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response);
  };

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  };

  useEffect(() => {
    getAllUsers();
    const newUser = {
      username: "Premeair Leauge",
      password: "Arsenal",
      class: "18",
    };
    createUser(newUser);
  }, []);

  return <div></div>;
}

export default App;
