import React, { useState } from "react"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import PrevArrow from "../../images/prev-arrow2.svg"
import NextArrow from "../../images/next-arrow2.svg"
import "../../css/components/slider-content.css"

const swiperSetting = (desk, mob) => {
  return {
    freeMode: true,
    speed: 2000,
    loop: true,
    spaceBetween: 50,
    slidesPerView: desk,
    autoHeight: true,
    breakpoints: {
      1280: {
        spaceBetween: 50,
        slidesPerView: desk,
      },

      768: {
        spaceBetween: 50,
        slidesPerView: mob,
      },

      479: {
        slidesPerView: mob,
        spaceBetween: 20,
      },
      200: {
        slidesPerView: mob,
        spaceBetween: 20,
      },
    },

    navigation: {
      nextEl: ".nextArrow",
      prevEl: ".prevArrow",
    },
  }
}

const SliderContent = props => {
  const [swiper, setSwiper] = useState(null)
  const [num, setNum] = useState(1)

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext()
    }
    if (num > 0 && num < 2) {
      setNum(num + 1)
      swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev()
    }
    if (num > 1) {
      setNum(num - 1)
      swiper.slidePrev()
    }
  }

  const viewSlider = type => {
    return (
      <>
        <Swiper {...type} getSwiper={setSwiper}>
          {props.images.map((image, index) => (
            <div className="slider-img" key={index}>
              <div value="slider-block">
                <img src={image} alt="" />
              </div>
            </div>
          ))}
        </Swiper>
        <div
          className="slider-arrows"
          style={props.path === "los-puntos" ? { filter: "invert(90%)" } : null}
        >
          <img src={PrevArrow} alt="" className="arrow" onClick={goPrev} />
          <img src={NextArrow} alt="" className="arrow" onClick={goNext} />
          <span className="slider-num">{num} / 2</span>
        </div>
      </>
    )
  }
  return (
    <div className="slider-items">
      {props.path === "steven-del-duca"
        ? viewSlider(swiperSetting(0.4, 0.2))
        : viewSlider(swiperSetting(2, "auto"))}
    </div>
  )
}

export default SliderContent
