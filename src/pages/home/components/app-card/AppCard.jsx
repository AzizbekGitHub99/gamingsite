import React, { Component } from "react";

import arr from "../../../../assets/icons/home/RArrow.png"

import "./AppCard.scss"

class AppCard extends Component {
  render() {
    const { icon, title } = this.props;
    return (
      <div className="app-card">
        <div className="img-circle">
          <img src={icon} alt="icon" />
        </div>
        <p className="app-card-title">{title}</p>
        <img src={arr} alt="arrow" className="arrow" />
      </div>
    );
  }
}

export default AppCard;
