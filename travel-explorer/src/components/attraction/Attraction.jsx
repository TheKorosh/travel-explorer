import "./attraction.scss";
import popularAttractions from "../../data/popular-attractions";

function Attraction() {
  return (
    <div className="popular-attractions-container">
      <div className="popular-attractions-header">
        <h3>Popular Attractions</h3>
        <a href="#">
          <span>View All</span>
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className="popular-attraction-card-container">
        {popularAttractions.map((attraction) => (
          <a className="popular-attraction-card" href="#" key={attraction.id}>
            <article>
              <div className="popular-attraction-img-container">
                <img
                  src={attraction.img}
                  alt={attraction.imgAlt}
                  width="100%"
                />
              </div>
              <div className="popular-attraction-card-info">
                <h4>{attraction.place}</h4>
                <h5>
                  <i className="fa-solid fa-location-dot"></i>
                  <span>{attraction.location}</span>
                </h5>
              </div>
            </article>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Attraction;
