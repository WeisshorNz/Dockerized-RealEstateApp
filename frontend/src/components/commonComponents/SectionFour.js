import React, { useState, useEffect } from "react";
import ImageGrid from "../luisComponents/ImageGrid";
import testData from "../assets/testData/reducedData.json";

export const SectionFour = () => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(testData);
  }, []);

  return (
    <div className="relative bg-white flex flex-col items-center space-y-4 p-4 h-full">
      <div className="mb-8">
        <h2 className="text-5xl font-bold leading-relaxed tracking-wider text-black font-poppins">
          Latest Listings
        </h2>
      </div>
      <div className="flex overflow-x-auto space-x-4">
        {filteredData && filteredData.length > 0 ? (
          <ImageGrid data={filteredData} />
        ) : (
          <p>No listings available.</p>
        )}
      </div>
      <button className="hidden lg:inline-block absolute bottom-4 right-80 px-12 py-4 bg-black text-white font-poppins text-base font-medium leading-6 tracking-tight hover:bg-gray-800">
        View our listings
      </button>
    </div>
  );
};
