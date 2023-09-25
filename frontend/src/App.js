import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/pages/MainPage";
import SearchPage from "./components/pages/SearchPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBed, faBath, faCar } from "@fortawesome/free-solid-svg-icons";

// Icons for listings cards
library.add(faHeart);
library.add(faBed);
library.add(faBath);
library.add(faCar);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
