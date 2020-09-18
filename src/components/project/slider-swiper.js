import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
// import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/swiper.css";
import PrevArrow from "../../images/prev-arrow2.svg";
import NextArrow from "../../images/next-arrow2.svg";
import "../../css/components/slider-swiper.css";

const setNumSlides = slides => {
  return {
    freeMode: true,
    speed: 2000,
    loop: true,
    spaceBetween: 50,
    slidesPerView: slides,
    navigation: {
      nextEl: ".nextArrow",
      prevEl: ".prevArrow",
    },
  };
};
const SliderSwipper = ({ images, path }) => {
  const [swiper, setSwiper] = useState(null);
  const [slide, setSlide] = useState(1);

  useEffect(() => {
    const calculateSize = () => {
      document.body.clientWidth < 479 ? setSlide(2) : setSlide(1);
    };
    calculateSize();
    window.addEventListener("resize", calculateSize);
    return () => {
      window.removeEventListener("resize", calculateSize);
    };
  }, []);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const viewSlider = type => {
    return (
      <Swiper {...type} getSwiper={setSwiper}>
        {images.map((image, index) => (
          <div className="slider-img" key={index}>
            <div className="slider-block">
              <img src={image} alt="" />
            </div>
            <div className="slider-arrows">
              <img src={PrevArrow} alt="" className="prevArrow" onClick={goPrev} />
              <img src={NextArrow} alt="" className="nextArrow" onClick={goNext} />
              <span className="slider-num"></span>
            </div>
          </div>
        ))}
      </Swiper>
    );
  };
  const numSlides = slide === 1;

  return (
    <div className="slider-items">
      {path === "/work/steven-del-duca"
        ? numSlides
          ? viewSlider(setNumSlides(0.2))
          : viewSlider(setNumSlides(0.3))
        : numSlides
        ? viewSlider(setNumSlides(1))
        : viewSlider(setNumSlides(2))}
    </div>
  );
};

export default SliderSwipper;
