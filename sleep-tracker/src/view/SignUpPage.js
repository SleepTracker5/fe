import React from 'react';
import SignUpForm from '../components/forms/SignUp/SignUpForm';
import NavBar from "../components/navbar/NavBar";
import "./SignUpPage.css";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    
    @media(max-width: 500px){
        flex-direction: column;
    }
`;

function SignUpPage({history}) {
    return (
        <Container className='SignUpPage'>
            <NavBar/>
            <div className="leftContent">
                <h1>Let's get started!</h1>
                <p className="letSleepTracker">Let sleep tracker help you discover your ideal sleep schedule.</p>
            </div>
            <SignUpForm history={history}/>
        </Container>
    );

}

export default SignUpPage;

/*
const LoginPage = ({history}) => {

    return (
        <Container className="loginPage">
            <NavBar/>
            <div className="leftContent">
                <h1>Welcome Back!</h1>
                <p className="oneStepCloser">You’re one step closer to finding your ideal sleep schedule.</p>
            </div>
            <LoginForm history={history}/>
        </Container>
    );
}
 */