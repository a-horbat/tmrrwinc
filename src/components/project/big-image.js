import React from "react";
import LazyLoad from "react-lazyload";
import "../../css/components/big-image.css";
/* eslint-disable react/prop-types */

const BigImage = ({ image, video, imageMob, noPaddingBottom }) => {
  return (
    <LazyLoad height={200} once offset={600}>
      <section
        className="big-section"
        style={{
          paddingBottom: noPaddingBottom ? "0px" : "",
        }}
      >
        {video ? (
          <video src={image} autoPlay="autoplay" loop />
        ) : (
          <>
            <img src={image} alt="deskImage" className="deskImage" />
            {imageMob ? (
              <img
                src={imageMob}
                alt="mobImage"
                className="mobImage"
                style={{ marginTop: "73px" }}
              />
            ) : (
              ""
            )}
          </>
        )}
      </section>
    </LazyLoad>
  );
};

export default BigImage;
