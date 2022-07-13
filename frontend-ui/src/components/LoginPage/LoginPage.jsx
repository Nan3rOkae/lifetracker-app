import * as React from "react";
import { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

export default function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleOnLogin(event) {
    event.preventDefault();
    setEmail("");
    setPassword("");
    return props.loginPostReq(email, password);
  }

  return (
    <div className="Login">
      <div className="card">
        <h2>Login</h2>
        <br />
        <div className="form">
          <div className="input-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="user@email.com"
              value={email}
              onChange={(evt) => {
                setEmail(evt.target.value);
              }}
            />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(evt) => {
                setPassword(evt.target.value);
              }}
            />
          </div>

          <button
            className="btn"
            onClick={(event) => {
              handleOnLogin(event);
            }}
          >
            Login
          </button>
        </div>
        <div className="footer">
          <p>
            Don't have an account? Sign up <Link to="/register">here.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
