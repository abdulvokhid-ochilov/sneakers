import React from "react";
import BrandsSlider from "./common/BrandsSlider";

const PopularBrands = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-grey">
      <div className="max-w-[1280px] mx-auto  md:h-[800px] md:-mb-[250px] py-[42px] md:py-[80px] flex flex-col gap-[72px] px-2 ">
        <h2 className="text-midnight text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] font-bold tracking-tight text-center">
          Popular Brands
        </h2>
        <div className="overflow-hidden">
          <BrandsSlider />
        </div>
      </div>
    </div>
  );
};

export default PopularBrands;
