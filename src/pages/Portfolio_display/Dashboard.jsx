import React from "react";
import { useLocation, useParams } from "react-router-dom";

import Portfolio from "./Portfolio";

const Dashboard = () => {
  const location = useLocation();
  const { user } = location.state;
  const { name } = useParams();

const UserDashboard = () => (
    <div className="containerd">
        <div className="weather-side">
            <div className="weather-gradient"></div>
            <div className="date-welcome">
                <h4 className="welcome">Welcome,</h4>
                <h2 className="username"> {user.name}</h2>
            </div>
            <div className="information">
                <h2 className="mobilenumber">
                    <p>Mobile Number</p>
                    <p>{user.mobile_no}</p>
                </h2>
                <h2 className="pan">
                    <p>PAN Card </p>
                    <p>{user.pan_no}</p>
                </h2>
            </div>
        </div>
        <div className="info-side">
            <div className="today-info-container">
                <div className="today-info1 card">
                    <div className="current">
                        <p className="value">₹{user.current_value}</p>
                        <h2 className="title">Current Portfolio Value</h2>
                    </div>
                </div>
                <div className="today-info2 card">
                    <div className="initial">
                        <p className="value">₹{user.initial_deposit}</p>
                        <h2 className="title">Initial Investment</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

  const AdminDashboard = () => (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user.name}</p>
      <Portfolio />
    </div>
  );

  return user.role.toLowerCase() === "admin" ? <AdminDashboard /> : <UserDashboard />;
};

export default Dashboard;