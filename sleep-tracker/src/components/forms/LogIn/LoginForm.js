import React, {useEffect, useState} from "react";
import styled from "styled-components";
import * as yup from "yup";
import {gsap} from "gsap";

//Define styled components
//todo: form width not quite right
const elementMargin = "6px";
const width100 = "@media(max-width: 500px){width: 100%;}";
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
    ${width100}
`;
const FormLinkP = styled.p`
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    width: 23%;
    margin: ${elementMargin} 0;
    font-size: 12px;
    ${width100}
`;
const LoginButton = styled.button`
    background: #39869D;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    border: none;
    margin: ${elementMargin} 0;
    margin-top: 4%;
    padding: 4px;
    font-size: 18px;
    line-height: 20px;
    width: 33%;
    color: #FFFFFF;
    ${width100}
`;
const StyledLabel = styled.label`
    width: 80%;
    margin: ${elementMargin} 0;
    ${width100}
`;
const ErrP = styled.p`
    color: red;
    font-size: 12px;
    width: 30%;
`;
//todo: need to figure out how to change width to whatever the width of the content is
const CheckboxLabel = styled.label`
    //this separated label is needed because checkbox formatting is different than input formatting
    width: 34%;
    margin: ${elementMargin} 0;
    ${width100}
`;

//Define form schema
const formSchema = yup.object().shape({
    email: yup.string().email("Email address is invalid").required("Email address is a required field"),
    password: yup.string().min(8).required("Password is a required field"),
    keepLoggedIn: yup.boolean().oneOf([true, false]),
});

const LoginForm = ({login}) => {
    //set state vars
    const [formData, setFormData] = useState({
        id: Date.now(),
        email: "",
        password: "",
        keepLoggedIn: false,
    });
    const [errState, setErrState] = useState({
        id: "",
        email: "",
        password: "",
        keepLoggedIn: "",
    });
    const [canLogin, setCanLogin] = useState(false);

    //todo: check form validation and set button abled here
    useEffect(()=>{
        formSchema.isValid(formData).then(valid =>{
            setCanLogin(valid);
        });
    }, [formData]);


    //validate user input
    const validate = (event) =>{
        yup.reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then( valid =>{
                setErrState({
                    ...errState,
                    [event.target.name]: ""
                });
            })
            .catch(err => {
                setErrState({
                    ...errState,
                    [event.target.name]:err.errors[0]
                });
            });
    }

    const errBounce = (event) =>{
        console.log("working: ", event.target.name);
        const animationDuration = .5;
        const tl = gsap.timeline();
        tl.to(event.target, {duration: animationDuration / 2, y: -10});
        tl.to(event.target, {duration: animationDuration, y: 0, ease: "bounce"});
    }


    //declare handle/submit functions
    const handleChange = (event) => {
        event.persist();
        validate(event);
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setFormData({...formData, [event.target.name]: value});
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
                        onBlur={errBounce}
                    />
                </StyledLabel>
                {errState.email.length > 0 ?
                    <ErrP style={{color: "red"}}>{errState.email}</ErrP>
                    : null}
                <StyledLabel htmlFor="password">
                    <StyledInput
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={errBounce}
                    />
                </StyledLabel>
                {errState.password.length > 0 ?
                    <ErrP style={{color: "red"}}>{errState.password}</ErrP>
                    : null}
                <FormLinkP>Forgot Password?</FormLinkP>{/*todo: link this to something*/}
                <FormLinkP>Don't have an account?</FormLinkP>{/*todo: link to misty's page*/}
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
                <LoginButton disabled={!canLogin}>Log In</LoginButton>
            </StyledLoginForm>
        </div>
    );
}

export default LoginForm;