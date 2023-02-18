import React from "react";
import Toggle from "./common/Toggle";
import bestSeller from "../../public/assets/best-seller.png";
import top from "../../public/assets/top.svg";
import Button from "./common/Button";

const BestSeller = () => {
  return (
    <div className="bg-white max-w-[1440px] mx-auto overflow-x-hidden py-[64px] md:py-[144px] pr-2">
      <div className="mx-auto max-w-[1126px] flex flex-col gap-4 md:gap-0 md:flex-row items-center md:justify-between">
        <h2 className="text-midnight text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] font-bold tracking-tight text-left md:text-center">
          Best seller this week
        </h2>
        <div className="flex items-center text-center font-medium md:text-left  text-[16px] md:text-[18px] leading-[24px] md:leading-[32px]">
          Men <Toggle /> Women
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <img src={bestSeller} className="object-cover" />
        </div>
        <div className="mx-auto md:mx-0 md:w-1/3">
          <div className="flex flex-col max-w-[290px] gap-[32px] h-full justify-center">
            <div>
              <img src={top} className="mx-auto md:mx-0" />
            </div>
            <p className="text-center font-bold md:text-left text-[24px] leading-[32px]">
              Adidas Falcon Shoes for women - 2021 Edition
            </p>
            <p className="text-center font-bold md:text-left text-[24px] leading-[32px] tracking-tight">
              $120.50
            </p>
            <Button
              text="Shop Now"
              shadow="shadow-bl"
              color="blue"
              extra="w-fit mt-[20px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
