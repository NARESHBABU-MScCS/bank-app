import React, { useState, useContext } from "react";
import UserContext from "./context";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const ctx = useContext(UserContext);

  function handleFormSubmit(event) {
    event.preventDefault();

    if (isLogin) {
      const user = ctx.users.find((user) => user.username === username);
      if (user) {
        if (user.password === password) {
          setIsLoginSuccess(true);
        } else {
          setPasswordError("Incorrect password");
        }
      } else {
        setNameError("User not found");
      }
    } else {
      if (password !== confirmPassword) {
        setConfirmPasswordError("Passwords do not match");
      } else {
        // Clear any previous errors
        setNameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");

        ctx.users.push({ username, email, password, balance: 0 });
        setIsLoginSuccess(true);
      }
    }
  }

  function handleToggleForm() {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setIsLogin(!isLogin);
  }

  function handleLogout() {
    // Clear user data from context
    ctx.users = [];
    setIsLoginSuccess(false);
  }

  const buttonText = isLogin ? "Login" : "Register";
  const toggleButtonText = isLogin ? "Create an Account" : "Already have an account?";

  return (
    <center>
      {isLoginSuccess ? (
        <>
          <h1>{isLogin ? "Login Successful" : "Registration Successful"}</h1>
          <button type="button" onClick={handleToggleForm}>{toggleButtonText}</button>
        </>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div className="box">
            <div className="form">
              <h2>{isLogin ? "Login" : "Create Account"}</h2>
              <div className="inputbox">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  style={{ color: "white" }} // <-- Set input font color to white
                />
                <span style={{ color: "red" }}>{nameError}</span>
                <br />
              </div>

              {!isLogin && (
                <div className="inputbox">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    style={{ color: "white" }} // <-- Set input font color to white
                  />
                  <span style={{ color: "red" }}>{emailError}</span>
                  <br />
                </div>
              )}

              <div className="inputbox">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  style={{ color: "white" }} // <-- Set input font color to white
                />
                <span style={{ color: "red" }}>{passwordError}</span>
                <br />
              </div>

              {!isLogin && (
                <div className="inputbox">
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    style={{ color: "white" }} // <-- Set input font color to white
                  />
                  <span style={{ color: "red" }}>{confirmPasswordError}</span>
                  <br />
                </div>
              )}

              {isLogin && (
                <div className="links">
                  <a href="#" style={{ color: "white" }}>Forgot Password</a>
                </div>
              )}
              <input type="submit" value={buttonText} style={{ color: "white" }} />
            </div>
          </div>
          <button type="button" onClick={handleToggleForm}>{toggleButtonText}</button>
          {isLogin && <Link to="/logout" onClick={handleLogout} style={{ color: "white" }}>Logout</Link>}
        </form>
      )}
    </center>
  );
}
