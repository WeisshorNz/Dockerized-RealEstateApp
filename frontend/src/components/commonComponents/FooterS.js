import React from "react";
import NavBarMetro from "../assets/images/NavBarMetro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export const FooterS = () => {
  return (
    <footer className="footer p-10 bg-[#EEE]">
      <nav className="mb-4">
        <img
          src={NavBarMetro}
          alt="NavBar Metro"
          className="mb-4 w-[171px] h-[38.161px] flex-shrink-0"
        />
        <p className="mb-4 text-[#1F2744] font-poppins text-base font-normal leading-[26px] tracking-[0.04px]">
          We have built our reputation as true local area experts
        </p>
        <h4 className="mb-2 text-center text-0B2E29 font-dm-sans text-[20px] font-bold leading-[28px]">
          Newsletter
        </h4>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Input your email"
            className="input input-bordered flex-grow bg-white"
          />
          <button className="w-[88px] h-[42px] flex-shrink-0 bg-black shadow-custom text-[#FEFEFF] font-poppins text-base font-medium leading-[26px] tracking-[0.5px]">
            Send
          </button>
        </div>
      </nav>
      <nav>
        <header className=" text-0B2E29 text-center font-poppins text-[20px] font-bold leading-[28px]">
          Service
        </header>
        <a className="link link-hover text-custom-gray2 text-center font-poppins text-[16px] font-normal leading-[24px]">
          About us
        </a>
        <a className="link link-hover text-custom-gray2 text-center font-poppins text-[16px] font-normal leading-[24px]">
          Careers
        </a>
        <a className="link link-hover text-custom-gray2 text-center font-poppins text-[16px] font-normal leading-[24px]">
          Terms & Conditions
        </a>
        <a className="link link-hover text-custom-gray2 text-center font-poppins text-[16px] font-normal leading-[24px]">
          Privacy & Policy
        </a>
      </nav>
      <nav>
        <header className=" text-0B2E29 text-center font-poppins text-[20px] font-bold leading-[28px]">
          Community
        </header>
        <a className="link link-hover text-custom-gray2 text-center font-poppins text-[16px] font-normal leading-[24px]">
          Find agents
        </a>
        <a className="link link-hover text-custom-gray2 text-center font-poppins text-[16px] font-normal leading-[24px]">
          Lifestyle
        </a>
        <a className="link link-hover text-custom-gray2 text-center font-poppins text-[16px] font-normal leading-[24px]">
          Legal notice
        </a>
      </nav>
      <nav>
        <header className=" text-0B2E29 text-center font-poppins text-[20px] font-bold leading-[28px]">
          Follow us on
        </header>
        <div className="grid grid-flow-col gap-4">
          <a className="">
            <FontAwesomeIcon icon={faInstagram} size="2x" color="black" />
          </a>
          <a>
            <FontAwesomeIcon icon={faYoutube} size="2x" color="black" />
          </a>
          <a>
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className="text-black"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
};
