import React from "react";
import "../../css/components/black-and-white-cards.css";
/* eslint-disable react/prop-types */

const BlackAndWhiteCards = ({ blackCard, whiteCard }) => {
  return (
    <section className="black-and-white-cards">
      <div className="container">
        <div className="row flex-no-wrap">
          <div className="col-lg-6 col-md-6">
            <img src={blackCard} alt="blackCard" />
          </div>
          <div className="col-lg-6 col-md-6">
            <img src={whiteCard} alt="whiteCard" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackAndWhiteCards;
