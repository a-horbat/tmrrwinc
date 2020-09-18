import React from "react"
import "../../css/components/banner.css"
/* eslint-disable react/prop-types */

const Banner = ({
  backgroundImage,
  title,
  subtitle,
  mobSubtitle,
  images,
  image,
  transferal,
}) => {
  return (
    <section
      className={transferal ? "banner banner-duca" : "banner"}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="banner__vertical-middle">
        <div className="container">
          <div className={mobSubtitle ? "row banner-mobile" : "row"}>
            <div className="col-lg-6 col-md-6 project-title">
              <h4 className="banner__subtitle">{subtitle}</h4>
              <h1
                data-splitting=""
                className={transferal ? "title-altspace" : ""}
              >
                {title}
              </h1>
            </div>
            {images ? (
              <>
                <img src={images[0]} alt="" className="logo-desktop" />
                <img src={images[1]} alt="" className="logo-mobile" />
              </>
            ) : null}
          </div>
        </div>
      </div>
      {image ? <img src={image} alt="Skull" className="skull" /> : null}
    </section>
  )
}

export default Banner
