import React from "react";

const Button = ({ text, color, shadow }) => {
  console.log(shadow);
  return (
    <button
      className={`px-5 md:px-12 py-2 text-[16px] leading-[24px] bg-${color} text-white rounded-[4px] ${shadow}`}
    >
      {text}
    </button>
  );
};

export default Button;
