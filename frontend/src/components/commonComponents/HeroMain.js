import React from "react";
import HeroBackground from "../assets/images/HeroBackground.png";

export const HeroMain = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${HeroBackground})`,
      }}
    >
      <div className=" bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md"></div>
      </div>
    </div>
  );
};
