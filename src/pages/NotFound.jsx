NotFound.jsx

import { useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();
  return (
    <div>
      <h1>Error 404</h1>
      <p>The path "{location.pathname}" does not exist.</p>
    </div>
  );
}