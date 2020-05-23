import React, {useState} from "react";
import styled from "styled-components";
import LoginPage from "../view/LoginPage";

//todo: form width not quite right
const elementMargin = "4px";
const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    margin: 4%;
`;
const StyledInput = styled.input`
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07)), #121212;
    border-radius: 8px 8px 0px 0px;
    border: none;
    height: 30px;
    padding: 4px;
    width: 100%;
    color: white;
    margin: ${elementMargin} 0;
`;
const ForgotPasswordA = styled.a`
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    width: 30%;
`;
const LoginButton = styled.button`
    background: #39869D;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    border: none;
    margin: ${elementMargin} 0;
    padding: 4px;
    font-size: 18px;
    line-height: 20px;
    width: 33%;
    color: #FFFFFF;
`;
const StyledLabel = styled.label`
    width: 80%;
`;
//todo: need to figure out how to change width to whatever to width of the content is
const CheckboxLabel = styled.label`
    //this separated label is needed because checkbox formatting is different than input formatting
    width: 34%;
`;

const LoginForm = ({login}) => {
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
    const submitLogin = (event) => {
        event.preventDefault();
        login(formData);//todo: Jaren wrote this logic, needs to be plugged in
        clearForm();//todo:write this function
    }
    const clearForm = () => {
        setFormData({
            id: Date.now(),
            email: "",
            password: "",
            keepLoggedIn: false,
        });
    }

    return (
        <div className="loginForm">
            <StyledLoginForm onSubmit={submitLogin}>
                <StyledLabel htmlFor="email">
                    <StyledInput
                        type="text"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </StyledLabel>
                <StyledLabel htmlFor="password">
                    <StyledInput
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </StyledLabel>
                <ForgotPasswordA href="#">Forgot
                    Password?</ForgotPasswordA>{/*todo: link this to something*/}
                <CheckboxLabel htmlFor="keepLoggedIn">
                    <input
                        type="checkbox"
                        id="keepLoggedIn"
                        name="keepLoggedIn"
                        value={formData.keepLoggedIn}
                        onChange={handleChange}
                    />
                    Keep Me Logged In
                </CheckboxLabel>
                <LoginButton>Log In</LoginButton>
            </StyledLoginForm>
        </div>
    );
}

export default LoginForm;