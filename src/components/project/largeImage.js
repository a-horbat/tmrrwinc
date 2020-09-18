import React from "react"

import LazyLoad from "react-lazyload"
import "../../css/components/largeImage.css"

const LargeImage = ({ image, video, stretch, noPaddingBottom, bottom }) => {
  return (
    <LazyLoad height={200} once offset={600}>
      <section
        className={
          bottom ? "largeImage-section margBottom" : "largeImage-section"
        }
        style={noPaddingBottom ? { marginBottom: 0 } : null}
      >
        {video ? (
          <video src={image} autoPlay loop>
            <source type="video/mp4" src={image} />
          </video>
        ) : (
          <img
            src={image}
            alt=""
            style={stretch ? { minHeight: "360px" } : null}
          />
        )}
      </section>
    </LazyLoad>
  )
}

export default LargeImage
