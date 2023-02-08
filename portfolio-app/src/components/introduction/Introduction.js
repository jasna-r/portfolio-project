import "./Introduction.css"
import logo from "../../assets/my_photo.jpg"

const Introduction = () => {
  return (
    <div className="intro-container container-fluid d-flex align-items-center py-5 px-0 justify-content-around">
    
      <img src={logo} alt="my profile" className="about-me-img"/>
      <div className="about-me">
        <h1 className="h1">HI,</h1>
        <p className="">MY NAME IS JASNA</p>
        <p className="">
         Welcome to my portfolio.
         Take a look around...
         </p>
         <p className="">
         If you need hard-working Front-End Developer, organized and enthusiastic,
        willing to learn and work for your company, let's get in touch!
         
        </p>
        <a href="#content" type="e-mail" class="button button-primary">E-mail me</a>
      </div>
      </div>
      
    // </div>
  )
}

export default Introduction
