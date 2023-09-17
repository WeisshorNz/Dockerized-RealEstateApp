import React, { useState } from "react";
import arrowUp from "../assets/images/Arrow-Up.png";
import arrowDown from "../assets/images/Arrow-Down.png";
import HeroBackground from "../assets/images/HeroBackground.png";

export const HeroMain = () => {
  const [propertyType, setPropertyType] = useState("");
  const [weeklyRent, setWeeklyRent] = useState("");
  const [isPropertyDropdownOpen, setPropertyDropdownOpen] = useState(false);
  const [isRentDropdownOpen, setRentDropdownOpen] = useState(false);

  return (
    <div
      className="hero min-h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: `url(${HeroBackground})` }}
    >
      <div className="text-center space-y-8">
        <h1 className="font-poppins text-8xl font-bold leading-tight tracking-tighter text-white">
          Getting you into your
        </h1>

        <h2 className="relative flex flex-col items-center text-white font-normal leading-none tracking-dream-tight text-dream w-910 font-better-yesterday">
          dream rental
          <div className="absolute bottom-[4.9rem] h-[2px] w-590 border-b-4 border-white"></div>
        </h2>

        <div className="bg-white inline-flex p-[26px] px-[32px] items-center space-x-4 rounded">
          <input
            type="text"
            placeholder="Type an suburb"
            className="bg-white flex-1 p-2 rounded border border-gray-300 w-64 h-15 flex-shrink-0"
          />

          <details
            className="dropdown relative my-0"
            onToggle={(e) => setPropertyDropdownOpen(e.target.open)}
          >
            <summary className="m-1 cursor-pointer font-poppins text-blue-900 text-[18.261px] leading-[33.913px] tracking-[0.046px] font-normal relative flex items-center justify-between">
              {propertyType || "Property Type"}
              <img
                src={isPropertyDropdownOpen ? arrowUp : arrowDown}
                alt="Dropdown arrow"
                className="w-6 h-4 ml-2"
              />
            </summary>
            <ul className="absolute left-0 mt-2 p-2 shadow menu dropdown-content z-10 bg-white rounded-box w-52 font-poppins text-blue-900 text-[18.261px] leading-[33.913px] tracking-[0.046px] font-normal">
              {["House", "Unit", "Apartment", "Town House"].map((item) => (
                <li key={item} className="hover:bg-[#97D9D5]">
                  <a
                    onClick={() => setPropertyType(item)}
                    className="text-blue-900 hover:text-blue-900"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </details>

          <details
            className="dropdown relative my-0"
            onToggle={(e) => setRentDropdownOpen(e.target.open)}
          >
            <summary className="m-1 cursor-pointer font-poppins text-blue-900 text-[18.261px] leading-[33.913px] tracking-[0.046px] font-normal relative flex items-center justify-between">
              {weeklyRent || "Weekly Rent"}
              <img
                src={isRentDropdownOpen ? arrowUp : arrowDown}
                alt="Dropdown arrow"
                className="w-6 h-4 ml-2"
              />
            </summary>
            <ul className="absolute left-0 mt-2 p-2 shadow menu dropdown-content z-10 bg-white rounded-box w-52 font-poppins text-blue-900 text-[18.261px] leading-[33.913px] tracking-[0.046px] font-normal">
              {[
                "$50 - $500",
                "$500 - $750",
                "$750 - $1000",
                "$1000 - $2000",
                "$2000+",
              ].map((item) => (
                <li key={item} className="hover:bg-[#97D9D5]">
                  <a
                    onClick={() => setWeeklyRent(item)}
                    className="text-blue-900 hover:text-blue-900"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </details>

          <button className="text-white flex px-[40.642px] py-[15.241px] justify-center items-center space-x-[6.774px] bg-red-700 hover:bg-[#97D9D5] self-center">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
