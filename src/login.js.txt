// login.js
import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import UserContext from "./context";
import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const { users } = useContext(UserContext);

  const handleLogin = () => {
    // Check if the entered email and password match any user in the context
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setLoginError(false);
      // Redirect to the home page or any other page after successful login
      return <Navigate to hrep="#/Deposit/" />;
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {loginError && <p style={{ color: "red" }}>Invalid email or password.</p>}
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/createaccount">Create one</Link>.
      </p>
    </div>
  );
};

export default Login;
