import ProjectCard from "../projectCard/ProjectCard"
import "./Projects.css"
import logo from "../../assets/Ric-and-morty-app.PNG"
import logo1 from "../../assets/Movie-app.PNG"
import logo2 from "../../assets/Portfolio-App.PNG"

const Projects = () => {
  return (
    <div id="projects" className="projects-container container-fluid d-flex flex-column  py-5">
      <div className="projects-content container text-center my-4 py-4">
        <h1 className="h1 my-4">My Projects</h1>
        <p className="project-paragraph my-4 h2">
        Check out some of my recent creations 
        </p>
      </div>

      <div className="container-fluid d-flex">
        <ProjectCard
          src={logo}
          // src="https://media.istockphoto.com/photos/project-management-with-icons-about-planning-tasks-and-milestones-on-picture-id1135541613?k=20&m=1135541613&s=612x612&w=0&h=rHctItxe3Vi5AGnLfm-Qa_PARqNXaxhlc3TbFYFe3nI="
          alt="project one"
          title="Rick and Morty App"
          text="Rick and Morty App- Github repo"
          projectlink="https://github.com/jasna-r/Rick_And_Morty_App.git"
          info="This responsive search app will allow you to find info about some of your favorite characters from the Rick & Morty show."
          
        />

        <ProjectCard
          src={logo1}
          // src="https://media.istockphoto.com/photos/project-management-with-icons-about-planning-tasks-and-milestones-on-picture-id1135541613?k=20&m=1135541613&s=612x612&w=0&h=rHctItxe3Vi5AGnLfm-Qa_PARqNXaxhlc3TbFYFe3nI="
          alt="project two"
          title="Movie database App"
          text="Movie database App- Github repo"
          projectlink="https://github.com/jasna-r/movie-project.git"
          info="A web app created in React that allows a user to search for movies and find movies "
        />

        <ProjectCard
          src={logo2}
          // src="https://media.istockphoto.com/photos/project-management-with-icons-about-planning-tasks-and-milestones-on-picture-id1135541613?k=20&m=1135541613&s=612x612&w=0&h=rHctItxe3Vi5AGnLfm-Qa_PARqNXaxhlc3TbFYFe3nI="
          alt="project three"
          title="Portfolio App"
          text="Portfolio App- Github repo"
          projectlink="https://github.com/jasna-r/portfolio-project.git"
          info="My personal portfolio which features some of my github projects,little bit about me, as well as my technical skills."
        />
      </div>
    </div>
  )
}

export default Projects