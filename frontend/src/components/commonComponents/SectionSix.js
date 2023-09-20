import React from "react";
import AwardOne from "../assets/images/AwardOne.png";
import AwardTwo from "../assets/images/AwardTwo.png";
import AwardThree from "../assets/images/AwardThree.png";
import AwardFour from "../assets/images/AwardFour.png";

export const SectionSix = () => {
  return (
    <div className="bg-white flex flex-wrap justify-center items-center space-y-4  md:h-[246px] mx-auto">
      <div className="flex justify-center items-center space-x-4 w-full md:w-auto">
        <img src={AwardOne} alt="Award One" className="inline-block" />
        <img src={AwardTwo} alt="Award Two" className="inline-block" />
      </div>
      <div className="flex justify-center items-center space-x-4 w-full md:w-auto">
        <img src={AwardThree} alt="Award Three" className="inline-block" />
        <img src={AwardFour} alt="Award Four" className="inline-block" />
      </div>
    </div>
  );
};
