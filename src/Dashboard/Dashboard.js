import React from "react";
import "./Dashboard.css";
import DashNav from "./DashNav";
import DashContent from "./DashContent";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="nav-section">
        <DashNav />
      </div>
      <div className="content-section">
        <DashContent />
      </div>
    </div>
  );
}

export default Dashboard;
