import React from 'react';
import SignUpForm from '../components/forms/SignUp/SignUpForm';

function SignUp(props) {
    return (
        <div className='SignUpPage'>
            <div className='container'>
                <SignUpForm {...props} />
            </div>
        </div>
    );

}

export default SignUp;