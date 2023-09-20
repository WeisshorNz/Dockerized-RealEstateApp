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

export const SectionTwo = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="relative w-full lg:w-[609px] h-[300px] lg:h-[475px]">
          <img
            src={Hero2Image}
            alt="Hero 2"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="absolute bottom left lg:bottom-[320px] lg:left-12 bg-[#FEFEFF] shadow-customBox w-[144px] sm:w-[174px] h-[196px] sm:h-[236px] flex flex-col items-center justify-center p-1 sm:p-2 lg:p-4"
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
            <div className="flex space-x-1 sm:space-x-2">{/* stars */}</div>
            <span className="font-poppins text-[#A6A6A6] font-medium text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] tracking-tight mt-1 sm:mt-2">
              Trusted on
            </span>
            <span className="font-poppins text-black font-bold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] tracking-tight mt-1 sm:mt-2">
              500+ reviews
            </span>
          </div>

          <div className="absolute bottom-0 right-0 bg-white flex items-center justify-center p-4 lg:p-[12px] space-x-4 lg:space-x-8 w-full lg:w-auto h-[25%] lg:h-[82px]">
            <div
              className="flex items-center space-x-8 w-full justify-center"
              style={{ width: "458px", height: "58px" }}
            >
              <div className="flex items-center space-x-4">
                <span className="font-poppins text-black font-bold text-[50px] leading-[58px] tracking-tight">
                  30+
                </span>
                <div className="flex flex-col space-y-0 w-full lg:w-auto">
                  <span className="font-poppins text-[#A6A6A6] font-medium text-[18px] leading-[26px] tracking-tighter">
                    Years
                  </span>
                  <span className="font-poppins text-[#A6A6A6] font-medium text-[18px] leading-[26px] tracking-tighter">
                    of success
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="font-poppins text-black font-bold text-[50px] leading-[58px] tracking-tight">
                  53
                </span>
                <div className="flex flex-col">
                  <span className="font-poppins text-[#A6A6A6] font-medium text-[18px] leading-[26px] tracking-tighter">
                    Properties
                  </span>
                  <span className="font-poppins text-[#A6A6A6] font-medium text-[18px] leading-[26px] tracking-tighter">
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
