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
        <ul className="NavContainer" style={{ listStyle: "none" }}>
          <li>
            <Link
              //style={{ textDecoration: "none", color: "white" }}
              to="/activity"
            >
              <a type="activity button">Activity</a>
            </Link>
          </li>
          <li>
            <Link
              //style={{ textDecoration: "none", color: "white" }}
              to="/exercise"
            >
              <a type="exercise button">Exercise</a>
            </Link>
          </li>
          <li>
            <Link
              to="/nutrition"
              // style={{ textDecoration: "none", color: "white" }}
            >
              <a type="nutrition button">Nutrition</a>
            </Link>
          </li>
          <li>
            <Link
              to="/sleep"
              //style={{ textDecoration: "none", color: "white" }}
            >
              <a type="sleep button">Sleep</a>
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              //style={{ textDecoration: "none", color: "white" }}
            >
              <a className="btn ghost">Login</a>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <a>
                <button className="SignUp">Sign Up</button>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
