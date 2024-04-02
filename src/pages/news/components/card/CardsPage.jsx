import React, { Component } from "react";
import "./Cards.scss";
export class CardsPage extends Component {
  render() {
    const { image, button1, button2, header, paragraph1, paragraph2 } =
      this.props;
    return (
      <div className="card">
        <div className="card__image">
          <img src={image} alt="hi" />
        </div>
        <div className="card__btns">
          <button className="card__btn">{button1}</button>
          <button className="card__btn">{button2}</button>
        </div>
        <h3 className="card__header">{header}</h3>
        <p className="card__paragraph">{paragraph1}</p>
        <p className="card__paragraph">{paragraph2}</p>
      </div>
    );
  }
}

export default CardsPage;
