import React from "react";

const ProductCard = ({ prod, rating, desc, price }) => {
  return (
    <div className="text-midnight flex flex-col gap-[24px] w-[250px]">
      <img src={prod} />
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

export default ProductCard;
