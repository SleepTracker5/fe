import React from "react";
import { useHistory, Route, Switch, Link } from "react-router-dom";
import Modal from "react-modal";
import "./App.css";
import LoginPage from "./view/LoginPage";
import SignUp from './view/SignUpPage';
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./view/dashboard/Dashboard";
import NavBar from "./components/navbar/NavBar";
import Bedtime from "./view/dashboard/sleeptimer/Bedtime";
import { SleepProvider } from "./context/sleepContext";

Modal.setAppElement("#root");

function App() {
  const history = useHistory();

  return (
    <SleepProvider>
      <div className="App">
        {/*todo: create a home page?*/}
        <Switch>
          <Route exact path="/">
            <NavBar buttonName="login" buttonPath="login"/>
          </Route>
          <Route path="/login">
            <LoginPage history={history} />
          </Route>
    <Route path="/signup">
          <SignUp/>
        </Route>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route path="/dashboard">
            <Dashboard history={history} />
          </Route>
          <Route exact path="/bedtime" component={Bedtime} />
        </Switch>
      </div>
    </SleepProvider>
  );
}

export default App;
