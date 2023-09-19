import React from "react";
import { NavBar } from "../commonComponents/NavBar";
import { FooterS } from "../commonComponents/FooterS";
import { HeroMain } from "../commonComponents/HeroMain";
import { SectionTwo } from "../commonComponents/SectionTwo";
import { SectionThree } from "../commonComponents/SectionThree";
import { SectionFive } from "../commonComponents/SectionFive";

export const MainPage = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <HeroMain />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      {/* <FooterS /> */}
    </div>
  );
};
