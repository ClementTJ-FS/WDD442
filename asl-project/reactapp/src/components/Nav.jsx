import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import styled from "styled-components";

//styled-components
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  width: 100%;
  height: 3rem;
  background-color: #181c20;
  border-radius: 0.5rem;
  border-left: 2px solid #388697;
  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 10%;
  height: 100%;
  padding: 0;
`;
const NavListItem = styled.li`
  height: 100%;
`;
const NavItem = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 1rem;
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 0.5rem;
  :hover {
    background-color: #2ea043;
    box-shadow: 0.5rem 0.5rem 0.2rem rgba(0, 0, 0, 0.15);
  }
`;
const NavItemIconHome = styled(AiOutlineHome)`
  margin-right: 0.5rem;
  color: #fff;
`;
const NavItemIconLogout = styled(AiOutlineLogout)`
  margin-right: 0.5rem;
  color: #fff;
`;
const Nav = (props) => {
  return (
    <NavBar>
      <NavList>
        <NavListItem key="1">
          <NavItem to="/">{<NavItemIconHome />} Home</NavItem>
        </NavListItem>
        <NavListItem key="2">
          {props.isLoggedin && (
            <NavItem to="/logout">{<NavItemIconLogout />} Logout</NavItem>
          )}
        </NavListItem>
      </NavList>
    </NavBar>
  );
};

export default Nav;
