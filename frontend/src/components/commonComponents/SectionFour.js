import React, { useState, useEffect } from "react";
import ImageGrid from "../luisComponents/ImageGrid";
// import testData from "../assets/testData/testListings.json";
import testData from "../assets/testData/reducedData.json"

export const SectionFour = () => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(testData);
  }, []);

  return (
    <div className="bg-white flex flex-col items-center space-y-4 p-4">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-4xl font-bold leading-relaxed tracking-wider text-black font-poppins">
          Latest Listings
        </h2>
        <div className="space-x-4">
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>

      <div className="flex overflow-x-auto space-x-4">
        {filteredData && filteredData.length > 0 ? (
          <ImageGrid data={filteredData} />
        ) : (
          <p>No listings available.</p>
        )}
      </div>

      <button className="inline-flex justify-center items-center px-12 py-4 bg-black text-white font-poppins text-base font-medium leading-6 tracking-tight hover:bg-gray-800">
        View our listings
      </button>
    </div>
  );
};
