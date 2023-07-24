import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    if (email.includes("@gmail.com") && password.length >= 6) {
      navigate("/home");
    } else if (!email.includes("@gmail.com")) alert("Invalid email.");
    else if (password.length < 6)
      alert("Password should be atleast 6 characters.");
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
          <button className="loginButton" onClick={handleClick}>
            Sign In
          </button>
          <span>
            New to Netflix ? <b>Sign Up now</b>
          </span>
          <small>
            This website is protected by Google reCAPTCHA to ensure you're not a
            bot<b>Learn more.</b>
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login;
