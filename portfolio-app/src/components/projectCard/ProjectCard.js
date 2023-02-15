import "./ProjectCard.css"

function ProjectCard({ src, alt, title, text, info, projectlink }) {
  return (
    <div className="project-card-container container d-flex">
      <img className="project-img w-100 pt-4 py-4" src={src} alt={alt} />
      {/* <h3 className="h3 text-center py-4">{title}</h3> */}
      
      <span className="py-3  ">
        {info} {">"}
      </span>
      <a href={projectlink} className="text-center project-link" target="new">{text}</a>
    </div>
  )
}

export default ProjectCard
