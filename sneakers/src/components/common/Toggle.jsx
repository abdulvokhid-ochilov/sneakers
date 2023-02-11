import { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-2 md:translate-x-5";
  return (
    <>
      <div
        className="md:w-[68px] md:h-[40px] w-[40px] h-[25px] flex items-center bg-[#8AA8F8] rounded-full p-1 cursor-pointer mx-[16px]"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div
          className={
            "bg-grey md:w-[35px] md:h-[35px] h-[22px] w-[22px] rounded-full transform duration-300 ease-in-out " +
            (toggle ? null : toggleClass)
          }
        ></div>
      </div>
    </>
  );
}

export default Toggle;
