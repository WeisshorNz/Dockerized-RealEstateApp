import React from "react";
import { NavBar } from "../commonComponents/NavBar";
import { FooterS } from "../commonComponents/FooterS";
import { HeroMain } from "../commonComponents/HeroMain";

export const MainPage = () => {
  return (
    <div>
      <NavBar />
      <HeroMain />
      <FooterS />
    </div>
  );
};
