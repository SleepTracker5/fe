import React, { useState } from "react";
import Modal from "react-modal";
import { axiosWithAuth } from "../../util/axiosWithAuth";

const deleteSleep = (e) => {
  e.preventDefault();
  axiosWithAuth()
    .delete("/sleep/${id}") //need to figure out what the name of the state will be before id.
    .then((res) => {
      console.log("The res for delete is: ", res);
    })
    .catch((err) => {
      console.log("There was a deletion error: ", err);
    })
    .finally(() => window.location.reload());
};

function DashboardCards({ sleep }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
        >
          <h2>Modal Title default</h2>
          <p>Body of modal</p>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </Modal>
        <button className="delete-card" onClick={deleteSleep}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DashboardCards;
