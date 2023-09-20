import React from "react";
import NavBarMetro from "../assets/images/NavBarMetro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

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
        <div className="flex">
          <input
            type="text"
            placeholder="Input your email"
            className="input input-bordered flex-grow mr-2 bg-white"
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
          Social
        </header>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};
