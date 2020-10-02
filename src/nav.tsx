import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <h3>logo</h3>
      <ul className="nav-links">
        <Link to="/Table">
          <li>Table</li>
        </Link>
        <Link to="/form">
          <li>Types</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
