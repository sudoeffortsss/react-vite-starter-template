// src/CapeTown.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function CapeTown() {
  return (
    <div>
      <h1>Cape Town, South Africa</h1>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/destinations/vienna">Vienna, Austria</Link></li>
          <li><Link to="/destinations/sydney">Sydney, Australia</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default CapeTown;
