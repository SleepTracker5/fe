import React from 'react';
import SignUpForm from '../components/forms/SignUp/SignUpForm';
import styled from "styled-components";
import NavBar from "../components/navbar/NavBar";

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

function SignUp(signin) {
    return (
        <Container className='SignUpPage'>
            <NavBar/>

            <div className='container'>
                <h1>Let's Get Started</h1>
                <p>Let Sleep Tracker help you discover your ideal sleep schedule.</p>
            </div>
            <SignUpForm signin={signin} />
        </Container>
    );

}

export default SignUp;