import React from "react";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  background-color: #565656;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  :hover {
    background-color: #2ea043;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  }
`;

const Btn = (props) => {
  return <Button>{props.label}</Button>;
};

export default Btn;
