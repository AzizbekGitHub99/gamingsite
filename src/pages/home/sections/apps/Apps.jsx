import React, { Component } from "react";

import AppCard from "../../components/app-card/AppCard";
import devs from "../../consts/devs"

import "./Apps.scss"

class Apps extends Component {
  render() {
    return (
      <section className="apps">
        <div className="container apps__main">
          <h2 className="title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <h3 className="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </h3>
          <div className="app-cards">
            {devs.map((el, i) => <AppCard key={i} {...el}/>)}
          </div>
        </div>
      </section>
    );
  }
}

export default Apps;
