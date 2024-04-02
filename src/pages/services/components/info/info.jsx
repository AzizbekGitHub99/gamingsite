import React, { Component, Fragment } from "react";

import VedioImage from "../../images/vedioImage.png";
import game2 from "../../images/game-2.png";
import game3 from "../../images/game-3.png";
import game4 from "../../images/game-4.png";
import Right from "../../images/right.svg";

import "./info.scss";

class Info extends Component {
  render() {
    return (
      <Fragment>
        <section id="info">
          <div className="container">
            <div className="game-cards">
              <div className="info-game-cards">
                <img src={VedioImage} alt="" />
                <div className="game-infos">
                  <h3>Lorem Ipsum is simply dummy text.</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy .
                  </p>
                  <div className="infos-row">
                    <img src={Right} alt="" />
                    <p>Lorem Ipsum is simply</p>
                  </div>
                  <div className="infos-row">
                    <img src={Right} alt="" />
                    <p>Lorem Ipsum is simply</p>
                  </div>
                  <div className="infos-row">
                    <img src={Right} alt="" />
                    <p>Lorem Ipsum is simply</p>
                  </div>
                  <div className="infos-row">
                    <img src={Right} alt="" />
                    <p>Lorem Ipsum is simply</p>
                  </div>
                </div>
              </div>
              <div className="info-game-cards">
                <div className="game-infos">
                  <h1>Lorem Ipsum is simply dummy text.</h1>
                  <p className="game-title">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </p>
                  <p className="game-title">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                  <button>Read more</button>
                </div>
                <img src={game2} alt="" />
              </div>
              <div className="info-game-cards">
                <img src={game3} alt="" />
                <div className="game-infos">
                  <h1>Lorem Ipsum is simply dummy text.</h1>
                  <p className="game-title">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </p>
                  <p className="game-title">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                  <button>Read more</button>
                </div>
              </div>
              <div className="info-game-cards">
                <div className="game-infos">
                  <h1>Lorem Ipsum is simply dummy text.</h1>
                  <p className="game-title">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </p>
                  <p className="game-title">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                  <button>Read more</button>
                </div>
                <img src={game4} alt="" />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Info;
