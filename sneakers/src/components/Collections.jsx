import React from "react";
import CollectionSlider from "./common/CollectionSlider";

const Collections = () => {
  return (
    <div className="bg-white max-w-[1440px] mx-auto overflow-hidden">
      <div className="mx-auto max-w-[1126px] pl-2 flex flex-col gap-[24px]">
        <h2 className="text-midnight text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] font-bold tracking-tight text-left md:text-center">
          Choose categories
        </h2>
        <p className="text-center text-gray text-[14px] md:text-[18px] leading-[17px] md:leading-[32px] max-w-[639px] mx-auto">
          For explosive events (sprints up to 400 metres, long jump, triple
          jump) the reduction in atmospheric pressure means there is less
          resistance from the atmosphere.
        </p>
        <div>
          <CollectionSlider />
        </div>
      </div>
    </div>
  );
};

export default Collections;
