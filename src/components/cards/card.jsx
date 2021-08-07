import React from "react";
import "./card.scss";
import TwoBlock from "../../assets/images/twoblocks.svg";

export const Card = () => {
  return (
    <div className="container">
      <div className="cards">
        <div className="cards__card">
          <div className="cards__card-img">
            <img src={TwoBlock} alt="Block" />
          </div>
          <div className="cards__card-texts">
            <p className="cards__card-title">Web Hosting</p>
            <p className="cards__card-text">Basic web hosting plans</p>
            <p className="cards__card-p">Starting at</p>
          </div>
          <div className="cards__card-prices">
            <p className="cards__card-price">$9.99</p>
            <p className="cards__card-valute">/mo</p>
          </div>
          <button className="cards__card-btn">See Features</button>
        </div>
      </div>
    </div>
  );
};
