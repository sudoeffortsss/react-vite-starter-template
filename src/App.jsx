// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Destinations from './Destinations';
import About from './About';
import NotFound from './NotFound';
import Vienna from './Vienna';
import Sydney from './Sydney';
import CapeTown from './CapeTown';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Destinations Route */}
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/vienna" element={<Vienna />} />
        <Route path="/destinations/sydney" element={<Sydney />} />
        <Route path="/destinations/cape-town" element={<CapeTown />} />

        {/* About Route */}
        <Route path="/about" element={<About />} />

        {/* 404 Error Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
