import React from "react";
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

const data = [
  { date: "5 25 2020", ES: 8, AS: 6, AMT: 12 },
  { date: "5 26 2020", ES: 6, AS: 6, AMT: 12 },
  { date: "5 27 2020", ES: 8, AS: 2, AMT: 12 },
  { date: "5 28 2020", ES: 12, AS: 1, AMT: 12 },
  { date: "5 29 2020", ES: 10, AS: 12, AMT: 12 },
  { date: "5 30 2020", ES: 8, AS: 8, AMT: 12 },
  { date: "5 31 2020", ES: 6, AS: 4, AMT: 12 },
];

function formatXAxis(tickItem) {
  return moment(tickItem).format("MMM DD");
}

function Dashboard() {
  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <h1>Sleep Tracker v1</h1>
        <BarChart
          width={850}
          height={400}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 2 }}
        >
          <CartesianGrid stroke="#7e7e7e" strokeDasharray="1 4" />
          <XAxis dataKey="date" tickFormatter={formatXAxis} />
          <YAxis dataKey="AMT" unit="hrs" />
          <Tooltip wrapperStyle={{ backgroundColor: "#8884d8" }} />
          <Legend wrapperStyle={{ marginLeft: 30 }} />
          <Bar dataKey="ES" name="Expected Sleep" fill="#233337" unit="hrs" />
          <Bar dataKey="AS" name="Actual Sleep" fill="#A5A5A5" unit="hrs" />
        </BarChart>
      </div>
    </div>
  );
}

export default Dashboard;
