import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {props.isLoggedIn && (
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      )}
    </ul>
  );
};

export default Nav;
