import React from "react";

export const SectionThree = () => {
  return (
    <div className="bg-[#F5F5F5] mx-auto py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h1 className="text-center text-xl sm:text-2xl md:text-[24px] mb-6 sm:mb-8 md:mb-12 font-semibold text-[#5A908D] leading-tight sm:leading-snug md:leading-[32px] tracking-wider">
        WHAT WE DO
      </h1>
      <h2 className="font-poppins text-center text-3xl sm:text-2xl md:text-4x1 lg:text-[56px] text-0B2E29 font-bold leading-tight sm:leading-snug md:leading-[66px] tracking-wider w-full sm:w-3/4 lg:w-1/2 xl:w-[808px] mx-auto mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        Giving you peace of mind
      </h2>
      <div className="flex flex-col sm:flex-row gap-8 w-full sm:w-3/4 lg:w-2/3 xl:w-[1118px] justify-between items-center mx-auto">
        {/* First Section */}
        <div className="relative flex flex-col items-center md:items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="42.75"
            viewBox="0 0 46 44"
            fill="none"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-0"
          >
            <path
              fill-rule="evenodd"
              d="M31.662 0.626336C33.0818 0.626336 34.4993 0.826586 35.847 1.27884C44.1518 3.97884 47.1443 13.0913 44.6445 21.0563C43.227 25.1266 40.9095 28.8414 37.8743 31.8766C33.5295 36.0841 28.7618 39.8191 23.6295 43.0366L23.067 43.3764L22.482 43.0141C17.3318 39.8191 12.537 36.0841 8.1518 31.8541C5.1368 28.8189 2.81705 25.1266 1.37705 21.0563C-1.16545 13.0913 1.82705 3.97884 10.2218 1.23159C10.8743 1.00659 11.547 0.849086 12.222 0.761336H12.492C13.1243 0.669086 13.752 0.626336 14.382 0.626336H14.6295C16.047 0.669086 17.4195 0.916586 18.7493 1.36884H18.882C18.972 1.41159 19.0395 1.45884 19.0845 1.50159C19.5818 1.66134 20.052 1.84134 20.502 2.08884L21.357 2.47134C21.5636 2.58152 21.7955 2.74989 21.996 2.89539C22.1229 2.98759 22.2373 3.0706 22.3245 3.12384C22.3613 3.1455 22.3986 3.16728 22.4362 3.18924C22.6291 3.30186 22.8301 3.41917 22.9995 3.54909C25.4993 1.63884 28.5345 0.603836 31.662 0.626336ZM37.6471 16.8263C38.5696 16.8016 39.357 16.0613 39.4245 15.1141V14.8463C39.492 11.6941 37.5818 8.83884 34.6771 7.73634C33.7546 7.41909 32.7421 7.91634 32.4046 8.86134C32.0896 9.80634 32.5846 10.8413 33.5296 11.1766C34.9718 11.7166 35.9371 13.1363 35.9371 14.7091V14.7788C35.8943 15.2941 36.0496 15.7913 36.3646 16.1738C36.6796 16.5563 37.1521 16.7791 37.6471 16.8263Z"
              fill="#5A908D"
            />
          </svg>
          <h3 className="text-center md:text-left text-0B2E29 font-poppins text-3xl font-extrabold leading-relaxed tracking-wide mb-4 mt-12">
            Property Appraisal
          </h3>
          <p className="text-center md:text-left text-73788C font-poppins text-base font-semibold leading-6 tracking-wide">
            We conduct a thorough appraisal of <br />
            your property based on the current <br />
            rental market to determine its rental <br />
            value.
          </p>
        </div>
        {/* Second Section */}
        <div className="relative flex flex-col items-center md:items-start md:mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38.25"
            height="45"
            viewBox="0 0 40 46"
            fill="none"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 md:left-10 md:-translate-x-0"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.3882 45.3057C19.6374 45.4359 19.916 45.5021 20.1946 45.4999C20.4732 45.4977 20.7496 45.4293 21.001 45.2969L29.0287 41.0055C31.3052 39.792 33.0879 38.4351 34.4787 36.8554C37.5027 33.4135 39.154 29.0206 39.1246 24.4909L39.0294 9.54946C39.0204 7.8285 37.89 6.29287 36.2184 5.73466L21.2842 0.724019C20.3849 0.419542 19.3995 0.426161 18.5161 0.739464L3.63855 5.92882C1.97592 6.5091 0.865994 8.05575 0.875055 9.77892L0.970192 24.7094C0.999639 29.2456 2.70757 33.6186 5.78139 37.0253C7.18579 38.583 8.98433 39.92 11.2857 41.1137L19.3882 45.3057ZM17.263 27.7451C17.5982 28.0672 18.0331 28.2261 18.4681 28.2217C18.903 28.2195 19.3356 28.0562 19.6663 27.7297L28.4393 19.0807C29.0985 18.4298 29.0917 17.384 28.4257 16.742C27.7575 16.0999 26.6815 16.1043 26.0224 16.7552L18.4431 24.226L15.3399 21.243C14.6717 20.6009 13.598 20.6075 12.9365 21.2584C12.2774 21.9093 12.2842 22.9551 12.9524 23.5971L17.263 27.7451Z"
              fill="#5A908D"
            />
          </svg>
          <div className="pl-10">
            <h3 className="text-center md:text-left text-0B2E29 font-poppins text-3xl font-extrabold leading-relaxed tracking-wide mb-4 mt-12">
              Extra Security
            </h3>
            <p className="text-center md:text-left text-73788C font-poppins text-base font-semibold leading-6 tracking-wide">
              Switching to Metro NZ Property <br />
              Management is easy. We will collect <br />
              the required information from you and <br />
              take care of the rest
            </p>
          </div>
        </div>
        {/* Third Section */}
        <div className="relative flex flex-col items-center md:items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 46 46"
            fill="none"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 md:left-0 md:-translate-x-0"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.7343 0.971741C24.0936 0.649225 24.5689 0.48017 25.0554 0.501856C35.3398 0.809723 43.9348 8.27555 45.4926 18.2539C45.5024 18.3135 45.5024 18.3743 45.4926 18.4338C45.5261 18.906 45.3665 19.3718 45.0491 19.7282C44.7318 20.0846 44.2827 20.3022 43.8013 20.333L26.5225 21.4725C25.9511 21.5231 25.3844 21.3351 24.9616 20.9546C24.5389 20.574 24.2992 20.0363 24.3015 19.4734L23.1401 2.50096V2.22109C23.1612 1.74375 23.375 1.29426 23.7343 0.971741ZM22.5492 25.9106L37.5256 24.951L37.6275 24.991C38.2706 25.0015 38.8831 25.2623 39.3302 25.7159C39.7773 26.1696 40.0223 26.7789 40.0114 27.4099C39.4213 36.0096 33.1164 43.195 24.5362 45.0461C15.9561 46.8972 7.16039 42.9698 2.94751 35.4063C1.70874 33.2279 0.925931 30.8287 0.645021 28.3495C0.536071 27.6148 0.488368 26.8727 0.502389 26.1305C0.530785 16.986 7.04137 9.09297 16.1512 7.15895C17.254 6.95253 18.3596 7.50315 18.8408 8.49835C18.9606 8.67894 19.0564 8.87375 19.126 9.07809C19.2968 11.7141 19.474 14.3252 19.6503 16.9253C19.7896 18.9787 19.9285 21.0253 20.0633 23.0718C20.0564 23.5539 20.1322 24.0338 20.2875 24.4912C20.6531 25.3912 21.5631 25.9623 22.5492 25.9106Z"
              fill="#5A908D"
            />
          </svg>
          <div className="pl-1">
            <h3 className="text-center md:text-left text-0B2E29 font-poppins text-3xl font-extrabold leading-relaxed tracking-wide mb-4 mt-12">
              Efficient
            </h3>
            <p className="text-center md:text-left text-73788C font-poppins text-base font-semibold leading-6 tracking-wide">
              Schedule visits to multiple properties at <br />
              once in one day without having to call <br />
              them one by one. Check everything <br />
              and find the best properties for
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
