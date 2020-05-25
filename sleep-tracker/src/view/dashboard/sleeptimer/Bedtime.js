import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClockDisplay from "./ClockDisplay";
import ButtonDisplay from "./ButtonDisplay";
import "./Clock.css";

function Bedtime() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [iv, setIv] = useState();
  //clock not started = 0
  //clock started = 1
  //paused = 2
  const [status, setStatus] = useState(0);

  const goodnight = () => {
    clockLogic();
    setStatus(1);
    setIv(setInterval(clockLogic, 10));
  };

  let updateMS = time.ms,
    updateS = time.s,
    updateM = time.m,
    updateH = time.h;

  const clockLogic = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMS === 100) {
      updateS++;
      updateMS = 0;
    }
    updateMS++;
    return setTime({ ms: updateMS, s: updateS, m: updateM, h: updateH });
  };

  const wakeUp = () => {
    clearInterval(iv);
    setStatus(2);
  };

  const clear = () => {
    clearInterval(iv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => goodnight();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  return (
    <div>
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
      <div className="clock-container">
        <div className="clock-wrapper">
          <div className="clock">
            <ClockDisplay time={time} />
            <ButtonDisplay
              status={status}
              resume={resume}
              clear={clear}
              wakeUp={wakeUp}
              goodnight={goodnight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bedtime;
