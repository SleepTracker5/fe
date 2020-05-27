import React from 'react';
import SignUpForm from '../components/forms/SignUp/SignUpForm';
import NavBar from "../components/navbar/NavBar";

function SignUpPage({history}) {
    return (
        <div className='SignUpPage'>
            <NavBar/>
            <div className="leftContent">
                <h1>Let's get started!</h1>
                <p className="letSleepTracker">Let sleep tracker help you discover your ideal sleep schedule.</p>
            </div>
            <SignUpForm history={history}/>
        </div>
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