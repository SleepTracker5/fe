import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as yup from "yup";
import '../../../view/SignUp.css';


const elementMargin = "6px";
const width100 = "@media(max-width: 500px){width: 100%;}";
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  margin: 4%;
  ${width100};
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
  ${width100};

`;
const FormLinkP = styled.p`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  width: 40%;
  margin: ${elementMargin} 0;
  font-size: 12px;
 
`;
const SignupButton = styled.button`
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
  width: 70%;
  color: #ffffff;
  
`;
const StyledLabel = styled.label`
  width: 100%;
  margin: ${elementMargin} 0;
  ${width100}
`;
const CheckboxLabel = styled.label`
  //this separated label is needed because checkbox formatting is different than input formatting
  width: 40%;
  margin: ${elementMargin} 0;
  ${width100};
`;


const formSchema = yup.object().shape({
    firstName: yup.string().required("First name is a required field"),
    lastName: yup.string().required("Last name is a required field"),
    email: yup.string().required("Email address is a required field"),
    password: yup.string().min(4).required("Password is a required field"),
    keepLoggedIn: yup.boolean().oneOf([true, false]),
  });

const SignUpForm = ({signin}) => {
    /* state */
    const [input, setInput] = useState({

        firstName: '',
        lastName: '',
        email: '',
        password: '',
        keepLoggedIn: false,

    });

    const [errState, setErrState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        keepLoggedIn: '',
      });
      const [canLogin, setCanLogin] = useState(false);

      useEffect(() => {
        formSchema.isValid(input).then((valid) => {
          setCanLogin(valid);
        });
      }, [input]);

      const validate = (event) => {
        yup
          .reach(formSchema, event.target.name)
          .validate(event.target.value)
          .then((valid) => {
            setErrState({
              ...errState,
              [event.target.name]: "",
            });
          })
          .catch((err) => {
            setErrState({
              ...errState,
              [event.target.name]: err.errors[0],
            });
          });
      };


    const handleChange = (event) => {
        event.persist();
    validate(event);
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
        setInput({...input,[event.target.name]: value})
    };

    return (
      <div className="signupForm">
        <StyledForm>
          <section>
            <div className='nameCon'>
              <label  htmlFor="firstName">
                <StyledInput className='firstLast'
                type='text'
                id='firstName'
                name='firstName'
                placeholder='First Name'
                value={input.firstName}
                onChange={handleChange}
                />
            </label>
              <label  htmlFor="lastName">
                <StyledInput className='firstLast'
                type='text'
                id='lastName'
                name='lastName'
                placeholder='Last Name'
                value={input.lastName}
                onChange={handleChange}
                />
          </label>
            </div>
            <StyledLabel htmlFor="email">
            <StyledInput
                type="text"
                id="email"
                name="email"
                placeholder="Email Address"
                value={input.email}
                onChange={handleChange}
            />
          </StyledLabel>
            <StyledLabel htmlFor="password">
        
            <StyledInput
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={input.password}
                onChange={handleChange}
            />
          </StyledLabel>
          </section>
          <FormLinkP>Forgot Password?</FormLinkP>
          <CheckboxLabel htmlFor="keepLoggedIn">
            <input
                type="checkbox"
                id="keepLoggedIn"
                name="keepLoggedIn"
                value={input.keepLoggedIn}
                onChange={handleChange}
            />
          Keep Me Logged In
          </CheckboxLabel>
          <SignupButton disabled={!canLogin}>Sign Up</SignupButton>
        </StyledForm>
      </div>
    );
;}

export default SignUpForm