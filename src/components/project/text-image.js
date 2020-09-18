import React from "react";
import LazyLoad from "react-lazyload";
import "../../css/components/text-image.css";

const TextImage = ({ title, subtitle, h2color, h3color, image, description, leftImage, top }) => {
  return (
    <LazyLoad height={200} once offset={500}>
      <section className="text-image" style={{ marginTop: top }}>
        <div className={leftImage ? "main-block-leftImage" : "main-block"}>
          <div
            className={
              leftImage
                ? "col-lg-7 col-md-7 project-info leftblock"
                : "col-lg-7 col-md-7 project-info"
            }
          >
            <h2 data-splitting="" style={{ color: h3color }} className="big-text">
              {title}
            </h2>
            <div className="project-column">
              <h3 style={{ color: h2color }}>{subtitle}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className={leftImage ? "imageLeft" : "project-image"}>
            <img src={image} alt="" />
          </div>
        </div>
      </section>
    </LazyLoad>
  );
};

export default TextImage;
