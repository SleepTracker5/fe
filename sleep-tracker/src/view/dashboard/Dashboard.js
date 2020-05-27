import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./Dashboard.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Bedtime from "./sleeptimer/Bedtime";

//dummy data
const data = [
  { date: "5 25 2020", ES: 8, AS: 6, AMT: 12 },
  { date: "5 26 2020", ES: 6, AS: 6, AMT: 12 },
  { date: "5 27 2020", ES: 8, AS: 2, AMT: 12 },
  { date: "5 28 2020", ES: 12, AS: 1, AMT: 12 },
  { date: "5 29 2020", ES: 10, AS: 12, AMT: 12 },
  { date: "5 30 2020", ES: 8, AS: 8, AMT: 12 },
  { date: "5 31 2020", ES: 6, AS: 4, AMT: 12 },
  { date: "6 1 2020", ES: 6, AS: 8, AMT: 12 },
  { date: "6 2 2020", ES: 7, AS: 7, AMT: 12 },
];

//function to create date format using moment.js on x-axis
function formatXAxis(tickItem) {
  return moment(tickItem).format("MMM DD");
}

function Dashboard() {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(false);
    //props history push to login?
  };
  return (
    <div className="container">
      <div className="nav-container">
        <Link className="navlink" to="/">
          <h2>Sleep Tracker</h2>
        </Link>
        <Link className="about-page" to="/about">
          {/*****TODO:needs to be changed to whatever the route is actually named */}
          <p>About</p>
        </Link>
        <Link className="logout" onClick={logout} to="/login">
          <p>Logout</p>
        </Link>
      </div>
      <h2 className="graph-title">Let's check the numbers...</h2>
      <div className="chart-container">
        <div className="chart-wrapper">
          <BarChart
            width={window.innerWidth * .66}
            height={550}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 2 }}
          >
            <CartesianGrid stroke="#7e7e7e" />
            <XAxis dataKey="date" tickFormatter={formatXAxis} />
            <YAxis dataKey="AMT" unit="hrs" />
            <Tooltip wrapperStyle={{ backgroundColor: "#8884d8" }} />
            <Legend wrapperStyle={{ marginLeft: 30 }} />
            <Bar dataKey="ES" name="Expected Sleep" fill="#233337" unit="hrs" />
            <Bar dataKey="AS" name="Actual Sleep" fill="#A5A5A5" unit="hrs" />
          </BarChart>
        </div>
      </div>
      <div className="timer">
        <Link className="bedtime" to="/bedtime">
          <button>Click here to set the mood...</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
