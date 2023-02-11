import React from "react";
import favorite from "../assets/favorite.svg";
import tick from "../assets/Group 4.svg";
import Button from "./common/Button";
import HeroSlider from "./common/HeroSlider";

const Hero = () => {
  return (
    <div className="bg-grey max-w-[1440px] mx-auto overflow-hidden">
      <div className="mx-auto max-w-[1126px] pl-2 pb-[50px]">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-[32px] md:gap-[48px] md:mt-[80px] md:w-2/5 pr-2 md:pr-0">
            <h1 className="text-center md:text-left md:w-[430px] lg:w-[618px] text-[48px] lg:text-[68px] leading-[56px] lg:leading-[80px] text-midnight font-bold tracking-tight">
              Get your awesome sneakers.
            </h1>
            <p className="text-center md:text-left text-gray text-[20px] md:max-w-[430px] leading-[32px]">
              We offer the best deals in our shop. Check them out now. We have
              awesome stuff on sale for you.
            </p>
            <div className="flex justify-center md:justify-start gap-8 md:gap-12">
              <Button text="Shop Now" color="pink" shadow="shadow-3xl" />
              <img src={favorite} />
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:mt-8 md:mb-16 text-[16px]">
              <div className="-ml-8 md:ml-0 flex gap-[16px] justify-center md:justify-start">
                <img src={tick} className="w-[28px] h-[28px]" />
                <span>Free Shipping</span>
              </div>
              <div className="-ml-9 md:ml-0 flex gap-[16px] justify-center md:justify-start">
                <img src={tick} className="w-[28px] h-[28px]" />
                <span>Free Returns</span>
              </div>
            </div>
          </div>
          <div className="md:w-[450px] lg:w-[550px] xl:w-[750px] md:ml-10 pr-2 md:pr-0">
            <HeroSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
