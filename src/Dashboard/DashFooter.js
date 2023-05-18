import React from "react";
import DashPie from "./DashPie";
import DashTodo from "./DashTodo";
import "./DashFooter.css";

function DashFooter() {
  return (
    <div className="dash-footer">
      <div>
        <DashPie />
      </div>
      <div>
        <DashTodo />
      </div>
    </div>
  );
}

export default DashFooter;
