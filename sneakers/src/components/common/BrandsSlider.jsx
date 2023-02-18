import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Parallax, FreeMode } from "swiper";
import left from "../../../public/assets/chevron-left.svg";
import right from "../../../public/assets/chevron-right.svg";
import nike from "../../../public/assets/nike.svg";
import adidas from "../../../public/assets/Adidas.svg";
import balance from "../../../public/assets/New balance.svg";
import sportif from "../../../public/assets/Le coq sportif.svg";

export default function BrandsSlider() {
  const swiperRef = React.useRef(null);

  return (
    <>
      <div className="min-w-[972px] h-[200px]">
        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          speed={600}
          freeMode={true}
          parallax={true}
          modules={[Parallax, FreeMode]}
          className="mySwiper"
          ref={swiperRef}
        >
          <SwiperSlide>
            <img src={nike} alt="image slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={balance} alt="image slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={adidas} alt="image slide 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sportif} alt="image slide 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nike} alt="image slide 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={balance} alt="image slide 6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={adidas} alt="image slide 7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sportif} alt="image slide 8" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex gap-[22px] justify-center mt-[60px]">
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
