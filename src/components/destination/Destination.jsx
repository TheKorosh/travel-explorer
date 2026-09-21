import "./destination.scss";
import topDestinations from "../../data/top-destinations";
function Destination() {
  return (
    <div className="top-destinations-container">
      <div className="top-destinations-header">
        <h3>Top Destinations</h3>
        <a href="#">
          <span>View All</span>
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className="top-destination-card-container">
        {topDestinations.map((destination) => (
          <a className="top-destination-card" href="#" key={destination.id}>
            <article>
              <div className="top-destination-img-container">
                <img
                  src={destination.img}
                  alt={destination.imgAlt}
                  width="100%"
                />
                <div className="top-destinations-overlay">
                  <div className="top-destinations-filter-overlay">
                    <p>
                      <i className="fa-solid fa-map"></i>
                      <span>{destination.filterOverlay}</span>
                    </p>
                  </div>
                  <div className="top-destinations-favorite-overlay">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
              <div className="top-destinations-card-info">
                <h4>{destination.city}</h4>
                <h5>
                  <i className="fa-solid fa-location-dot"></i>
                  <span>{destination.country}</span>
                </h5>
                <div className="top-destinations-card-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <span>{destination.rating}</span>
                </div>
                <p className="top-destinations-card-price">
                  <span className="price">{destination.price}</span>
                  <span className="per-person">/person</span>
                </p>
              </div>
              <div className="top-destination-card-desc">
                <p>
                  <span className="desc-title">
                    {destination.firstDescTitle}
                  </span>
                  <span className="desc-value">
                    {destination.firstDescValue}
                  </span>
                </p>
                <p>
                  <span className="desc-title">
                    {destination.secondDescTitle}
                  </span>
                  <span className="desc-value">
                    {destination.secondDescValue}
                  </span>
                </p>
                <p>
                  <span className="desc-title">
                    {destination.thirdDescTitle}
                  </span>
                  <span className="desc-value">
                    {destination.thirdDescValue}
                  </span>
                </p>
              </div>
              <span className="view-details-link">
                <span>View Details</span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </article>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Destination;
