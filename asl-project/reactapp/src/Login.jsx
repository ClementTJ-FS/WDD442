import React from "react";
import { BsGithub } from "react-icons/bs";
import styled from "styled-components";

//styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #0d0f12;
  padding: 0;
  margin: 0;
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
  padding: 3rem 2rem;
  background-color: #181c20;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  color: #fff;
`;
const LoginTitle = styled.h1`
  margin: 0;
`;
const HR = styled.hr`
  width: 66%;
  border: 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 1rem 0;
`;
const GhBtn = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  background-color: #565656;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  :hover {
    background-color: #2ea043;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;
const Login = () => {
  return (
    <Container>
      <LoginBox>
        <LoginTitle>Login</LoginTitle>
        <HR />
        <GhBtn href="https://github.com/login/oauth/authorize?client_id=e3ebfea3a5e32f5169e1">
          Login with {<BsGithub />} <strong>GitHub</strong>
        </GhBtn>
      </LoginBox>
    </Container>
  );
};

export default Login;
