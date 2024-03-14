// App.js
import "./styles.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import UserContext from "./context";
import NavBar from "./navbar";
import Home from "./home";
import CreateAccount from "./createaccount";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import AllData from "./alldata";
import Login from "./login"; // Import the new Login component

function App() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "Siranjeevi",
              email: "siranjeevi@gmail.com",
              password: "Jeevi123",
              balance: 0
            }
          ]
        }}
      >
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />{" "}
            {/* Add the Login route */}
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/alldata" element={<AllData />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
