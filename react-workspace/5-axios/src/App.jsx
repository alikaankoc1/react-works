import React, { useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3005";
function App() {
  // get almak
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response);
  };

  // post göndermek
  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  };

  //put güncelleme
  const updateUser = async (userId, updatedUser) => {
    const response = await axios.put(
      `${BASE_URL}/users/${userId}`,
      updatedUser
    );
    console.log("new data ", response.data);
  };

  // delete silme
  const deleteUserById = async (userId) => {
    const deleteResponse = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log("silininen data", deleteResponse.data);
  };

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data.postId;
  };

  // const getPostById = async (postId) => {
  //   await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId);
  //   return response.data;
  // };

  const getPost = async () => {
    const userResponse = await getUserById(1);
    console.log(userResponse);
  };

  useEffect(() => {
    getPost();
    getAllUsers();
    const newUser = {
      username: "Premeair Leauge",
      password: "Arsenal",
      class: "18",
    };
    createUser(newUser);
    updateUser("1690", {
      username: "La Liga",
      password: "wolwes",
      class: "98",
    });
    deleteUserById("d410");
  }, []);

  return <div></div>;
}

export default App;
