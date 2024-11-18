// src/NotFound.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';

function NotFound() {
  const location = useLocation();  // Hook to get the current path (URL)

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The route <code>{location.pathname}</code> does not exist.</p>
    </div>
  );
}

export default NotFound;
