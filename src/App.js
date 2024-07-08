// import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Home from './views/pages/home/Home'
import Join from './views/pages/join us/Join'
import About from './views/pages/about us/About'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<About />} />
        <Route path="/join_us" element={<Join />} /> 
      </Routes>
    </Router>
  );
}

export default App;
