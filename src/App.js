// import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/pages/home/Home'
import Join from './views/pages/join us/Join'
import About from './views/pages/about us/About'
import Residentiel from './views/pages/properties/residentiel/Residentiel'
import Commercial from './views/pages/properties/commercial/Commercial'
import Industriel from './views/pages/properties/industriel/Industriel'
import Terrain from './views/pages/properties/terrain/Terrain'
import ForResidentiel from './views/pages/properties/residentiel/ForResidentiel';
import ForCommercial from './views/pages/properties/commercial/ForCommercial';
import ForIndustriel from './views/pages/properties/industriel/ForIndustriel';
import ForTerrain from './views/pages/properties/terrain/ForTerrain';
import ScrollToTop from './scrollToTop/ScrollToTop';
import Promenade from './views/pages/promenade/Promenade';
import ForPromenade from './views/pages/promenade/ForPromenade';


function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/join_us" element={<Join />} />
          <Route path="/residential" element={<Residentiel />} />
          <Route path="/ForResidential" element={<ForResidentiel />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/ForCommercial" element={<ForCommercial />} />
          <Route path="/industrial" element={<Industriel />} />
          <Route path="/ForIndustrial" element={<ForIndustriel />} />
          <Route path="/land" element={<Terrain />} />
          <Route path="/ForLand" element={<ForTerrain />} />
          <Route path="/promenade" element={<Promenade />} />
          <Route path="/ForPromenade" element={<ForPromenade />} />
        </Routes>
      </Router>

      <ScrollToTop />
    </div>


  );
}

export default App;
