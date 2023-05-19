import React from "react";
import "./DashHeader.css";

function DashHeader() {
  return (
    <div className="dash-header">
      <div className="content-head">
        <div>
          <h2>Dashboard</h2>
        </div>
        <div className="search-section">
          <input placeholder="Search.." />
          <img src="Assets\Vector (1).png" />
          <img src="Assets\Mask Group.png" />
        </div>
      </div>
      <div className="tabs">
        <div className="color1">
          <img src="Assets\Vector.png" />
          <p>Total Revenues</p>
          <h2>$2,129,430</h2>
        </div>
        <div className="color2">
          <img src="Assets\Vector (2).png" />
          <p>Total Transactions</p>
          <h2>1,520</h2>
        </div>
        <div className="color3">
          <img src="Assets\Vector (3).png" />
          <p>Total Likes</p>
          <h2>9,721</h2>
        </div>
        <div className="color4">
          <img src="Assets\Vector (4).png" />
          <p>Total Users</p>
          <h2>892</h2>
        </div>
      </div>
    </div>
  );
}

export default DashHeader;
