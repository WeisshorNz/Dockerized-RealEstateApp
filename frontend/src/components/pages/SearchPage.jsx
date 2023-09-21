import React, { useState, useEffect } from "react";
import { NavBar } from "../commonComponents/NavBar";
import { FooterS } from "../commonComponents/FooterS";
import ExtendedSearchBar from "../commonComponents/ExtendedSearchBar";
import ImageGrid from "../luisComponents/ImageGrid";
import Pagination from "../luisComponents/Pagination";
import { SectionSix } from "../commonComponents/SectionSix";
import "fontsource-poppins";
import { useLocation } from "react-router-dom"; // importing useLocation to bring data from HeroMain

function SearchPage() {
  const [filteredData, setFilteredData] = useState([]);

  // use the useLocation hook to access the data from HeroMain
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [searchOptions, setSearchOptions] = useState({
    Suburb: searchParams.get("Suburb") || null,
    Type: searchParams.get("Type") || null,
    Bathrooms: null,
    Carparks: null,
    Rent: searchParams.get("Rent") || null,
    Rooms: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryString = new URLSearchParams(
          Object.entries(searchOptions).filter(([_, value]) => value !== null)
        ).toString();

        const response = await fetch(
          `http://localhost:4001/listing/filtered?${queryString}`
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          setFilteredData(data);
        } else {
          console.error("Received non-array data:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchOptions]);

  return (
    <div className="bg-white">
      <NavBar />

      <h1 className="sm:min-w-0 min-w-3xl font-poppins text-5xl font-black leading-10 tracking-wide text-center my-12 mt-20 text-black">
        Search properties to rent
      </h1>

      <ExtendedSearchBar setSearchOptions={setSearchOptions} />
      <div className="flex justify-end w-4/5">
        <a
          href="#"
          className="mr-20 text-gray-600 underline mt-10 font-dm-sands"
        >
          View All
        </a>
      </div>

      <ImageGrid data={filteredData} />

      <div className="flex flex-col sm:flex-row justify-between sm:w-2/3 mx-auto sm:ml-80 absolute">
        <div className="flex justify-center items-center sm:ml-72">
          <Pagination />
        </div>
        <div className="flex justify-center items-center mt-4 sm:mt-0 sm:ml-12">
          <a href="#" className="text-gray-600 underline font-dm-sands">
            View All
          </a>
        </div>
      </div>
      <SectionSix />
      <FooterS />
    </div>
  );
}

export default SearchPage;
