import React from "react";
import car from "../assets/Car.svg";
import support from "../assets/support.svg";
import quality from "../assets/quality.svg";
import price from "../assets/Wallet.svg";
import shop from "../assets/Shop.svg";

const OurShop = () => {
  return (
    <div className="bg-white max-w-[1440px] mx-auto overflow-x-hidden py-[64px] px-2">
      <div className="mx-auto max-w-[1126px] flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={shop} className="scale-110 -ml-[40px] md:-ml-[80px]" />
        </div>
        <div className="md:w-1/2 flex flex-col gap-[32px]">
          <h2 className="text-midnight text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] font-bold tracking-tight md:text-left text-center">
            Why choose our shop
          </h2>
          <p className="md:text-left text-center text-gray text-[14px] md:text-[18px] leading-[17px] md:leading-[32px] max-w-[639px] mx-auto">
            For explosive events (sprints up to 400 metres, long jump, triple
            jump) the reduction in atmospheric pressure means there is less
            resistance from the atmosphere.
          </p>
          <div className="flex flex-col md:flex-row gap-[40px] flex-wrap justify-start">
            <div className="flex flex-row items-center gap-[30px] justify-center md:justify-start ">
              <img src={car} />
              <p>Fast Delivery</p>
            </div>
            <div className="flex flex-row items-center gap-[30px] justify-center md:justify-start -ml-3 md:ml-0">
              <img src={price} />
              <p>Cool Prices</p>
            </div>

            <div className="flex flex-row items-center gap-[30px] justify-center md:justify-start  ml-2 md:ml-0">
              <img src={support} />
              <p>Great Support</p>
            </div>
            <div className="flex flex-row items-center gap-[30px] justify-center md:justify-start  -ml-1 md:ml-0">
              <img src={quality} />
              <p>High Quality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurShop;
