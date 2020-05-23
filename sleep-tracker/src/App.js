import React from 'react';
import './App.css';
import LoginPage from "./components/view/LoginPage";
import {Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

function App() {
    return (
        <div className="App">
            {/*todo: create a home page?*/}
            <Route exact path="/">
                <NavBar/>
            </Route>
            <Route path="/login">
                <LoginPage/>
            </Route>
        </div>
    );
}

export default App;
