import React from "react";
import LoginForm from "../components/forms/LogIn/LoginForm";
import "./LoginPage.css";
import styled from "styled-components";
import NavBar from "../components/navbar/NavBar";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const LoginPage = ({ history }) => {
  return (
    <Container className="loginPage">
      <NavBar />
      <div className="leftContent">
        <h1>Welcome Back!</h1>
        <p className="oneStepCloser">
          You’re one step closer to finding your ideal sleep schedule.
        </p>
      </div>
      <LoginForm history={history} />
    </Container>
  );
};

export default LoginPage;
