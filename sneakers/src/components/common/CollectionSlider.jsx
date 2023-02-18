import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Parallax, FreeMode, Pagination } from "swiper";
import CollectionCard from "./CollectionCard";
import col1 from "../../../public/assets/col1.png";
import col2 from "../../../public/assets/col2.png";
import col3 from "../../../public/assets/col3.png";
import ellipse1 from "../../../public/assets/ellipse1.svg";
import ellipse2 from "../../../public/assets/ellipse2.svg";
import ellipse3 from "../../../public/assets/ellipse3.svg";

export default function CollectionSlider() {
  const swiperRef = React.useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="min-w-[1124px]">
        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          speed={600}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          parallax={true}
          modules={[Parallax, Pagination, FreeMode]}
          className="mySwiper"
          ref={swiperRef}
          onSlideChange={(swiper) => {
            setIndex(swiper.activeIndex);
          }}
        >
          <SwiperSlide>
            <CollectionCard
              products="120"
              product={col1}
              img={ellipse1}
              color="text-blue"
              name="Sneakers"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CollectionCard
              products="80"
              product={col2}
              img={ellipse2}
              color="text-orange"
              name="Football"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CollectionCard
              products="160"
              product={col3}
              img={ellipse3}
              color="text-pink"
              name="Volleyball"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CollectionCard
              products="120"
              product={col1}
              img={ellipse1}
              color="text-blue"
              name="Sneakers"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CollectionCard
              products="80"
              product={col2}
              img={ellipse2}
              color="text-orange"
              name="Football"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CollectionCard
              products="160"
              product={col3}
              img={ellipse3}
              color="text-pink"
              name="Volleyball"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center bg-grey rounded-[8px] max-w-[661px] mx-auto ">
        <button
          className={`w-1/4 h-[6px] ${
            index === 0 && "bg-green"
          }  rounded-[8px]`}
          onClick={() => {
            setIndex(0);
            swiperRef.current.swiper.slideTo(0);
          }}
        ></button>
        <button
          className={`w-1/4 h-[6px] ${
            index === 1 && "bg-green"
          }  rounded-[8px]`}
          onClick={() => {
            setIndex(1);
            swiperRef.current.swiper.slideTo(1);
          }}
        ></button>
        <button
          className={`w-1/4 h-[6px] ${
            index === 2 && "bg-green"
          }  rounded-[8px]`}
          onClick={() => {
            setIndex(2);
            swiperRef.current.swiper.slideTo(2);
          }}
        ></button>
        <button
          className={`w-1/4 h-[6px] ${
            index === 3 && "bg-green"
          }  rounded-[8px]`}
          onClick={() => {
            setIndex(3);
            swiperRef.current.swiper.slideTo(3);
          }}
        ></button>
      </div>
    </>
  );
}
