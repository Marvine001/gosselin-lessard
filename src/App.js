// import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Home from './views/pages/home/Home'
import Join from './views/pages/join us/Join'
import About from './views/pages/about us/About'


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="about us" element={<About />} />
        <Route path="join us" element={<Join />} /> 
      </Routes>
    </Router>
  );
}

export default App;
