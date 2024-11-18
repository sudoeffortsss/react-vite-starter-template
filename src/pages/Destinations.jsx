import { Link } from 'react-router-dom';

export default function Destinations() {
  return (
    <div>
      <h1>Destinations</h1>
      <ul>
        <li><Link to="/destinations/vienna">Vienna, Austria</Link></li>
        <li><Link to="/destinations/sydney">Sydney, Australia</Link></li>
        <li><Link to="/destinations/cape-town">Cape Town, South Africa</Link></li>
      </ul>
    </div>
  );
}
