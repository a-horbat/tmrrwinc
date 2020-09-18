import React from "react";
import "../../css/components/two-phones.css";
import LazyLoad from "react-lazyload";

const TwoPhones = ({ title, phone1, phone2, line, subtitle }) => {
  return (
    <LazyLoad height={200} once offset={400}>
      <section className="color-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 offset-g-2 offset-md-2">
              <div className="image-container">
                <h3 className="image-title"> {title}</h3>
                <p>{subtitle}</p>
                <img src={line} />
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 img-block">
                  <img src={phone1} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 img-block down">
                  <img src={phone2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LazyLoad>
  );
};

export default TwoPhones;
