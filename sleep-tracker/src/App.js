import React from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import LoginPage from "./view/LoginPage";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./view/dashboard/Dashboard";
import NavBar from "./components/navbar/NavBar";
import Bedtime from "./view/dashboard/sleeptimer/Bedtime";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      {/*todo: create a home page?*/}
      <Switch>
        <Route exact path="/">
          <NavBar />
        </Route>
        <Route path="/login">
          <LoginPage history={history} />
        </Route>
        {/*Route to Dashboard needs to be a PrivateRoute.*/}
        <Route exact path="/protected" component={Dashboard} />
        <Route exact path="/bedtime" component={Bedtime} />
      </Switch>
    </div>
  );
}

export default App;
