import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { axiosWithAuth } from "../../util/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initalSleepState = {
  id: "",
  start_formatted: "",
  end_formatted: "",
};

function DashboardCards({ sleep }) {
  const history = useHistory();

  const [editSleep, setEditSleep] = useState(initalSleepState);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const changeHandler = (e) => {
    e.persist();
    setEditSleep({ ...editSleep, [e.target.name]: e.target.value });
  };

  const saveChanges = (e) => {
    e.preventDefault();
    setEditSleep(initalSleepState);
    e.target.reset();
  };

  const submitSleepEdit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/sleep/${editSleep.id}`, editSleep)
      .then((res) => {
        console.log("This is the put request: ", res);
      })
      .catch((err) => console.log("There was an error with editing: ", err))
      .finally(() => window.location.reload());
  };

  const deleteSleep = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/sleep/${sleep.id}`) //need to figure out what the name of the state will be before id.
      .then((res) => {
        console.log("The res for delete is: ", res);
      })
      .catch((err) => {
        console.log("There was a deletion error: ", err);
      })
      .finally(() => window.location.reload());
  };

  return (
    <div className="card-container">
      <div className="card-wrapper">
        {/* Use moment.js to format incoming data string*/}
        <h3>{sleep?.start_formatted}</h3>
        <h3>{sleep?.end_formatted}</h3>
        <button onClick={() => setModalIsOpen(true)}>Edit</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "transparent",
            },
            content: {
              color: "black",
              background: "#171717",
            },
          }}
        >
          <form onSubmit={saveChanges}>
            <h2 className="modal-start-title">
              What time did you fall asleep?
            </h2>
            <input
              className="start-input"
              name="start_formatted"
              value={editSleep.start_formatted}
              placeholder=""
              onChange={changeHandler}
            />
            <h2 className="modal-end-title">What time did you wake up?</h2>
            <input
              className="end-input"
              name="end_formatted"
              value={editSleep.end_formatted}
              placeholder=""
              onChange={changeHandler}
            />
          </form>
          <button
            className="modal-btn"
            onClick={() => setModalIsOpen(false)}
            type="submit"
          >
            Save
          </button>
        </Modal>
        <button className="delete-card" onClick={deleteSleep}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DashboardCards;
