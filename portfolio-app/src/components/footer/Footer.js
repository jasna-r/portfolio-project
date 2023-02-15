import React from "react";
import "./Footer.css"
import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="#contact" className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="social-icons py-4 justify-content-around ">
        <a href="/facebook" className="icon-link p-3">
          <FaFacebook size={30} color={"black"}/>
        </a>
        <a href="/linkedin" className="icon-link p-3">
          <FaLinkedinIn size={30} color={"black"}/>
        </a>
        <a href="/instagram" className="icon-link p-3">
          <FaInstagramSquare size={30} color={"black"} />
        </a>
      </div>
      <div className="copyright py-4">
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </div>
    </footer>
  );
};

export default Footer;
