import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => alert(err.message));
  };

  const handleGoogle = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider)
      .then((res) => navigate("/dashboard"))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="signin-page">
      <div className="signin-wrapper">
        <div className="signin-header">
          <h1>Sign In</h1>
          <p>Sign in to your account</p>
        </div>
        <button className="googlebtn" onClick={handleGoogle}>
          Sign in with Goggle
        </button>
        <img src="Assets\google-icon 1.png" />
        <div className="signin-form">
          <label>Email address</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <p>Forgot password?</p>
          <button onClick={handleSubmit}>Sign In</button>
        </div>
        <div className="signin-footer">
          <p>
            Don't have an account?
            <Link to="/create">
              <span>Register here</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
