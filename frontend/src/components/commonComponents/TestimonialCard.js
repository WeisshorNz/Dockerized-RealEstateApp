import React from "react";

const SvgIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="42"
    height="34"
    viewBox="0 0 42 34"
    fill="none"
    style={{ position: "absolute", top: "8px", left: "23px" }}
  >
    <path
      opacity="0.2"
      d="M0 34V22.625C0 18.375 0.752239 14.4583 2.25672 10.875C3.76119 7.29167 6.31045 3.66667 9.90448 0L16.4239 5.125C14.3343 7.20834 12.7463 9.16667 11.6597 11C10.5731 12.8333 9.86269 14.7083 9.52836 16.625H17.5522V34H0ZM24.4478 34V22.625C24.4478 18.375 25.2 14.4583 26.7045 10.875C28.209 7.29167 30.7582 3.66667 34.3522 0L40.8716 5.125C38.7821 7.20834 37.194 9.16667 36.1075 11C35.0209 12.8333 34.3104 14.7083 33.9761 16.625H42V34H24.4478Z"
      fill="#CB1212"
    />
  </svg>
);

export const TestimonialCard = () => {
  return (
    <div className="relative w-[304px] h-[275px] p-6 border border-gray-300 bg-white flex flex-col justify-center">
      <div className="flex items-start">
        <SvgIcon className="w-10 h-8 fill-[#CB1212] opacity-20" />
      </div>

      <h2 className="text-0B2E29  text-base font-bold leading-7 mt-5">
        It proved to be exactly the kind of home we wanted.
      </h2>

      <p className="text-black font-poppins text-sm font-semibold leading-6 tracking-tighter mt-5">
        We wish to express our thanks for your hard work in finding us a
        temporary home, which proved to be exactly what we wanted.
      </p>

      <p className="text-5A908D  text-sm font-semibold leading-[26px] tracking-wider mt-5">
        Jaydon Aminoff
      </p>
    </div>
  );
};
