import React from "react";
import "./Dashboard.css";
import MyLineChart from "../Charts/MyLineChart";
import MyAreaChart from "../Charts/MyAreaChart";
import MyBarChart from "../Charts/MyBarChart";
import MyPieChart from "../Charts/MyPieChart";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <div className="dashboard">
      <MyLineChart></MyLineChart>
      <MyAreaChart></MyAreaChart>
      <MyBarChart></MyBarChart>
      <MyPieChart></MyPieChart>
    </div>
    </div>
  );
};

export default Dashboard;
