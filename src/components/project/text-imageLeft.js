import React from "react";
import LazyLoad from "react-lazyload";
import "../../css/components/text-imageLeft.css";

const TextImageLeft = ({ subtitle, h3color, image, description }) => {
  return (
    <LazyLoad height={200} once offset={500}>
      <section className="main-block-left">
        <div className="project-image-left">
          <img src={image} alt="" />
        </div>
        <div className="col-lg-7 col-md-7 project-info left-text">
          <div className="project-column-left">
            <h3 style={{ color: h3color }}>{subtitle}</h3>
            <p>{description}</p>
          </div>
        </div>
      </section>
    </LazyLoad>
  );
};

export default TextImageLeft;
