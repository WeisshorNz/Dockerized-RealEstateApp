import React, { useState } from "react";

const ExtendedSearchBar = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedRooms, setSelectedRooms] = useState(null);
  const [selectedBathrooms, setSelectedBathroooms] = useState(null);
  const [selectedRent, setSelectedRent] = useState(null);
  const [selectedSuburb,setSelectedSuburb] = useState(null);

  const handleSuburbSelect = (string) =>{
    setSelectedSuburb (string);
  }
  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };
  const handlePetSelect = (pet) => {
    setSelectedPet(pet);
  };
  const handleRoomsSelect = (value) => {
    setSelectedRooms(value);
  }
  const handleBahtroomsSelect = (value) =>{
    setSelectedBathroooms(value);
  }
  const handleRentSelect = (range) =>{
    setSelectedRent (range);
  }

  const handleSearchClick = () => {
    const dbRequest = [];
    if (selectedSuburb !== null) {
      dbRequest.push({ "Suburb": selectedSuburb });
    }
    if (selectedType !== null) {
      dbRequest.push({ Type: selectedType });
    }
    if (selectedBathrooms !== null) {
      dbRequest.push({ Bathrooms: selectedBathrooms });
    }
    if (selectedPet !== null) {
      dbRequest.push({ Pets: selectedPet });
    }
    if (selectedRent !== null) {
      dbRequest.push({ Rent: selectedRent });
    }
    if (selectedRooms !== null) {
      dbRequest.push({ Rooms: selectedRooms });
    }
    console.log(dbRequest);
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="navbar mt-8 mb-12 w-2/3 flex justify-between shadow-2xl">
        <div className="flex-1 px-2 lg:flex-none">
          <input
            type="text"
            placeholder="Type an Auckland Suburb"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => handleSuburbSelect(e.target.value)}
          />
        </div>

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
                <a onClick={() => handleTypeSelect("Town House")}>Town House</a>
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
              <a onClick={() => handleRentSelect("$50-$500")}>$50-$500</a>
            </li>
            <li>
              <a onClick={() => handleRentSelect("$501-$750")}>$501-$750</a>
            </li>
            <li>
              <a onClick={() => handleRentSelect("$751-$1000")}>$751-$1000</a>
            </li>
            <li>
              <a onClick={() => handleRentSelect("$1001-$2000")}>$1001-$2000</a>
            </li>
            <li>
              <a onClick={() => handleRentSelect("$2000+")}>$2000+</a>
            </li>
          </ul>
          {selectedRent && (
            <div className="text-red-600 text-center -mt-3.5">
              {selectedRent}
            </div>
          )}
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
              <a onClick={() => handleRoomsSelect("Any")}>Any</a>
            </li>
            <li>
              <a onClick={() => handleRoomsSelect("1+")}>1+</a>
            </li>
            <li>
              <a onClick={() => handleRoomsSelect("2+")}>2+</a>
            </li>
            <li>
              <a onClick={() => handleRoomsSelect("3+")}>3+</a>
            </li>
            <li>
              <a onClick={() => handleRoomsSelect("4+")}>4+</a>
            </li>
            <li>
              <a onClick={() => handleRoomsSelect("5+")}>5+</a>
            </li>
          </ul>
          {selectedRooms && (
            <div className="text-red-600 text-center -mt-3.5">
              {selectedRooms}
            </div>
          )}
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
              <a onClick={() => handleBahtroomsSelect("Any")}>Any</a>
            </li>
            <li>
              <a onClick={() => handleBahtroomsSelect("1+")}>1+</a>
            </li>
            <li>
              <a onClick={() => handleBahtroomsSelect("2+")}>2+</a>
            </li>
            <li>
              <a onClick={() => handleBahtroomsSelect("3+")}>3+</a>
            </li>
          </ul>
          {selectedBathrooms && (
            <div className="text-red-600 text-center -mt-3.5">
              {selectedBathrooms}
            </div>
          )}
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
        <button
          className="btn btn-error bg-red-600 text-white"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default ExtendedSearchBar;
