
import React, { useState } from "react";


const ExtendedSearchBar =()=> {
    const [selectedType, setSelectedType] = useState(null);
    const [selectedPet, setSelectedPet] = useState(null);
    const handleTypeSelect = (type) => {
      setSelectedType(type);
    };
    const handlePetSelect = (pet) => {
        setSelectedPet(pet);
    }
   return (
     <div className="flex justify-center items-center ">
       <div className="navbar mt-8 mb-12 w-2/3 flex justify-between shadow-2xl">
         <div className="flex-1 px-2 lg:flex-none">
           <input
             type="text"
             placeholder="Type an Auckland Suburb"
             className="input input-bordered w-full max-w-xs"
           />
         </div>

         {/* <div className="flex justify-end flex-1 px-2">
           <div className="flex items-stretch flex-col"> */}
         <div className="flex items-stretch flex-col justify-center">
           <div className="dropdown dropdown-bottom">
             <label tabIndex={0} className="btn btn-ghost rounded-btn">
               Property Type ▼
             </label>
             <ul
               tabIndex={0}
               className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
             >
               <li>
                 <a onClick={() => handleTypeSelect("House")}>House</a>
               </li>
               <li>
                 <a onClick={() => handleTypeSelect("Unit")}>Unit</a>
               </li>
               <li>
                 <a onClick={() => handleTypeSelect("Town House")}>
                   Town House
                 </a>
               </li>
               <li>
                 <a onClick={() => handleTypeSelect("Apartment")}>Apartment</a>
               </li>
             </ul>
           </div>
           {selectedType && (
             <div className="text-red-600 text-center -mt-3.5">
               {selectedType}
             </div>
           )}
         </div>

         <div className="dropdown dropdown-bottom">
           <label tabIndex={0} className="btn btn-ghost rounded-btn">
             Weekly Rent ▼
           </label>
           <ul
             tabIndex={0}
             className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
           >
             <li>
               <a>$50-$500</a>
             </li>
             <li>
               <a>$501-$750</a>
             </li>
             <li>
               <a>$751-$1000</a>
             </li>
             <li>
               <a>$1001-$2000</a>
             </li>
             <li>
               <a>$2000+</a>
             </li>
           </ul>
         </div>

         <div className="dropdown dropdown-bottom">
           <label tabIndex={0} className="btn btn-ghost rounded-btn">
             Bedrooms ▼
           </label>
           <ul
             tabIndex={0}
             className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
           >
             <li>
               <a>Any</a>
             </li>
             <li>
               <a>1+</a>
             </li>
             <li>
               <a>2+</a>
             </li>
             <li>
               <a>3+</a>
             </li>
             <li>
               <a>4+</a>
             </li>
             <li>
               <a>5+</a>
             </li>
           </ul>
         </div>

         <div className="dropdown dropdown-bottom">
           <label tabIndex={0} className="btn btn-ghost rounded-btn">
             Bathrooms ▼
           </label>
           <ul
             tabIndex={0}
             className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
           >
             <li>
               <a>Any</a>
             </li>
             <li>
               <a>1+</a>
             </li>
             <li>
               <a>2+</a>
             </li>
             <li>
               <a>3+</a>
             </li>
           </ul>
         </div>

         <div className="dropdown dropdown-bottom">
           <label tabIndex={0} className="btn btn-ghost rounded-btn">
             Pets ▼
           </label>
           <ul
             tabIndex={0}
             className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
           >
             <li>
               <a onClick={() => handlePetSelect("Yes")}>Yes</a>
             </li>
             <li>
               <a onClick={() => handlePetSelect("No")}>No</a>
             </li>
           </ul>
           {selectedPet && (
             <div className="text-red-600 text-center -mt-3.5">
               {selectedPet}
             </div>
           )}
         </div>
         <button className="btn btn-error">Search</button>
       </div>
     </div>
   );
};
export default ExtendedSearchBar;
