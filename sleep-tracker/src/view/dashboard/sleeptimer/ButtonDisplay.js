import React from "react";
import "./Clock.css";

function ButtonDisplay(props) {
  return (
    <div className="button-container">
      {props.status === 0 ? (
        <button className="start-button" onClick={props.goodnight}>
          {/*Make onClick create new Date().toISOString */}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Goodnight...
        </button>
      ) : (
        ""
      )}
      {props.status === 1 ? (
        <div>
          <button className="stop-button" onClick={props.wakeUp}>
            {/*Make onClick create new Date().toISOString */}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            I'm awake...
          </button>
          <button className="clear-button" onClick={props.clear}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Clear
          </button>
        </div>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div>
          <button className="resume-button" onClick={props.resume}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Resume
          </button>
          <button className="clear-button" onClick={props.clear}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Clear
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ButtonDisplay;
