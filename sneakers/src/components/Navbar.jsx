import { Disclosure } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/Logo.svg";
import Bars from "../assets/hamburger-icon.svg";
import { NavLink, Link } from "react-router-dom";
import cart from "../assets/shopping-bag.svg";
import profile from "../assets/user.svg";
import search from "../assets/search.svg";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Footwear", href: "#footwear", current: true },
  { name: "About us", href: "#about", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Sale", href: "#sale", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [sectionId, setSectionId] = useState("#footwear");

  return (
    <Disclosure as="nav" id="header" className="bg-grey max-w-[1440px] mx-auto">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[1126px] px-2 ">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo */}
              <div>
                <img src={Logo} alt="Logo" />
              </div>

              {/* Navigation Links */}
              <div className="hidden lg:flex flex-row gap-12 text-[18px] leading-[32px]">
                {navigation.map((nav, index) => (
                  <NavLink
                    key={index}
                    to={nav.href}
                    className="flex flex-col justify-center items-center text-midnight"
                    onClick={() => setSectionId(nav.href)}
                  >
                    <p className={`${sectionId === nav.href && "text-pink"}`}>
                      {nav.name}
                    </p>
                    {sectionId === nav.href && (
                      <span className="absolute mt-8 h-[8px] w-[8px] bg-pink rounded-full"></span>
                    )}
                  </NavLink>
                ))}
              </div>

              {/* Search, Profile, Cart */}
              <div className="hidden lg:flex flex-row gap-12">
                <Link to="#">
                  <img src={search} />
                </Link>
                <Link to="#">
                  <img src={profile} />
                </Link>
                <Link to="#" className="">
                  <img src={cart} />
                  <div className="absolute -mt-2 ml-2 flex justify-center items-center w-[16px] h-[16px] bg-pink rounded-full text-[10px] text-[#fff]">
                    <span>3</span>
                  </div>
                </Link>
              </div>

              {/* Burger menu */}
              <div className="flex items-center lg:hidden gap-6">
                {/* Profile, Cart in mobile version*/}
                <div className="flex sm:hidden flex-row gap-8">
                  <Link to="#">
                    <img src={profile} />
                  </Link>
                  <Link to="#" className="">
                    <img src={cart} />
                    <div className="absolute -mt-2 ml-2 flex justify-center items-center w-[16px] h-[16px] bg-pink rounded-full text-[10px] text-[#fff]">
                      <span>3</span>
                    </div>
                  </Link>
                </div>

                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <img src={Bars} aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* the panel that appears when the navbar*/}
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
