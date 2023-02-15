import React from "react";
import Button from "../button/Button";
import Image from "../image/Image";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div id="about" className="about-me-container container-fluid d-flex justify-content-around py-5">
      <Image  
        //  src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/03/convert-png-to-jpg-12.jpg"        
        src="/woman_laptop.png"
        alt="my image"
      />
      <div className="about-me-content align-self-center">
        <h2 className="about-me-title text-center pb-4">About me</h2>
        <div className="about-me-paragraph text-align-left">
        <p>I am freshly certified Front-End developer.<br></br>
        Just finished the Academy for Coding.<br></br>
        Previously I was learning from online courses for HTML, CSS and
        JavaScript,<br></br> especially when the pandemic started.<br></br>
        </p>
        <p>A year ago I
        decided that I genuinely want to expand my knowledge <br></br>and in fact coding
        to become my occupation in the near future.<br></br>
        So, I signed up at CodeAcademy in Skopje.<br></br>
        At the same time I was working my full time job and constantly learning.<br></br>
        Gained knowledge for the technologies I have mentioned in the skills
        section.<br></br>
        And here I am now, willing to change my carreer. <br></br>
        So, please, take a look at some of my work, bellow I have some of my
        Github links.
        </p>
        <Button>Hire me!</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
