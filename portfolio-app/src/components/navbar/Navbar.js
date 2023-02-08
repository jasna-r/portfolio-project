import "./Navbar.css";
import React from "react";

function Navbar() {
  return (
    <nav
    class="container-fluid d-flex navbar navbar-expand-lg sticky-top text-secondary px-4 pr-1 d-none ">
    
    <a className="navbar-brand" href="/porfolio">My Portfolio

    </a>
    <ul class="navbar-nav ml-auto mr-0 container justify-content-end ">
      <li class="nav-item">
        <a class="nav-link " href="/home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/work">My Work</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar;