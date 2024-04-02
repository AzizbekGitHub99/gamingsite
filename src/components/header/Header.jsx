import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

class Header extends Component {
  state = {
    isOpen: false,
  };
  render() {
    const { isOpen } = this.state;
    const toogleMenu = () => {
      this.setState({ isOpen: !isOpen });
    };

    return (
      <div className="header">
        <div className="navbar">
          <Link to={"/"} className="logo">
            Logo
          </Link>
          <ul className={isOpen ? "open" : ""}>
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
          <button
            className={!isOpen ? "open-btn openb" : "open-btn"}
            onClick={toogleMenu}
          >
            {isOpen ? (
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.7929 7.49998L1.14645 1.85353L1.85356 1.14642L7.50001 6.79287L13.1465 1.14642L13.8536 1.85353L8.20711 7.49998L13.8536 13.1464L13.1465 13.8535L7.50001 8.20708L1.85356 13.8535L1.14645 13.1464L6.7929 7.49998Z"
                  fill="#fff"
                />
              </svg>
            ) : (
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 4H21"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 12H21"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 20H21"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
