import React, { useState, useEffect } from 'react';
import { NavBar } from '../commonComponents/NavBar';
import { FooterS } from '../commonComponents/FooterS';
import ExtendedSearchBar from '../commonComponents/ExtendedSearchBar';
import ImageGrid from '../luisComponents/ImageGrid';
// import testData from "../assets/testData/testListings.json";
import 'fontsource-poppins';



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

  // useEffect(() => {
    
  //   const filteredResults = testData.filter((item) => {
  //     let match = true;
  //     if (searchOptions.Suburb && item.Suburb !== searchOptions.Suburb) {
  //       match = false;
  //     }
  //     if (searchOptions.Type && item.Type !== searchOptions.Type) {
  //       match = false;
  //     }
  //     if (searchOptions.Bathrooms && item.Bathrooms !== searchOptions.Bathrooms) {
  //       match = false;
  //     }
  //      if (searchOptions.Rooms && item.Rooms !== searchOptions.Rooms) {
  //       match = false;
  //     }
  //     if (searchOptions.Carparks && item.Carparks !== searchOptions.Carparks) {
  //       match = false;
  //     }
  //     return match;
  //   });

  //   setFilteredData(filteredResults);
  // }, [searchOptions]);

  //Display all listings from database, no filtering

  //  useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("http://localhost:4001/message", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
          
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         setFilteredData(data); // Update state with fetched data
  //       } else {
  //         console.error("Failed to fetch data from the server");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   fetchData(); 
  // }, [searchOptions]);

   useEffect(() => {
    async function fetchData() {
      try {
        // Create a query string from search options
        const queryParams = new URLSearchParams();

        for (const key in searchOptions) {
          if (searchOptions[key] !== null) {
            queryParams.append(key, searchOptions[key]);
          }
        }

        const response = await fetch(`http://localhost:4001/messages?${queryParams.toString()}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setFilteredData(data); // Update state with fetched data
        } else {
          console.error("Failed to fetch data from the server");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Call the fetchData function when searchOptions change
  }, [searchOptions]);

  return (
    <div>
      {/* <NavBar/> */}
    
      <h1 className= "sm:min-w-0 min-w-3xl font-poppins text-5xl font-black leading-10 tracking-wide text-center my-12 mt-20">
        Search properties to rent
      </h1>

      {/* Pass setSearchOptions as a prop to ExtendedSearchBar */}
      <ExtendedSearchBar setSearchOptions={setSearchOptions} />
      <div className='flex justify-end mr-20'>
        <a href="#" className='mr-20 text-gray-600 underline mt-10 font-dm-sands'>View All</a>
      </div>

      {/* Pass the filteredData as a prop to ImageGrid */}
      <ImageGrid data={filteredData} />

      <div className='flex justify-end mr-20'>
        <a href="#" className='mr-20 text-gray-600 underline mt-4 mb-20 font-dm-sands'>View All</a>
      </div>

      {/* <FooterS/> */}
    </div>
  );
}

export default SearchPage;
