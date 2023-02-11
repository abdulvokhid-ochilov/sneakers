import React from "react";
import { Link } from "react-router-dom";
import FeaturedProductsSlider from "./common/FeaturedProductsSlider";
import ProductCard from "./common/ProductCard";
import prod1 from "../assets/prod1.svg";
import prod2 from "../assets/prod2.svg";
import prod3 from "../assets/prod3.svg";
import rating from "../assets/Rating.svg";

const FeaturedProducts = () => {
  return (
    <div className="bg-white max-w-[1440px] mx-auto overflow-x-hidden pb-[144px] px-2">
      <div className="mx-auto max-w-[1126px] py-[64px] md:py-[120px] flex flex-col gap-[50px] md:gap-[90px]">
        <div className="flex flex-row md:justify-between md:items-center ">
          <h2 className="text-midnight text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] font-bold tracking-tight mx-auto md:mx-0">
            Featured Products
          </h2>
          <Link
            to="/"
            className="hidden md:block text-[20px] text-pink leading-[32px] font-semibold text-center md:text-left"
          >
            View all &gt;
          </Link>
        </div>
        <div className="hidden md:block">
          <FeaturedProductsSlider />
        </div>
        <div className="flex flex-col gap-[50px] items-center md:hidden">
          <ProductCard
            price="$120.50"
            desc="Adidas Falcon Shoes for men - 2021 Edition"
            rating={rating}
            prod={prod2}
          />
          <ProductCard
            price="$120.50"
            desc="Adidas Falcon Shoes for men - 2021 Edition"
            rating={rating}
            prod={prod3}
          />
          <ProductCard
            price="$120.50"
            desc="Adidas Falcon Shoes for men - 2021 Edition"
            rating={rating}
            prod={prod2}
          />
          <ProductCard
            price="$120.50"
            desc="Adidas Falcon Shoes for men - 2021 Edition"
            rating={rating}
            prod={prod1}
          />
          <Link
            to="/"
            className="block md:hidden text-[20px] text-pink leading-[32px] font-semibold text-center md:text-left"
          >
            View all &gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
