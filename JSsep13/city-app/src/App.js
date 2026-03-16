import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CityInfo from "./components/CityInfo";
import FamousPlace from "./components/FamousPlace";
import OtherPlaces from "./components/OtherPlaces";
import CityPhotos from "./components/CityPhotos";

function App() {
  return (
    <Router>
      <div>
        <h1>My City Website</h1>

        <Routes>
          <Route path="/city" element={<CityInfo />} />
          <Route path="/famous" element={<FamousPlace />} />
          <Route path="/other" element={<OtherPlaces />} />
          <Route path="/photos" element={<CityPhotos />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;