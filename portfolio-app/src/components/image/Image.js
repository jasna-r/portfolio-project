import "./Image.css"

const Image = ({ src, alt }) => {
  return <img className="about-me-photo mx-2 my-5 pt-2" src={src} alt={alt} />
}

export default Image