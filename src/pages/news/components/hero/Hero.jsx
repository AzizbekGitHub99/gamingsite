import React, { Component } from "react";
import arrow from "../assets/right-arrow.png";
import search from "../assets/search.png";
import "./hero.scss";
class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="container">
          <div className="hero__items">
            <a className="hero__items-href" href="#home">
              Home
            </a>
            <img src={arrow} alt="arrow" width="13px" />
            <a className="hero__items-href" href="/">
              News
            </a>
          </div>
          <div className="hero__header">
            <h1 className="hero__header-title">
              Lorem Ipsum is simply dummy text of the printing and.
            </h1>
            <p className="hero__header-paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <div className="hero__header-input">
              <input type="text" placeholder="Search" />
              <img className="search" src={search} alt="search" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
