import React from "react";
import "./Footer.css"
import {
  FaFacebook,
  FaLinkedinIn,
  FaSkype
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="#contact" className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="social-icons py-4 justify-content-around ">
        <a href="https://www.facebook.com/jasna.bt" target="_blank" rel="noreferrer" className="icon-link p-3">
          <FaFacebook size={30} color={"black"}/>
        </a>
        <a href="https://www.linkedin.com/in/jasna-rapesanova" target="_blank" rel="noreferrer" className="icon-link p-3">
          <FaLinkedinIn size={30} color={"black"}/>
        </a>
        <a href="skype:live:.cid.b98204410985a245?userinfo" target="_blank" rel="noreferrer" className="icon-link p-3">
          <FaSkype size={30} color={"black"} />
        </a>
      </div>
      <div className="copyright py-4">
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </div>
    </footer>
  );
};

export default Footer;
