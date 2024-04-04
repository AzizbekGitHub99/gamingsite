import React, { Component } from "react";
import "./Cards.scss";
export class LittleCard extends Component {
  render() {
    const { image, btn1, btn2, title, color } = this.props;
    console.log(image);
    return (
      <div className="litle__card">
        <div className="litle__card-img">
          <img src={image} alt="hello" />
        </div>
        <div className="litle__card-items">
          <div className="card__btns">
            <button
              className="card__btn"
              style={{ backgroundColor: `${color}` }}
            >
              {btn1}
            </button>
            <button className="card__btn">{btn2}</button>
          </div>
          <h4 className="litle__card-header">{title}</h4>
        </div>
      </div>
    );
  }
}

export default LittleCard;
