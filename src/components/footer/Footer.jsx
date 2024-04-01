import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-wrapper container">
          <div className="footer-info">
            <Link to={"/"}>LOGO</Link>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <h3>@Lorem</h3>
          </div>
          <ul className="footer-list">
            <h3>About us</h3>
            <li>
              <Link to={"/"}>Zeux</Link>
            </li>
            <li>
              <Link to={"services"}>Portfolio</Link>
            </li>
            <li>
              <Link to={"about"}>Careers</Link>
            </li>
            <li>
              <Link to={"contact"}>Contact us</Link>
            </li>
          </ul>
          <div className="footer-contact">
            <h3>Contact us</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <h4>+908 89097 890</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer