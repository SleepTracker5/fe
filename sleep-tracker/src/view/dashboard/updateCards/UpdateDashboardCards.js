import React, { useState } from "react";
import { axiosWithAuth } from "../../../util/axiosWithAuth";

const initalSleepState = {
  id: "",
  start_formatted: "",
  end_formatted: "",
};

const UpdateDashboardCards = () => {
  const [editSleep, setEditSleep] = useState(initalSleepState);

  const submitSleep = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`sleep/${editSleep.id}`)
      .then((res) => {
        console.log("This is the put request: ", res);
      })
      .catch((err) => console.log("There was an error with editing: ", err))
      .finally(() => window.location.reload());
  };

  const changeHandler = (e) => {
    e.persist();
    setEditSleep(e.target.value);
  };

  //FORM (MODAL) RENDERS ON BUTTON CLICK *EDIT BUTTON*
  return (
    <div className="update-dashboard-cards-form">
      <form onSubmit={submitSleep}>
        <input
          type="text"
          name="start_formatted"
          onChange={changeHandler}
          placeholder="What time did you go to bed?"
          value={editSleep.start_formatted}
        />
        <input
          type="text"
          name="end_formatted"
          onChange={changeHandler}
          placeholder="What time did you wake up?"
          value={editSleep.end_formatted}
        />
        <button className="submit-edit-button">Submit Update</button>
      </form>
    </div>
  );
};

export default UpdateDashboardCards;
