// src/Vienna.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Vienna() {
  return (
    <div>
      <h1>Vienna, Austria</h1>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/destinations/sydney">Sydney, Australia</Link></li>
          <li><Link to="/destinations/cape-town">Cape Town, South Africa</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Vienna;
