import React, { Component } from "react";
import CardsPage from "./CardsPage";
import card1 from "../assets/allone.png";
import card2 from "../assets/alltwoo.png";
import line from "../assets/line.png";
import li1 from "../assets/comunity.png";
import li2 from "../assets/girl.png";
import li3 from "../assets/great.png";
import li4 from "../assets/office.png";
import li5 from "../assets/plastation.png";
import li6 from "../assets/play.png";
import li7 from "../assets/plastation2.png";

import "./Cards.scss";
import LittleCard from "./LittleCard";
export class Card extends Component {
  render() {
    return (
      <section className="cards">
        <div className="container">
          <div className="cards__items">
            <div className="cards__left">
              <CardsPage
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
              <CardsPage
                image={card2}
                button1="John smash"
                button2=".5min"
                header="Lorem Ipsum is simply dummy text dummy text "
                paragraph1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
                paragraph2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              />
            </div>
            <div className="card__right">
              <LittleCard
                image={li1}
                btn1="John smash"
                btn2=".5min"
                title="Lorem Ipsum is simply dummy text dummy text ? "
                color="#FF8484"
              />
              <LittleCard
                image={li2}
                btn1="John smash"
                btn2=".5min"
                title="Lorem Ipsum is simply dummy text dummy text ? "
                color="#2351F5"
              />
              <LittleCard
                image={li3}
                btn1="John smash"
                btn2=".5min"
                title="Lorem Ipsum is simply dummy text dummy text ? "
                color="#FF7C32"
              />
              <LittleCard
                image={li4}
                btn1="John smash"
                btn2=".5min"
                title="Lorem Ipsum is simply dummy text dummy text ? "
                color="#2351F5"
              />
              <LittleCard
                image={li5}
                btn1="John smash"
                btn2=".5min"
                title="Lorem Ipsum is simply dummy text dummy text ? "
                color="#23A54F"
              />
              <LittleCard
                image={li6}
                btn1="John smash"
                btn2=".5min"
                title="Lorem Ipsum is simply dummy text dummy text ? "
                color="#2351F5"
              />
              <LittleCard
                image={li7}
                btn1="John smash"
                btn2=".5min"
                title="Lorem Ipsum is simply dummy text dummy text ? "
                color="#9921C3"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Card;
