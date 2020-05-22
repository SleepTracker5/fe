import React, {useState} from "react";
import styled from "styled-components";

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const StyledInput = styled.input`
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07)), #121212;
    border-radius: 8px 8px 0px 0px;
`;

const LoginForm = (login) =>{
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
                <a href="forgotPassword">Forgot Password?</a>{/*todo: link this to something*/}
                <label htmlFor="keepLoggedIn">
                    <input
                        type="checkbox"
                        id="keepLoggedIn"
                        name="keepLoggedIn"
                        value={formData.keepLoggedIn}
                        onChange={handleChange}
                    />
                </label>
            </StyledLoginForm>
        </div>
    );
}

export default LoginForm;