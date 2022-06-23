import React from 'react'
import styled from 'styled-components';

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
const LinkBtn = (props) => {
  return (
    <GhBtn href={props.href} onClick={props.onClick}>
      {props.flavorText} {props.icon} <strong>{props.label}</strong>
    </GhBtn>
  )
}

export default LinkBtn