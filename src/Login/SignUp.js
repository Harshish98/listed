import React from "react";
import Board from "./Board";
import Login from "./Login";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="landing">
      <div className="board-section">
        <Board />
      </div>
      <div className="login-section">
        <Login />
      </div>
    </div>
  );
}

export default SignUp;
