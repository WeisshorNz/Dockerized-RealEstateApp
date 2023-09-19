import React from "react";
import { TestimonialCard } from "./TestimonialCard";

export const SectionFive = () => {
  return (
    <div className="bg-[#F5F5F5] mx-auto py-16">
      {" "}
      <h1 className="text-5A908D font-poppins text-xl font-normal leading-6 text-center mb-4">
        CUSTOMER TESTIMONIALS
      </h1>
      <p className="text-black text-center font-poppins text-5xl font-extrabold leading-14 tracking-tight mt-2">
        What people are saying about us
      </p>
      <div className="mt-12"></div>
      <div className="flex space-x-32 justify-center">
        <TestimonialCard />

        <TestimonialCard />

        <TestimonialCard />
      </div>
    </div>
  );
};
