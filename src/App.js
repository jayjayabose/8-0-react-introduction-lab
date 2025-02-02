import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar"
import UserProfile from "./Components/UserProfile"
import Contacts from "./Components/Contacts"


const App = () => {
  return <div class="App">
    <NavBar/>
    <UserProfile/>   
    <Contacts/>
    </div>;
};

export default App;
