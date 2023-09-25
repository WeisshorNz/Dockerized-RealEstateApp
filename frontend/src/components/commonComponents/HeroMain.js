import React, { useState } from "react";
import arrowUp from "../assets/images/Arrow-Up.png";
import arrowDown from "../assets/images/Arrow-Down.png";
import HeroBackground from "../assets/images/HeroBackground.png";
import { useNavigate } from "react-router-dom"; // importing the useNavigate

export const HeroMain = () => {
  const [propertyType, setPropertyType] = useState("");
  const [weeklyRent, setWeeklyRent] = useState("");
  const [suburb, setSuburb] = useState("");
  const [isPropertyDropdownOpen, setPropertyDropdownOpen] = useState(false);
  const [isRentDropdownOpen, setRentDropdownOpen] = useState(false);
  const navigate = useNavigate(); // function to call the useNavigate hook.

  return (
    <div className="hero grid relative min-h-screen">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${HeroBackground})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="text-center z-10 px-4 lg:px-0 space-y-4 lg:space-y-8 place-self-center">
        <h1 className="font-poppins text-4xl lg:text-8xl font-extrabold leading-tight tracking-tighter text-white">
          Getting you into your
        </h1>

        <h2 className="relative flex flex-col items-center text-white font-normal leading-none tracking-dream-tight w-full lg:w-910 font-better-yesterday text-dream-mobile md:text-dream">
          dream rental
          <div className="absolute bottom-[3rem] md:bottom-[4.9rem] lg:h-[2px] w-full lg:w-590 border-b-4 border-white"></div>
        </h2>

        <div className="bg-white inline-flex flex-col lg:flex-row p-4 lg:p-[26px] lg:px-[32px] items-center space-y-4 lg:space-x-4 lg:space-y-0 rounded">
          <input
            type="text"
            placeholder="Type an suburb"
            className="bg-white flex-1 p-2 rounded border border-gray-300 w-full lg:w-64 h-10 lg:h-15"
            value={suburb}
            onChange={(e) => setSuburb(e.target.value)}
          />
          <details
            className="dropdown relative my-0"
            onToggle={(e) => setPropertyDropdownOpen(e.target.open)}
          >
            <summary className="m-1 cursor-pointer font-poppins text-blue-900 text-[18.261px] leading-[33.913px] tracking-[0.046px] font-semibold relative flex items-center justify-between">
              {propertyType || "Property Type"}
              <img
                src={isPropertyDropdownOpen ? arrowUp : arrowDown}
                alt="Dropdown arrow"
                className="w-6 h-6 ml-2"
              />
            </summary>
            <ul className="absolute left-0 mt-2 p-2 shadow menu dropdown-content z-10 bg-white rounded-box w-52 font-poppins text-blue-900 text-[18.261px] leading-[33.913px] tracking-[0.046px] font-semibold">
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
            <summary className="m-1 cursor-pointer font-poppins text-blue-900 text-[18.261px] leading-[33.913px] tracking-[0.046px] font-semibold relative flex items-center justify-between">
              {weeklyRent || "Weekly Rent"}
              <img
                src={isRentDropdownOpen ? arrowUp : arrowDown}
                alt="Dropdown arrow"
                className="w-6 h-6 ml-2"
              />
            </summary>
            <ul className="absolute left-0 mt-2 p-2 shadow menu dropdown-content z-10 bg-white rounded-box w-52 font-poppins text-blue-900 text-[18.261px] leading-[33.913px] tracking-[0.046px] font-semibold">
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
          <button
            className="text-white w-full lg:w-auto flex px-6 lg:px-[40.642px] py-3 lg:py-[15.241px] justify-center items-center space-x-2 lg:space-x-[6.774px] bg-red-700 hover:bg-[#97D9D5] self-center mt-4 lg:mt-0"
            onClick={() => {
              const queryParams = [];
              if (suburb) queryParams.push(`Suburb=${suburb}`);
              if (propertyType) queryParams.push(`Type=${propertyType}`);
              if (weeklyRent)
                // check if weekly rent is selected, split the selected string to extract the price range and add it
                queryParams.push(
                  `Rent=${weeklyRent.split(" ")[0].slice(1)}-${weeklyRent
                    .split(" ")[2]
                    .slice(1)}`
                );
              // final url to send to SearchPage
              navigate(`/search?${queryParams.join("&")}`);
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
