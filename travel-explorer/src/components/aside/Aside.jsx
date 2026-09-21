import "./aside.scss";
import Trip from "../../assets/images/trip.webp";

function Aside() {
  return (
    <aside className="col-xl-2">
      <div className="aside-categories">
        <h5>
          <i className="fa-solid fa-table-cells-large"></i>
          <span>Categories</span>
        </h5>
        <nav>
          <ul>
            <li>
              <a className="active" href="#">
                <div className="category-name-container">
                  <i className="fa-solid fa-globe"></i>
                  <span>All Destinations</span>
                </div>
                <div className="category-count-container">
                  <span className="category-count">24</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="category-name-container">
                  <i className="fa-solid fa-earth-europe"></i>
                  <span>Europe</span>
                </div>
                <div className="category-count-container">
                  <span className="category-count">8</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="category-name-container">
                  <i className="fa-solid fa-earth-asia"></i>
                  <span>Asia</span>
                </div>
                <div className="category-count-container">
                  <span className="category-count">7</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="category-name-container">
                  <i className="fa-solid fa-earth-americas"></i>
                  <span>America</span>
                </div>
                <div className="category-count-container">
                  <span className="category-count">5</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="category-name-container">
                  <i className="fa-solid fa-earth-africa"></i>
                  <span>Africa</span>
                </div>
                <div className="category-count-container">
                  <span className="category-count">4</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="category-name-container">
                  <i className="fa-solid fa-earth-oceania"></i>
                  <span>Oceania</span>
                </div>
                <div className="category-count-container">
                  <span className="category-count">3</span>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="aside-banner-container">
        <a className="aside-banner" href="">
          <div className="aside-banner-img">
            <img src={Trip} alt="Trip Vector" width="100%" />
          </div>
          <div className="aside-banner-content">
            <p>Let's make your best trip ever</p>
            <div className="aside-banner-button">
              <p>
                <span>Plan Your Trip</span>
                <i className="fa-solid fa-arrow-right"></i>
              </p>
            </div>
          </div>
        </a>
      </div>
    </aside>
  );
}

export default Aside;
