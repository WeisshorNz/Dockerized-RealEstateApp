import React, { useState } from "react";
import NavBarMetro from "../assets/images/NavBarMetro.png";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-black p-4">
      <div className="container mx-auto flex items-center justify-between lg:justify-center px-4">
        <img
          src={NavBarMetro}
          alt="NavBar Metro"
          className="h-8 w-auto mr-2 lg:mr-0"
        />

        <div className="border-r border-white h-6 mx-6 hidden lg:block"></div>

        <nav className="flex space-x-4 hidden lg:flex font-dm-sans text-base font-normal leading-none tracking-normal text-center">
          <a href="#" className="text-gray-400">
            Home
          </a>
          <a href="#" className="text-gray-400">
            Services
          </a>
          <a href="#" className="text-gray-400">
            Tenants
          </a>
          <a href="#" className="text-gray-400">
            Blog
          </a>
          <a href="#" className="text-gray-400">
            About us
          </a>
          <a href="#" className="text-gray-400">
            Contact
          </a>
        </nav>

        <div className="relative lg:hidden z-20">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col space-y-1"
          >
            <div className="w-6 h-1 bg-gray-400"></div>
            <div className="w-6 h-1 bg-gray-400"></div>
            <div className="w-6 h-1 bg-gray-400"></div>
          </button>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-full right-2/4 w-4/4 bg-black font-dm-sans text-base font-normal leading-none tracking-normal text-center z-20`}
          >
            <a href="#" className="text-gray-400 block py-1">
              Home
            </a>
            <a href="#" className="text-gray-400 block py-1">
              Services
            </a>
            <a href="#" className="text-gray-400 block py-1">
              Tenants
            </a>
            <a href="#" className="text-gray-400 block py-1">
              Blog
            </a>
            <a href="#" className="text-gray-400 block py-1">
              About us
            </a>
            <a href="#" className="text-gray-400 block py-1">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
