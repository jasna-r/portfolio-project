import "./Card.css"

const Card = ({ src, alt, heading, text, attach }) => {
  return (
    <div className="card container-fluid d-flex py-4">
      <img className="card-img-top" src={src} alt={alt} />
      <div className="card-body mt-4">
        <h4 className="card-title text-center pt-4">{heading}</h4>
        <p className="card-text text-center pt-4">{text}</p>
        <a className="btn pl-5 ml-5 pt-0" href={attach} target="new">{attach}</a>
      </div>
    </div>  
  )
}

export default Card