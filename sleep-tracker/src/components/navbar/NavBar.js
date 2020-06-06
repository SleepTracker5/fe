import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./NavBar.css";

const elementMargin = "4px;";
const NavContainer = styled.div`
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.09),
      rgba(255, 255, 255, 0.09)
    ),
    #121212;
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
const NavBarP = styled.p`
  font-size: 24px;
  margin: ${elementMargin} 0;
`;

/**
 * @param buttonName: Required field for button to render
 * @param buttonPath: Required field for button to link somewhere
 * @param buttonAction: Optional field, if the button does something more than linking, such as a logout button
 * @returns {jsx}
 * @constructor
 */
const NavBar = ({buttonName, buttonPath, buttonAction}) => {
  return (
    <NavContainer className="navbar">
      <Link className="navlink" to="/">
        <TitleH2>Sleep Tracker</TitleH2>
      </Link>
      <NavBarP>About</NavBarP>
      {/*todo: maybe link this to Clayton's marketing pages?*/}
      <Link className="navlink" to={`/${buttonPath}`} onClick={buttonAction ? buttonAction : null}>
        <NavBarP>{buttonName}</NavBarP>
      </Link>
    </NavContainer>
  );
};

export default NavBar;
