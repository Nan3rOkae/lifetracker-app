import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img
              src="http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg"
              alt="logo"
            />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/login">
              <button className="btn ghost">Login</button>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <button className="btn primary">Register</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
