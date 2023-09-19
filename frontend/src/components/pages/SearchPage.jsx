import React, { useState, useEffect } from 'react';
import { NavBar } from '../commonComponents/NavBar';
import { FooterS } from '../commonComponents/FooterS';
import ExtendedSearchBar from '../commonComponents/ExtendedSearchBar';
import ImageGrid from '../luisComponents/ImageGrid';
import testData from "../assets/testData/testListings.json";
import 'fontsource-poppins';



function SearchPage() {
  const [filteredData, setFilteredData] = useState([]);
  
  const [searchOptions, setSearchOptions] = useState({
    Suburb: null,
    Type: null,
    Bathrooms: null,
    Pets: null,
    Rent: null,
    Rooms: null,
  });

  useEffect(() => {
    
    const filteredResults = testData.filter((item) => {
      let match = true;
      if (searchOptions.Suburb && item.Suburb !== searchOptions.Suburb) {
        match = false;
      }
      if (searchOptions.Type && item.Type !== searchOptions.Type) {
        match = false;
      }
      if (searchOptions.Bathrooms && item.Bathrooms !== searchOptions.Bathrooms) {
        match = false;
      }
       if (searchOptions.Rooms && item.Rooms !== searchOptions.Rooms) {
        match = false;
      }
      if (searchOptions.Pets && item.Pets !== searchOptions.Pets) {
        match = false;
      }
      return match;
    });

    setFilteredData(filteredResults);
  }, [searchOptions]);

  return (
    <div>
      <NavBar/>
    
      <h1 className= "sm:min-w-0 min-w-3xl font-poppins text-5xl font-bold leading-10 tracking-wide text-center my-12">
        Search properties to rent
      </h1>

      {/* Pass setSearchOptions as a prop to ExtendedSearchBar */}
      <ExtendedSearchBar setSearchOptions={setSearchOptions} />
      {/* <ResponsiveTest /> */}

      {/* Pass the filteredData as a prop to ImageGrid */}
      <ImageGrid data={filteredData} />

      <FooterS/>
    </div>
  );
}

export default SearchPage;
