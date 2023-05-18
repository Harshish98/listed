import React from "react";
import "./DashNav.css";

function DashNav() {
  return (
    <div className="dash-nav">
      <h1>Board.</h1>
      <div className="nav-content">
        <div>
          <img src="Assets\dashboard_icon.png" />
          <img src="Assets\Vector (5).png" />
          <img src="Assets\schedule_icon.png" />
          <img src="Assets\user_icon.png" />
          <img src="Assets\setting_icon.png" />
        </div>
        <div>
          <p>Dashboard</p>
          <p>Transactions</p>
          <p>Schedules</p>
          <p>Users</p>
          <p>Settings</p>
        </div>
      </div>
      <div className="nav-footer">
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
}

export default DashNav;
