import React from "react";
import lock from "/assets/lock.svg";
import person from "/assets/person.jpg";

const Card = () => {
  return (
    <div className="absolute top-[180px] lg:top-[400px] w-[289px] rounded-full h-[70px] px-[16px] bg-white flex items-center shadow-1xl">
      <img
        src={person}
        className="object-cover rounded-full w-[45px] h-[45px]"
      />
      <p className="text-[14px] leading-[24px] text-gray ml-2">
        <b className="text-midnight">Joan</b> has just purchased these sneakers
        now.
      </p>
      <div className="bg-white rounded-full w-[56px] h-[32px] -mt-[70px] flex items-center justify-center shadow-2xl">
        <img src={lock} />
      </div>
    </div>
  );
};

export default Card;
