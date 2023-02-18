import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import shoes from "/assets/new-shoes.svg";

import { Parallax, FreeMode, Pagination } from "swiper";
import NewArrivalCard from "./NewArrivalCard";
import rating from "/assets/Rating.svg";

export default function NewArrivalSlider() {
  const swiperRef = React.useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="min-w-[1024px]">
        <Swiper
          slidesPerView={4}
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
            <NewArrivalCard
              price="$120.50"
              desc="Adidas Falcon Shoes for men - 2021 Edition"
              rating={rating}
              prod={shoes}
              num="1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewArrivalCard
              price="$120.50"
              desc="Adidas Falcon Shoes for men - 2021 Edition"
              rating={rating}
              prod={shoes}
              num="2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewArrivalCard
              price="$120.50"
              desc="Adidas Falcon Shoes for men - 2021 Edition"
              rating={rating}
              prod={shoes}
              num="3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewArrivalCard
              price="$120.50"
              desc="Adidas Falcon Shoes for men - 2021 Edition"
              rating={rating}
              prod={shoes}
              num="4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewArrivalCard
              price="$120.50"
              desc="Adidas Falcon Shoes for men - 2021 Edition"
              rating={rating}
              prod={shoes}
              num="5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewArrivalCard
              price="$120.50"
              desc="Adidas Falcon Shoes for men - 2021 Edition"
              rating={rating}
              prod={shoes}
              num="6"
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewArrivalCard
              price="$120.50"
              desc="Adidas Falcon Shoes for men - 2021 Edition"
              rating={rating}
              prod={shoes}
              num="7"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-row justify-center gap-[12px] my-[60px]">
        <div
          className={`w-[12px] h-[12px] ${
            index === 0 ? "bg-blue" : "bg-[#C1C0C0]"
          }  rounded-full cursor-pointer`}
          onClick={() => {
            setIndex(0);
            swiperRef.current.swiper.slideTo(0);
          }}
        ></div>
        <div
          className={`w-[12px] h-[12px] ${
            index === 1 ? "bg-blue" : "bg-[#C1C0C0]"
          }  rounded-full cursor-pointer`}
          onClick={() => {
            setIndex(1);
            swiperRef.current.swiper.slideTo(1);
          }}
        ></div>
        <div
          className={`w-[12px] h-[12px] ${
            index === 2 ? "bg-blue" : "bg-[#C1C0C0]"
          }  rounded-full cursor-pointer`}
          onClick={() => {
            setIndex(2);
            swiperRef.current.swiper.slideTo(2);
          }}
        ></div>
        <div
          className={`w-[12px] h-[12px] ${
            index === 3 ? "bg-blue" : "bg-[#C1C0C0]"
          }  rounded-full cursor-pointer`}
          onClick={() => {
            setIndex(3);
            swiperRef.current.swiper.slideTo(3);
          }}
        ></div>
      </div>
    </>
  );
}
