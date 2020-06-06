import React from 'react';
import SignUpForm from '../components/forms/SignUp/SignUpForm';
import NavBar from "../components/navbar/NavBar";
import "./SignUpPage.css";
import styled from "styled-components";

//define styled component
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