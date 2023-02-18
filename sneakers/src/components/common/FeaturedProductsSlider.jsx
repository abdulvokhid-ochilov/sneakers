import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Parallax, FreeMode, Pagination } from "swiper";
import ProductCard from "./ProductCard";
import prod1 from "/assets/prod1.svg";
import prod2 from "/assets/prod2.svg";
import prod3 from "/assets/prod3.svg";
import rating from "/assets/Rating.svg";

export default function FeaturedProductsSlider() {
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
            <ProductCard
              price="$120.50"
              desc="Adidas Falcon Shoes for men - 2021 Edition"
              rating={rating}
              prod={prod2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              price="$120.50"
              desc="Adidas Falcon Shoes for men - 2021 Edition"
              rating={rating}
              prod={prod3}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              price="$120.50"
              desc="Adidas Falcon Shoes for men - 2021 Edition"
              rating={rating}
              prod={prod2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              price="$120.50"
              desc="Adidas Falcon Shoes for men - 2021 Edition"
              rating={rating}
              prod={prod1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              price="$120.50"
              desc="Adidas Falcon Shoes for men - 2021 Edition"
              rating={rating}
              prod={prod2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              price="$120.50"
              desc="Adidas Falcon Shoes for men - 2021 Edition"
              rating={rating}
              prod={prod3}
            />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard
              price="$120.50"
              desc="Adidas Falcon Shoes for men - 2021 Edition"
              rating={rating}
              prod={prod1}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center bg-grey rounded-[8px] max-w-[661px] mx-auto mt-[90px]">
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
