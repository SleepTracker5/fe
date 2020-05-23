import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const elementMargin = "4px;";
const NavContainer = styled.div`
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09)), #121212;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const TitleH2 = styled.h2`
    font-size: 48px;
    margin: ${elementMargin} 0;
`;
const LoginP = styled.p`
    font-size: 24px;
    margin: ${elementMargin} 0;
`;

const NavBar = () => {


    return (
        <NavContainer className="navbar">
            <Link to="/">
                <TitleH2>Sleep Tracker</TitleH2>
            </Link>
            <Link to="/login">
                <LoginP>login</LoginP>{/*todo: Add routes*/}
            </Link>
        </NavContainer>
    );
}

export default NavBar;