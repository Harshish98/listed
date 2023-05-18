import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase";
import "./User.css";

function User() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="user-box">
      <div className="user-wrapper">
        <h3>Create an account</h3>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default User;
