import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="navbar">
          <Link to={"/"} className="logo">
            Logo
          </Link>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"about"}>About us</NavLink>
            </li>
            <li>
              <NavLink to={"services"}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to={"news"}>News</NavLink>
            </li>
            <li>
              <NavLink to={"contact"}>Contact us</NavLink>
            </li>
          </ul>
          <button className="open-btn">X</button>
        </div>
      </div>
    );
  }
}

export default Header;
