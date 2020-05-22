import React from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/view/LoginPage";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <LoginPage history={history} />
    </div>
  );
}

export default App;
