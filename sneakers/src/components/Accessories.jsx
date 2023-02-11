import React from "react";
import Button from "../components/common/Button";
import ball from "../assets/ball.png";
import shirt from "../assets/shirt.svg";

const Accessories = () => {
  return (
    <div className="max-w-[1440px] mx-auto overflow-x-hidden  flex flex-col md:flex-row ">
      <div className="md:w-1/2 bg-green px-2">
        <div className="max-w-[563px] mx-auto md:ml-auto flex flex-col items-center md:flex-row py-[40px] gap-4 md:gap-0 md:py-[70px]">
          <div className="md:w-1/2">
            <img src={ball} className="md:-mt-[60px]" />
          </div>
          <div className="md:w-1/2 flex flex-col gap-[10px] items-center md:items-start">
            <p className="text-center font-medium md:text-left  text-[16px]  leading-[24px] ">
              Accessories
            </p>
            <h3 className="text-white text-[40px] leading-[48px] md:text-[48px] md:leading-[56px] font-bold tracking-tight">
              Football
            </h3>
            <p className="text-white text-center font-medium md:text-left  text-[16px]  leading-[24px] mb-[18px]">
              We receive new sportwear every day. Just take your pick.
            </p>
            <Button
              text="Shop Now"
              shadow="shadow-md"
              color="midnight"
              extra="w-fit"
            />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 bg-midnight px-2">
        <div className="max-w-[563px] mx-auto md:mr-auto flex flex-col items-center md:flex-row py-[40px] gap-4 md:gap-0 md:py-[70px]">
          <div className="md:w-1/2">
            <img src={shirt} className="md:-mt-[40px]" />
          </div>
          <div className="md:w-1/2 flex flex-col gap-[10px] items-center md:items-start">
            <p className="text-green text-center font-medium md:text-left  text-[16px]  leading-[24px] ">
              Accessories
            </p>
            <h3 className="text-white text-[40px] leading-[48px] md:text-[48px] md:leading-[56px] font-bold tracking-tight">
              Volleyball
            </h3>
            <p className="text-white text-center font-medium md:text-left  text-[16px]  leading-[24px] mb-[18px]">
              We receive new sportwear every day. Just take your pick.
            </p>
            <Button
              text="Shop Now"
              shadow="shadow-gr"
              color="green"
              extra="w-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
