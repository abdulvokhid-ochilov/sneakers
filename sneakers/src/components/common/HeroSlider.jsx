import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import sneaker from "../../assets/sneaker.png";

// import required modules
import { Parallax } from "swiper";
import back from "../../assets/hero-back.png";
import left from "../../assets/arrow-left-circle.svg";
import right from "../../assets/arrow-right-circle.svg";
import Card from "./Card";

export default function HeroSlider() {
  const swiper = useSwiper();
  const swiperRef = React.useRef(null);

  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        modules={[Parallax]}
        className="mySwiper"
        ref={swiperRef}
      >
        <img
          slot="container-start"
          className="absolute object-contain"
          src={back}
        />
        <SwiperSlide>
          <img
            src={sneaker}
            alt="image slide 1"
            className="md:float-right scale-90"
          />
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sneaker}
            alt="image slide 2"
            className="md:float-right scale-90"
          />
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sneaker}
            alt="image slide 3"
            className="md:float-right scale-90"
          />
          <Card />
        </SwiperSlide>
      </Swiper>
      <div className="flex gap-[22px] justify-center md:justify-start md:ml-[180px] ">
        <button
          id="previousButton"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <img src={left} className="fill-blue" />
        </button>

        <button
          id="nextButton"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <img src={right} className="fill-blue" />
        </button>
      </div>
    </>
  );
}
