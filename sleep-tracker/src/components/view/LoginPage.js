import React from "react";
import LoginForm from "../forms/LoginForm";
import "./LoginPage.css";
import styled from "styled-components";

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
            <div className="leftContent">
                <h1>Welcome Back!</h1>
                <p className="oneStepCloser">You’re one step closer to finding your ideal sleep schedule.</p>
            </div>
            <LoginForm/>
        </Container>
    );
}


export default LoginPage;