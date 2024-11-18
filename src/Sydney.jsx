// src/Sydney.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Sydney() {
  return (
    <div>
      <h1>Sydney, Australia</h1>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/destinations/vienna">Vienna, Austria</Link></li>
          <li><Link to="/destinations/cape-town">Cape Town, South Africa</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sydney;
