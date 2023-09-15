import React from "react";
import NavBarMetro from "../assets/images/NavBarMetro.png";

const navTextStyle = {
  fontFamily: "DM Sans",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "16px",
  letterSpacing: "0em",
  textAlign: "center",
};

export const NavBar = () => {
  return (
    <div className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-center">
        <img src={NavBarMetro} alt="NavBar Metro" className="h-8 w-auto mr-2" />

        <div className="border-r border-white h-6 mx-6"></div>

        <nav className="flex space-x-4">
          <a href="#" className="text-gray-500" style={navTextStyle}>
            Home
          </a>
          <a href="#" className="text-gray-500" style={navTextStyle}>
            Services
          </a>
          <a href="#" className="text-gray-500" style={navTextStyle}>
            Tenants
          </a>
          <a href="#" className="text-gray-500" style={navTextStyle}>
            Blog
          </a>
          <a href="#" className="text-gray-500" style={navTextStyle}>
            About us
          </a>
          <a href="#" className="text-gray-500" style={navTextStyle}>
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};
