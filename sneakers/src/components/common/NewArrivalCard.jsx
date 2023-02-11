import React from "react";

const NewArrivalCard = ({ prod, rating, desc, price, num }) => {
  return (
    <div className="text-midnight flex flex-col gap-[24px] w-[250px]">
      <div
        className={`bg-gradient-to-r to-blue from-harbor rounded-[24px] px-[24px] pt-[24px] pb-[14px]`}
      >
        <h3 className="font-bold text-[48px] leading-[56px] tracking-tight text-white">
          0{num}
        </h3>
        <img src={prod} className="-z-10 scale-[2] mt-6" />
        <button className="mt-[30px] ml-[150px] bg-white w-[50px] h-[28px] text-midnight rounded-[16px]">
          +
        </button>
      </div>
      <div>
        <img src={rating} className="mx-auto md:mx-0" />
      </div>
      <p className="text-center font-medium md:text-left  text-[16px] md:text-[18px] leading-[24px] md:leading-[32px]">
        {desc}
      </p>
      <p className="text-center font-bold md:text-left  text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] tracking-tight">
        {price}
      </p>
    </div>
  );
};

export default NewArrivalCard;
