import React from "react"
import LazyLoad from "react-lazyload"
import "../../css/components/center-image.css"
/* eslint-disable react/prop-types */

const CenterImage = ({ image, logoImage }) => {
  const mainImage = <img src={image} alt="" />
  const logoImageBlock = (
    <div className="logo-style">
      <img src={logoImage} alt="" />
    </div>
  )
  const singleBlockClass = logoImage
    ? "single-block single-block-logo"
    : "single-block"
  const singleImgClass = logoImage ? "single-img single-img-logo" : "single-img"
  return (
    <LazyLoad height={200} once offset={300}>
      <section className={singleBlockClass}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className={singleImgClass}>
                {logoImage ? logoImageBlock : mainImage}
              </div>
            </div>
          </div>
        </div>
      </section>
    </LazyLoad>
  )
}

export default CenterImage
