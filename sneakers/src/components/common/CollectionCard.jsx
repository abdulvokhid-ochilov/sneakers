import React from "react";
import { Link } from "react-router-dom";

const CollectionCard = ({ name, img, color, products, product }) => {
  return (
    <div className="flex flex-col items-end">
      <div
        className={`flex flex-col gap-2 py-[48px] px-[32px] w-[312px] md:w-[358px] h-[356px] ${color} bg-grey rounded-[16px] overflow-visible`}
      >
        <div className="flex flex-row justify-center md:justify-between">
          <h2
            className={`md:text-[32px] text-[24px] md:leading-[40px] leading-[32px] font-bold tracking-tight text-center md:text-left`}
          >
            {name} Collection
          </h2>
          <img src={img} className="hidden md:block" />
        </div>
        <p className="text-gray text-[18px] leading-[32px] text-center md:text-left">
          {products} products
        </p>
        <Link
          to="/"
          className="text-[20px] leading-[32px] font-bold underline text-center md:text-left"
        >
          See Collection
        </Link>
      </div>
      <div className="-mt-[200px]">
        <img src={product} className="" />
      </div>
    </div>
  );
};

export default CollectionCard;
