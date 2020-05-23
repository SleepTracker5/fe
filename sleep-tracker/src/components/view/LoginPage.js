import React from "react";
import LoginForm from "../forms/LogIn/LoginForm";
import "./LoginPage.css";
import styled from "styled-components";
import NavBar from "../navbar/NavBar";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const LoginPage = () => {

    return (
        <Container className="loginPage">
            <NavBar/>
            <div className="leftContent">
                <h1>Welcome Back!</h1>
                <p className="oneStepCloser">You’re one step closer to finding your ideal sleep schedule.</p>
            </div>
            <LoginForm/>
        </Container>
    );
}


export default LoginPage;