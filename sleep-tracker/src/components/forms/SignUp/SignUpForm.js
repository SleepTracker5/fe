import React, {useState} from 'react';
import styled from 'styled-components';
import gsap from "gsap";


//define styled components
const elementMargin = "6px";
const width100 = "@media(max-width: 500px){width: 100%;}";
const StyledSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  margin: 4%;
`;
const StyledInput = styled.input`
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.07),
      rgba(255, 255, 255, 0.07)
    ),
    #121212;
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
const SignUpButton = styled.button`
  background: #39869d;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.2),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  border: none;
  margin: ${elementMargin} 0;
  margin-top: 4%;
  padding: 4px;
  font-size: 18px;
  line-height: 20px;
  width: 33%;
  color: #ffffff;
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

const SignUpForm = ({history}) => {//todo: use history when changing the page
    //set state vars
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        keepLoggedIn: false,
    });
    const [errState, setErrState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        keepLoggedIn: false,
    });
    const [canSignUp, setCanSignUp] = useState(false);//todo: validate form and set this to true

    //declare handle/submit functions
    const handleChange = (event) => {
        event.persist();
        //todo: validate(event);
        const value =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value;
        setFormData({...formData, [event.target.name]: value});
    };
    const submitSignUp = (event) => {
        event.preventDefault();
        //todo: need to implement signup logic
        clearForm();
    };
    const clearForm = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            keepLoggedIn: false,
        });
    };

    //animation styling
    const errBounce = (event) => {
        console.log("working: ", event.target.name);
        const animationDuration = 0.5;
        const tl = gsap.timeline();
        tl.to(event.target, {duration: animationDuration / 2, y: -10});
        tl.to(event.target, {duration: animationDuration, y: 0, ease: "bounce"});
    };

    return (
        <div className="signUpForm">
            <StyledSignUpForm onSubmit={submitSignUp}>
                <section className="nameContainer">
                    <label className="nameElement" htmlFor="firstName">
                        <StyledInput
                            className="nameElement"
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="nameElement" htmlFor="lastName">
                        <StyledInput
                            className="nameElement"
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </label>
                </section>
                <StyledLabel htmlFor="email">
                    <StyledInput
                        type="text"
                        id="email"
                        name="email"
                        placeholder="username"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={errBounce}
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
                        onBlur={errBounce}
                    />
                </StyledLabel>
                <FormLinkP>Forgot Password?</FormLinkP>
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
                <SignUpButton disabled={!canSignUp}>Sign Up</SignUpButton>
            </StyledSignUpForm>
        </div>
    );
}

export default SignUpForm;