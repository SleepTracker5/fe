import React from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import LoginPage from "./view/LoginPage";
import { Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      {/*todo: create a home page?*/}
      <Route exact path="/">
        <NavBar />
      </Route>
      <Route path="/login">
        <LoginPage history={history} />
      </Route>
    </div>
  );
}

export default App;
