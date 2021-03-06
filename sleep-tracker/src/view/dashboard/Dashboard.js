import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import "./Dashboard.css";
import {axiosWithAuth} from "../../util/axiosWithAuth";
import DashboardCards from "../../components/DashboardCards/DashboardCards";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import NavBar from "../../components/navbar/NavBar";

//dummy data
const data = [
    {date: "04/27/2020 22:04", SG: 8, AS: 6, AMT: 12},
    {date: "5 26 2020", SG: 6, AS: 6, AMT: 12},
    {date: "5 27 2020", SG: 8, AS: 2, AMT: 12},
    {date: "5 28 2020", SG: 12, AS: 1, AMT: 12},
    {date: "5 29 2020", SG: 10, AS: 12, AMT: 12},
    {date: "5 30 2020", SG: 8, AS: 8, AMT: 12},
    {date: "5 31 2020", SG: 6, AS: 4, AMT: 12},
    {date: "6 1 2020", SG: 6, AS: 8, AMT: 12},
    {date: "6 2 2020", SG: 7, AS: 7, AMT: 12},
];

//function to create date format using moment.js on x-axis
function formatXAxis(tickItem) {
    return moment(tickItem).format("MMM DD");
}

function Dashboard({history}) {
    const [sleepData, setSleepData] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get("/sleep")
            .then((res) => {
                setSleepData(res.body.data);
                console.log(res);
            })
            .catch((err) => {
                console.log("There was an error getting mock sleep data: ", err);
            });
    }, []);

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        history.push("/login");
    };

    return (
        <div className="container">
            <NavBar buttonName="logout" buttonPath="logout" buttonAction={logout}/>
            <div className="chart-container">
                <div className="chart-wrapper">
                    <h1>Your Sleep This Week</h1>
                    <BarChart
                        width={window.innerWidth * 0.66}
                        height={550}
                        data={data}
                        margin={{top: 20, right: 30, left: 20, bottom: 2}}
                    >
                        <CartesianGrid stroke="#7e7e7e"/>
                        <XAxis dataKey="date" tickFormatter={formatXAxis}/>
                        <YAxis dataKey="AMT" unit="hrs"/>
                        <Tooltip wrapperStyle={{backgroundColor: "#8884d8"}}/>
                        <Legend wrapperStyle={{marginLeft: 30}}/>
                        <Bar dataKey="SG" name="Sleep Goal" fill="#233337" unit="hrs"/>
                        <Bar dataKey="AS" name="Actual Sleep" fill="#A5A5A5" unit="hrs"/>
                    </BarChart>
                    <button className="sleep-data-btn">fill sleep data to graph</button>
                </div>
                <h1 className="card-title">
                    Week of {} - {}
                </h1>
                {sleepData.map((sleep, index) => {
                    return <DashboardCards sleep={sleep} key={index}/>;
                })}
                <DashboardCards/>
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
