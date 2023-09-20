import React from "react";
import { TestimonialCard } from "./TestimonialCard";

export const SectionFive = () => {
  return (
    <div className="bg-[#F5F5F5] mx-auto py-16">
      <h1 className="text-5A908D font-poppins text-xl font-normal leading-6 text-center mb-4">
        CUSTOMER TESTIMONIALS
      </h1>
      <p className="text-black text-center font-poppins text-5xl font-extrabold leading-14 tracking-tight mt-2">
        What people are saying about us
      </p>
      <div className="mt-12"></div>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-32">
        <div className="flex justify-center mb-4 md:mb-0">
          <TestimonialCard />
        </div>
        <div className="flex justify-center mb-4 md:mb-0">
          <TestimonialCard />
        </div>
        <div className="flex justify-center mb-4 md:mb-0">
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};
