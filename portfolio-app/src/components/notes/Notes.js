import Card from "../card/Card"
import "./Notes.css"

const Notes = () => {
  return (
    <div className="notes-container container-fluid px-0">
      <Card
        src="https://img.icons8.com/plasticine/100/null/code.png"
        alt="skills"
        heading="Skills"
        text="HTML , CSS, JavaScript, React"
      />
      <Card
        src="https://img.icons8.com/plasticine/100/null/graduation-cap.png"
        alt="Experience"
        heading="Experience"
        text="<CodeAcademy> Mk "
      />
      <Card
        src="https://img.icons8.com/plasticine/100/null/github.png"
        alt="Projects"
        heading="Projects"
        text=""
        attach="https://github.com/jasna-r"
      />
    </div>
  )
}

export default Notes
