// src/About.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is a travel app about various destinations.</p>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/destinations/vienna">Vienna, Austria</Link></li>
          <li><Link to="/destinations/sydney">Sydney, Australia</Link></li>
          <li><Link to="/destinations/cape-town">Cape Town, South Africa</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default About;
