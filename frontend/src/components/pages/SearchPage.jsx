import React from 'react'
import {NavBar} from '../commonComponents/NavBar'
import {FooterS} from '../commonComponents/FooterS'
import ExtendedSearchBar from '../commonComponents/ExtendedSearchBar'
import ImageGrid from '../ImageGrid'
import ResponsiveTest from '../commonComponents/ResponsiveTest'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>

function SearchPage() {
  return (
    <div>
      {/* <NavBar/> */}
    
      <h1 className= "sm:min-w-0 min-w-3xl font-poppins text-5xl font-bold leading-10 tracking-wide text-center my-12">
        Search properties to rent </h1>
        
        {/* <ExtendedSearchBar /> */}
        <ResponsiveTest />

        <ImageGrid />

        


      {/* <FooterS/> */}

    </div>
  );
}

export default SearchPage;
