import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';

import user from "../../images/user.png";
import location from "../../images/location.png";


import "./hero.scss"

export class Hero extends Component {
  render() {
    return (
      <Fragment>
        <section id='hero'>
            <div className="container">
                <div className="hero-tab-links">
                    <Link className='link-home'  to={"/"}>Home</Link>
                    <span> > </span>
                    <p className='link-home'  to={"/service"}>Services</p>
                </div>
                <div className="hero-titles">
                   <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                    <p></p>
                </div>
                <div className="hero-infos container-1140">
                    <div className="info-card">
                        <img src={user} alt="" />
                        <div className="card-info">
                            <h3>90+</h3>
                            <p>Clients</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <img src={location} alt="" />
                        <div className="card-info">
                            <h3>30+</h3>
                            <p>Countries</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <img src={user} alt="" />
                        <div className="card-info">
                            <h3>50+</h3>
                            <p>Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </Fragment>
    )
  }
}

export default Hero