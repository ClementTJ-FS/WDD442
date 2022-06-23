import React from "react";
import { BsGithub } from "react-icons/bs";
import styled from "styled-components";
import Line from "../components/Line";
import LinkBtn from "../components/LinkBtn";

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
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.5);
  color: #fff;
`;
const LoginTitle = styled.h1`
  margin: 0;
`;

const Login = () => {
  return (
    <Container>
      <LoginBox>
        <LoginTitle>Login</LoginTitle>
        <Line />
        <LinkBtn
          href="https://github.com/login/oauth/authorize?client_id=e3ebfea3a5e32f5169e1"
          flavorText="Login with "
          icon={<BsGithub />}
          label="GitHub"
        />
      </LoginBox>
    </Container>
  );
};

export default Login;
