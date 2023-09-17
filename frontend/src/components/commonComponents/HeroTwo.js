import React from "react";
import Hero2Image from "../assets/images/Hero2Image.png";

export const HeroTwo = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex items-center space-x-12">
        <img
          src={Hero2Image}
          alt="Hero 2"
          className="max-w-[740px] h-[493.394px] rounded-lg shadow-2xl"
        />

        <div>
          <h2 className="text-4xl font-bold mb-4">Who we are</h2>
          <p className="mb-6">We make it easy for tenants and landlords</p>
          <p className="mb-8">
            We have built our reputation as true local area experts. We have
            gained more knowledge about buyer interests, our neighborhood and
            the market than any other brand because we live locally and work for
            local people.
          </p>
          <div className="flex space-x-4">
            <button className="btn btn-primary">For tenants</button>
            <button className="btn btn-secondary">For Landlords</button>
          </div>
        </div>
      </div>
    </div>
  );
};
