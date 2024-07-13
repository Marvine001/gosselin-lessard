// import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Home from './views/pages/home/Home'
import Join from './views/pages/join us/Join'
import About from './views/pages/about us/About'
import Residentiel from './views/pages/properties/residentiel/Residentiel'
import Commercial from './views/pages/properties/commercial/Commercial'
import Industriel from './views/pages/properties/industriel/Industriel'
import Terrain from './views/pages/properties/terrain/Terrain'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/residential" element={<Residentiel />} />
      <Route path="/commercial" element={<Commercial />} />
      <Route path="/industrial" element={<Industriel />} />
      <Route path="/land" element={<Terrain />} />
        <Route path="/about_us" element={<About />} />
        <Route path="/join_us" element={<Join />} /> 
      </Routes>
    </Router>
  );
}

export default App;
