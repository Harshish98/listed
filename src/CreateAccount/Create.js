import React from "react";
import "./Create.css";
import Board from "../Login/Board";
import User from "./User";

function Create() {
  return (
    <div className="create">
      <div className="board-section">
        <Board />
      </div>
      <div className="account-section">
        <User />
      </div>
    </div>
  );
}

export default Create;
