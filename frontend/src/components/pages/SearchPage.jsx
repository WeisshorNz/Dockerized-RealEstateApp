import React, { useState, useEffect } from "react";
import { NavBar } from "../commonComponents/NavBar";
import { FooterS } from "../commonComponents/FooterS";
import ExtendedSearchBar from "../commonComponents/ExtendedSearchBar";
import ImageGrid from "../luisComponents/ImageGrid";
import Pagination from "../luisComponents/Pagination";
import "fontsource-poppins";

function SearchPage() {
  const [filteredData, setFilteredData] = useState([]);

  const [searchOptions, setSearchOptions] = useState({
    Suburb: null,
    Type: null,
    Bathrooms: null,
    Carparks: null,
    Rent: null,
    Rooms: null,
  });

  useEffect(() => {
    // define an async function within the useEffect
    const fetchData = async () => {
      try {
        // convert the searchOptions object to a query string
        const queryString = new URLSearchParams(
          Object.entries(searchOptions).filter(([_, value]) => value !== null)
        ).toString();

        // fetching data from backend
        const response = await fetch(
          `http://localhost:4001/listing/filtered?${queryString}`
        );
        const data = await response.json();
        // checking if data is received as an array
        if (Array.isArray(data)) {
          setFilteredData(data);
        } else {
          console.error("Received non-array data:", data);
        }
        setFilteredData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the function
    fetchData();
  }, [searchOptions]);

  return (
    <div>
      <NavBar />

      <h1 className="sm:min-w-0 min-w-3xl font-poppins text-5xl font-black leading-10 tracking-wide text-center my-12 mt-20">
        Search properties to rent
      </h1>

      {/* Pass setSearchOptions as a prop to ExtendedSearchBar */}
      <ExtendedSearchBar setSearchOptions={setSearchOptions} />
      <div className="flex justify-end mr-20">
        <a
          href="#"
          className="mr-20 text-gray-600 underline mt-10 font-dm-sands"
        >
          View All
        </a>
      </div>

      {/* Pass the filteredData as a prop to ImageGrid */}
      <ImageGrid data={filteredData} />

      <div className="flex flex-col sm:flex-row justify-between w-full sm:w-2/3 mx-auto sm:ml-80">
        <div className="flex justify-center items-center ml-0 sm:ml-72">
          <Pagination />
        </div>
        <div className="flex justify-center items-center mt-4 sm:mt-0 ml-0 sm:ml-12">
          <a href="#" className="text-gray-600 underline font-dm-sands">
            View All
          </a>
        </div>
      </div>

      <FooterS />
    </div>
  );
}

export default SearchPage;
