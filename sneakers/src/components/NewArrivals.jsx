import React from "react";
import { Link } from "react-router-dom";
import NewArrivalSlider from "./common/NewArrivalSlider";

const NewArrivals = () => {
  return (
    <>
      <div className="bg-grey max-w-[1440px] mx-auto overflow-x-hidden px-2 min-h-[446px]">
        <div className="mx-auto max-w-[1126px] py-[64px] md:py-[120px] flex flex-col gap-[50px] md:gap-[90px]">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start ">
            <div>
              <h2 className="text-center md:text-left text-midnight text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] font-bold tracking-tight mx-auto md:mx-0">
                New Arrivals
              </h2>
              <p className="md:text-left text-center text-gray text-[14px] md:text-[18px] leading-[17px] md:leading-[32px] max-w-[350px] mx-auto mt-[24px]">
                Enjoy the new products from our store. Select what you like,
                enjoy & return.
              </p>
            </div>
            <Link
              to="/"
              className="block text-[20px] text-pink leading-[32px] font-semibold text-center md:text-left mt-4"
            >
              View all &gt;
            </Link>
          </div>
        </div>
      </div>
      <div className=" max-w-[1440px] mx-auto overflow-x-hidden px-2 -mt-[100px]">
        <div className="mx-auto max-w-[1126px]">
          <NewArrivalSlider />
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
