import React from "react";
import { Link } from "react-router-dom";
import Style from "style-it";

const Nav = (props) => {
  return Style.it(
    `
      #nav-bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 3rem;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        box-shadow: 0 0.1rem .2rem rgba(0, 0, 0, 0.15);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
      },
      #nav-list {
        list-style: none;
        display: flex; 
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 10%;
      },
    `,
    <div id="nav-bar">
      <ul id="nav-list">
        <li class="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li class="nav-item">
          {props.isLoggedin && <Link to="/logout">Logout</Link>}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
