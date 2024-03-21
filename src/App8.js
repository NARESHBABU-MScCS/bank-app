import "./style.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import UserContext from "./context";
import Login from "./login";
import Deposit from "./deposit";
import Home from "./home";
import Withdraw from "./withhdraw";
import Navbar from "./navbar";
import Alldata from "./alldata";
import Logout from "./logout";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <UserContext.Provider
        value={{
          users: [
            {
              Name: "",
              Email: "",
              Password:"",
              Balance: ""
            }
          ]
        }}
      >
        <div className="container" style={{ padding: "10px" }}>
          <Routes>
            <Route path="/home" exact element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/logout" component={<Logout/>} /> 
            <Route path="/Deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/alldata" element={<Alldata />} />
            {/* <Route path="/create-account" component={CreateAccount} /> */}
          </Routes>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
