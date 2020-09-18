import React from "react"
import LazyLoad from "react-lazyload"
import "../../css/components/logo-center.css"

const LogoImage = ({ image, logo }) => {
  return (
    <LazyLoad height={200} once offset={600}>
      <section className="logo-section">
        <img src={image} alt="" className="logo-section__image" />
        <img src={logo} alt="" className="logo-section__logo" />
      </section>
    </LazyLoad>
  )
}

export default LogoImage
