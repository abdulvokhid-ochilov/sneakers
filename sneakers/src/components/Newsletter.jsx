import React from "react";
import twitter from "../assets/twitter-blue.svg";
import facebook from "../assets/facebook-blue.svg";
import instagram from "../assets/instagram-blue.svg";
import { Link } from "react-router-dom";
import sneaker from "../assets/sneaker-white.png";
import round from "../assets/round.svg";

const Newsletter = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="max-w-[1280px] mr-auto bg-gradient-to-r from-harbor to-blue rounded-r-[24px]">
        <div className="flex flex-col items-center md:flex-row ml-auto max-w-[1126px] px-2 py-[32px] md:py-[72px] xl:py-[90px] text-white">
          <div className="flex flex-col gap-[32px] md:gap-[72px] xl:gap-[90px] md:w-1/2">
            <h2 className="text-center md:text-left md:max-w-[500px] text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] font-bold tracking-tight">
              Subscribe now to get the latest updates
            </h2>
            <div className="flex flex-col md:max-w-[550px] justify-center">
              <input
                placeholder="Enter you email"
                type="email"
                className="h-1/2 py-3 md:py-7 rounded-t-[24px] text-center placeholder:text-gray placeholder:text-[14px] md:placeholder:text-[18px] placeholder:leading-[17px] md:placeholder:leading-[32px]"
              />
              <button className="text-[14px] md:text-[18px] font-semibold leading-[17px] md:leading-[32px] bg-blue h-1/2 py-3 md:py-7 rounded-b-[24px]">
                SUBSCRIBE
              </button>
            </div>
            <div className="flex xl:hidden flex-row gap-2 justify-center md:justify-start">
              <Link to="/" className="bg-white p-[12px] rounded-full">
                <img src={twitter} className="fill-midnight" />
              </Link>
              <Link to="/" className="bg-white p-[12px] rounded-full">
                <img src={facebook} />
              </Link>
              <Link to="/" className="bg-white p-[12px] rounded-full">
                <img src={instagram} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2 md:pr-[45px]">
            <div className="hidden xl:flex flex-row gap-8 justify-end">
              <Link to="/" className="bg-white p-[12px] rounded-full">
                <img src={twitter} className="fill-midnight" />
              </Link>
              <Link to="/" className="bg-white p-[12px] rounded-full">
                <img src={facebook} />
              </Link>
              <Link to="/" className="bg-white p-[12px] rounded-full">
                <img src={instagram} />
              </Link>
            </div>
            <div className="w-[400px] h-[400px] bg-[url('src/assets/sneaker-white.png')]">
              {/* <img
                src={sneaker}
                className="md:absolute z-10 md:ml-14 md:mt-6 xl:ml-14 xl:mt-2"
              />
              <div className="md:absolute z-1 md:mt-[150px] md:ml-[220px] xl:mt-[100px]">
                <img src={round} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;