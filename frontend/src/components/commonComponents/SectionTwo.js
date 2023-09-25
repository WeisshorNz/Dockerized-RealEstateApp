import React from "react";
import Hero2Image from "../assets/images/Hero2Image.png";

const TickIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.22699 0.708008H19.787C24.307 0.708008 27.3337 3.87198 27.3337 8.57805V19.4406C27.3337 24.132 24.307 27.296 19.787 27.296H8.22699C3.70699 27.296 0.666992 24.132 0.666992 19.4406V8.57805C0.666992 3.87198 3.70699 0.708008 8.22699 0.708008ZM13.2403 17.9769L19.5737 11.6623C20.027 11.2103 20.027 10.4791 19.5737 10.0138C19.1203 9.56181 18.3737 9.56181 17.9203 10.0138L12.4137 15.5042L10.0803 13.1778C9.627 12.7258 8.88033 12.7258 8.42699 13.1778C7.97366 13.6298 7.97366 14.3609 8.42699 14.8262L11.6003 17.9769C11.827 18.2029 12.1203 18.3093 12.4137 18.3093C12.7203 18.3093 13.0137 18.2029 13.2403 17.9769Z"
      fill="#5A908D"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <g clipPath="url(#clip0_409_884)">
      <path
        d="M13.1701 15.7502C13.0501 15.7506 12.9318 15.7223 12.8251 15.6677L9.00007 13.6652L5.17507 15.6677C5.05086 15.733 4.91082 15.7621 4.77087 15.7518C4.63092 15.7415 4.49667 15.6921 4.38339 15.6093C4.2701 15.5265 4.18232 15.4135 4.13003 15.2833C4.07773 15.1531 4.06302 15.0108 4.08757 14.8727L4.83757 10.6502L1.74757 7.65015C1.65116 7.55395 1.58277 7.4333 1.54974 7.30117C1.5167 7.16904 1.52027 7.03041 1.56007 6.90015C1.60354 6.76686 1.6835 6.64842 1.79088 6.55827C1.89826 6.46812 2.02876 6.40988 2.16757 6.39015L6.44257 5.76765L8.32507 1.92015C8.38648 1.79335 8.48237 1.68641 8.60175 1.61158C8.72113 1.53676 8.85917 1.49707 9.00007 1.49707C9.14096 1.49707 9.279 1.53676 9.39838 1.61158C9.51776 1.68641 9.61365 1.79335 9.67507 1.92015L11.5801 5.76015L15.8551 6.38265C15.9939 6.40238 16.1244 6.46063 16.2318 6.55077C16.3391 6.64092 16.4191 6.75936 16.4626 6.89265C16.5024 7.02291 16.5059 7.16154 16.4729 7.29367C16.4399 7.4258 16.3715 7.54645 16.2751 7.64265L13.1851 10.6427L13.9351 14.8652C13.9618 15.0058 13.9478 15.1511 13.8947 15.284C13.8415 15.4169 13.7514 15.5318 13.6351 15.6152C13.4993 15.7103 13.3357 15.7578 13.1701 15.7502Z"
        fill="black"
      />
    </g>
  </svg>
);

export const SectionTwo = () => {
  return (
    <div className="mt-3 md:mt-0 min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="w-full lg:w-[609px] h-auto lg:h-[475px] relative">
          <img
            src={Hero2Image}
            alt="Hero 2"
            className="w-full h-full object-cover"
          />

          <div
            className="absolute top-0 left lg:bottom-[320px] lg:left-12 bg-[#FEFEFF] shadow-customBox w-[144px] sm:w-[174px] h-[196px] sm:h-[236px] flex flex-col items-center justify-center p-1 sm:p-2 lg:p-4"
            style={{
              boxShadow: "20px 20px 40px 0px rgba(146, 106, 120, 0.16)",
            }}
          >
            <div className="absolute top-[-11px] sm:top-[-13px] left-0 right-0 flex justify-center">
              <TickIcon />
            </div>
            <span
              className="font-poppins text-black font-semibold text-[60px] sm:text-[72px] leading-[68px] sm:leading-[80px] tracking-tight"
              style={{ letterSpacing: "0.18px" }}
            >
              4.8
            </span>
            <div className="flex space-x-1 sm:space-x-2">
              {[...Array(5)].map((_, idx) => (
                <StarIcon key={idx} />
              ))}
            </div>
            <span className="font-poppins text-[#A6A6A6] font-medium text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] tracking-tight mt-1 sm:mt-2">
              Trusted on
            </span>
            <span className="font-poppins text-black font-bold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] tracking-tight mt-1 sm:mt-2">
              500+ reviews
            </span>
          </div>

          <div className="bg-black text-white md:bg-white md:text-black flex flex-col sm:flex-row items-center justify-center p-4 lg:absolute lg:bottom-0 lg:right-0 lg:p-[12px] space-y-4 sm:space-x-4 lg:space-x-8 w-full lg:w-auto lg:h-[82px] lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 w-full lg:w-[458px] text-center justify-center">
              <div className="flex flex-col items-center space-y-4 w-full sm:w-auto lg:flex-row lg:space-x-4 lg:space-y-0">
                <span className="font-poppins font-bold text-[50px] leading-[58px] tracking-tight">
                  30+
                </span>
                <div className="flex flex-col space-y-1">
                  <span className="font-poppins text-[#A6A6A6] md:text-black font-medium text-[18px] leading-[26px] tracking-tighter">
                    Years
                  </span>
                  <span className="font-poppins text-[#A6A6A6] md:text-black font-medium text-[18px] leading-[26px] tracking-tighter">
                    of success
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 w-full sm:w-auto lg:flex-row lg:space-x-4 lg:space-y-0">
                <span className="font-poppins font-bold text-[50px] leading-[58px] tracking-tight">
                  53
                </span>
                <div className="flex flex-col space-y-1">
                  <span className="font-poppins text-[#A6A6A6] md:text-black font-medium text-[18px] leading-[26px] tracking-tighter">
                    Properties
                  </span>
                  <span className="font-poppins text-[#A6A6A6] md:text-black font-medium text-[18px] leading-[26px] tracking-tighter">
                    available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 w-full lg:w-auto">
          <h2 className="font-poppins text-[#5A908D] font-bold text-lg leading-[26px] tracking-wide">
            WHO WE ARE
          </h2>
          <h2 className="font-poppins w-full lg:w-[486px] text-black font-extrabold text-[48px] leading-[48px] tracking-wide">
            We make it easy for tenants and landlords
          </h2>
          <p className="font-poppins w-full sm:w-3/4 lg:w-[410px] text-[#73788C] font-medium text-[16px] leading-[26px] tracking-tighter">
            We have built our reputation as true local area experts. We have
            gained more knowledge about buyer interests, our neighborhood, and
            the market than any other brand because we live locally and work for
            local people.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              className="inline-flex justify-center items-center bg-black text-white font-poppins text-base font-semibold w-full sm:w-auto px-[48px] py-[18px] rounded"
              style={{ lineHeight: "24px", letterSpacing: "0.04px" }}
            >
              For Tenants
            </button>
            <button
              className="inline-flex justify-center items-center border border-black text-black font-poppins text-base font-semibold w-full sm:w-auto px-[48px] py-[18px] rounded"
              style={{ lineHeight: "24px", letterSpacing: "0.04px" }}
            >
              For Landlords
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
