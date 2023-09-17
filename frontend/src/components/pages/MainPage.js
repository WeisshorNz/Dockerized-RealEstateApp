import React from "react";
import { NavBar } from "../commonComponents/NavBar";
import { FooterS } from "../commonComponents/FooterS";
import { HeroMain } from "../commonComponents/HeroMain";
import { HeroTwo } from "../commonComponents/HeroTwo";

export const MainPage = () => {
  return (
    <div>
      <NavBar />
      <HeroMain />
      <HeroTwo />
      <FooterS />
    </div>
  );
};
