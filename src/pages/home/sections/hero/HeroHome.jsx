import React, { Component } from "react";

import Btn from "../../../../components/button/Btn";

import eye from "../../../../assets/icons/home/cryengine.png";
import unreal from "../../../../assets/icons/home/unreal.png";

import "./HeroHome.scss";

export class HeroHome extends Component {
  render() {
    return (
      <section className="hero-home">
        <div className="container hero-wrapper">
          <div className="wapper-title">
            <h3>Proved By prodesigner</h3>
            <h1>Work that we produce for our clients</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
            <Btn>Get more details</Btn>
          </div>
          <div className="wrapper-icons">
            <img src={eye} alt="eye" />
            <img src={unreal} alt="eye" />
          </div>
        </div>
      </section>
    );
  }
}

export default HeroHome;
