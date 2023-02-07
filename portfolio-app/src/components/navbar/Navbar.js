import "./Navbar.css";
import React from "react";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="nav">
        <a href="/" className="site-title">
          My Portfolio
        </a>

        <div>
          <ul>
            <li className="active">
              <a href="/home">Home</a>
            </li>
            <li className="active">
              <a href="/work">My work</a>
            </li>
            <li className="active">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;