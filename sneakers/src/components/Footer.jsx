import React from "react";

import logo from "../assets/Logo.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import up from "../assets/up.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("header");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="max-w-[1440px] mx-auto text-gray text-[16px] leading-[24px] bg-white pt-[80px] ">
      <div className="mx-auto max-w-[1126px] px-2 ">
        <div className="flex flex-col items-center md:items-start md:flex-row justify-between  md:py-[56px] border-b border-[#C1C0C0]">
          <div className="flex flex-col gap-6 -mt-3 mb-6 md:mb-0">
            <Link to="/" className="hidden md:block">
              <img src={logo} />
            </Link>
            <p className="w-[232px] text-center md:text-left">
              Our shop is the best choice for buying footwear.
            </p>
            <div className="hidden md:flex flex-row gap-8 mt-[30px]">
              <Link to="/">
                <img src={twitter} />
              </Link>
              <Link to="/">
                <img src={facebook} />
              </Link>
              <Link to="/">
                <img src={instagram} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t md:border-t-0 border-[#C1C0C0] w-full md:w-auto">
            <h3 className=" text-midnight text-[24px] leading-[32px] font-semibold my-6 md:mb-2 md:mt-0 text-center md:text-left">
              Home
            </h3>
            <Link to="/" className="hidden md:block">
              Support Center
            </Link>
            <Link to="/" className="hidden md:block">
              Customer Support
            </Link>
            <Link to="/" className="hidden md:block">
              Copyright
            </Link>
            <Link to="/" className="hidden md:block">
              Popular Campaign
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-midnight text-[24px] leading-[32px] font-semibold  mb-6 md:mb-2">
              Our Information
            </h3>
            <Link to="/" className="hidden md:block">
              Return Policy
            </Link>
            <Link to="/" className="hidden md:block">
              Privacy Policy
            </Link>
            <Link to="/" className="hidden md:block">
              Terms and Conditions
            </Link>
            <Link to="/" className="hidden md:block">
              Site Map
            </Link>
            <Link to="/" className="hidden md:block">
              Store Hours
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-midnight text-[24px] leading-[32px] font-semibold mb-6 md:mb-2">
              My Account
            </h3>
            <Link to="/" className="hidden md:block">
              Press Inquiries
            </Link>
            <Link to="/" className="hidden md:block">
              Social Media Directories
            </Link>
            <Link to="/" className="hidden md:block">
              Permission
            </Link>
            <Link to="/" className="hidden md:block">
              Requests
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between pb-[24px] md:py-[53px] items-center gap-8 md:gap-0">
          <div className="flex md:hidden flex-row gap-8 mt-[30px]">
            <Link to="/">
              <img src={twitter} />
            </Link>
            <Link to="/">
              <img src={facebook} />
            </Link>
            <Link to="/">
              <img src={instagram} />
            </Link>
          </div>
          <p className="grow text-center lg:text-left lg:flex-none">
            &#169; {new Date().getFullYear} Made with love for Brightscout
          </p>
          <Link to="/" onClick={handleClickScroll}>
            <img src={up} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
