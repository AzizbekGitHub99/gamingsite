import React, { Component } from "react";
import LeftCardsPage from "./LeftCardsPage";
import LittleCard from "./LittleCard";
import news from "./news";
import card1 from "../assets/allone.png";
import card2 from "../assets/alltwoo.png";
import line from "../assets/line.png";
import "./Cards.scss";

export class Card extends Component {
  render() {
    return (
      <section className="cards">
        <div className="container">
          <div className="cards__items">
            <div className="cards__left">
              <LeftCardsPage
                image={card1}
                button1="John smash"
                button2=".5min"
                header="Lorem Ipsum is simply dummy text dummy text "
                paragraph1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
                paragraph2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              />
              <div className="line">
                <img src={line} alt="line" />
              </div>
              <LeftCardsPage
                image={card2}
                button1="John smash"
                button2=".5min"
                header="Lorem Ipsum is simply dummy text dummy text "
                paragraph1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
                paragraph2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              />
            </div>
            <div className="card__right">
              {news.map((el, i) => (
                <div key={i}>
                  <LittleCard {...el}>
                    <p>{el.description}</p>
                  </LittleCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Card;
