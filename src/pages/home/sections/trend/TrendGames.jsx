import React, { Component } from "react";

import fire from "../../../../assets/icons/home/fire.png";
import card1 from "../../../../assets/images/home/card1.png";
import card2 from "../../../../assets/images/home/card2.png";
import card3 from "../../../../assets/images/home/card3.png";
import card4 from "../../../../assets/images/home/card4.png";
import dots from "../../../../assets/images/home/dots.png";

import "./TrendGames.scss";

class TrendGames extends Component {
  render() {
    return (
      <section className="trend-games container">
        <div className="title">
          <h2>Currently Trending Games</h2>
          <button>SEE ALL</button>
        </div>
        <div className="trend-cards">
          <div className="trend-card">
            <img className="card-img" src={card1} alt="card-img" />
            <h4>
              <img src={fire} alt="fire" /> 40 Followers
            </h4>
          </div>
          <div className="trend-card">
            <img className="card-img" src={card2} alt="card-img" />
            <h4>
              <img src={fire} alt="fire" /> 40 Followers
            </h4>
          </div>
          <div className="trend-card">
            <img className="card-img" src={card3} alt="card-img" />
            <h4>
              <img src={fire} alt="fire" /> 40 Followers
            </h4>
          </div>
          <div className="trend-card">
            <img className="card-img" src={card4} alt="card-img" />
            <h4>
              <img src={fire} alt="fire" /> 40 Followers
            </h4>
          </div>
        </div>
        <div className="callofduty">
          <h2 className="title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <h3 className="subtitle">Lorem Ipsum</h3>
          <p className="descript">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <div className="cod-img">
            <img src={dots} alt="dots" />
          </div>
        </div>
      </section>
    );
  }
}

export default TrendGames;
