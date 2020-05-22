import React, {useState} from "react";
import styled from "styled-components";

//todo: form width not quite right
const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const StyledInput = styled.input`
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07)), #121212;
    border-radius: 8px 8px 0px 0px;
    border: none;
`;
const ForgotPasswordA = styled.p`
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
`;
const LoginButton = styled.button`
    background: #39869D;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    border: none;
    font-family: Comfortaa;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 20px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;
`;

const LoginForm = ({login}) =>{
    //set state vars
    const [formData, setFormData] = useState({
        id: Date.now(),
        email: "",
        password: "",
        keepLoggedIn: false,
    });

    //declare handle/submit functions
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    const submitLogin = (event) =>{
        event.preventDefault();
        login(formData);//todo: Jaren wrote this logic, needs to be plugged in
        clearForm();//todo:write this function
    }
    const clearForm = () =>{
        setFormData({
            id: Date.now(),
            email: "",
            password: "",
        });
    }

    return(
        <div className="loginForm">
            <StyledLoginForm onSubmit={submitLogin}>
                <label htmlFor="email">
                    <StyledInput
                        type="text"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="password">
                    <StyledInput
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <ForgotPasswordA href="forgotPassword">Forgot Password?</ForgotPasswordA>{/*todo: link this to something*/}
                <label htmlFor="keepLoggedIn">
                    <input
                        type="checkbox"
                        id="keepLoggedIn"
                        name="keepLoggedIn"
                        value={formData.keepLoggedIn}
                        onChange={handleChange}
                    />
                    Keep Me Logged In
                </label>
                <LoginButton>Log In</LoginButton>
            </StyledLoginForm>
        </div>
    );
}

export default LoginForm;