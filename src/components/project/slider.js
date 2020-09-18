import React from "react"
import "../../css/components/slider.css"
import SliderContent from "./slider-contents"
import LazyLoad from "react-lazyload"

// import Swiper from 'react-id-swiper';
import styled from "styled-components"

const PortfolioSlider = ({ color, images, path }) => {
  const SliderColorBlock = styled.section`
    ::before {
      background: ${color} !important;
    }
  `
  return (
    <LazyLoad height={200} once offset={300}>
      <section className="slider-section">
        <div className="container">
          <div className="row">
            <SliderColorBlock className="slider-color-block">
              <SliderContent images={images} path={path} />
            </SliderColorBlock>
          </div>
        </div>
      </section>
    </LazyLoad>
  )
}

export default PortfolioSlider
