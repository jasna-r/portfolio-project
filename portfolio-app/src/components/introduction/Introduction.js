import "./Introduction.css"
import logo from "../../assets/my_photo.jpg"

const Introduction = () => {
  return (
    <div id="#introduction" className="intro-container container-fluid d-flex align-items-center py-5 px-0 justify-content-around">
    
      <img src={logo} alt="my profile" className="about-me-img"/>
      <div className="about-me">
        <div className="wrapper my-3">
        <h1 className="h1">HI,</h1>
        <p className="title">MY NAME IS JASNA</p>
        <p className="paragraph-intro pb-4">
         Welcome to my portfolio.<br></br>
         Take a look around...<br></br>
         </p>
         <p className="paragraph-content pb-4">
         If you need hard-working Front-End Developer,
         <br></br> organized and enthusiastic,<br></br>
        willing to learn and work for your company,<br></br> let's get in touch!
         
        </p>
        <a href="#content" type="e-mail" class="button button-primary pt-2">E-mail me</a>
    </div>

      </div>
      </div>
      
    // </div>
  )
}

export default Introduction
