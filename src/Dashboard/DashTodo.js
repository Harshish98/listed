import React from "react";
import "./DashTodo.css";

function DashTodo() {
  return (
    <div className="dash-todo">
      <div className="todo-head">
        <h3>Today's schedule</h3>
        <p className="grey-text">See All &gt;</p>
      </div>
      <div className="border-green">
        <p className="bold-grey">Meeting with suppliers from Kuta Bali</p>
        <p className="grey-text">14.00-15.00</p>
        <p className="grey-text">at Sunset Road, Kuta, Bali </p>
      </div>
      <div className="border-blue">
        <p className="bold-grey">Check operation at Giga Factory 1</p>
        <p className="grey-text">18.00-20.00</p>
        <p className="grey-text">at Central Jakarta</p>
      </div>
    </div>
  );
}

export default DashTodo;
