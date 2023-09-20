import React from "react";
// import SearchPage from "./components/pages/SearchPage";
import { MainPage } from "./components/pages/MainPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBed, faBath, faCar } from "@fortawesome/free-solid-svg-icons";

import SearchPage from "./components/pages/SearchPage";
library.add(faHeart);
library.add(faBed);
library.add(faBath);
library.add(faCar);

function App() {
  return (
    <div className="App">
      {/* <SearchPage /> */}
      <MainPage />
    </div>
  );
}

export default App;
