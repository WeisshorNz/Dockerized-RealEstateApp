import React from "react";
import { NavBar } from "../commonComponents/NavBar";
import { FooterS } from "../commonComponents/FooterS";
import { HeroMain } from "../commonComponents/HeroMain";
import { SectionTwo } from "../commonComponents/SectionTwo";
import { SectionThree } from "../commonComponents/SectionThree";
import { SectionFour } from "../commonComponents/SectionFour";
import { SectionFive } from "../commonComponents/SectionFive";
import { SectionSix } from "../commonComponents/SectionSix";

export const MainPage = () => {
  return (
    <div className="bg-white">
      <NavBar />
      <HeroMain />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <FooterS />
    </div>
  );
};
