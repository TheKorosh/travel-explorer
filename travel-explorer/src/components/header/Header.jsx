import "./header.scss";
import HeaderIcon from "../../assets/icons/travel-explorer.png";

function Header() {
  return (
    <header>
      <div className="header-navbar-container">
        <div className="header-navbar">
          <div className="header-icon">
            <a href="#">
              <img src={HeaderIcon} alt="Travel Explorer Logo" width="100%" />
            </a>
          </div>
          <div className="header-nav">
            <nav>
              <ul>
                <li>
                  <a className="active" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Destinations</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-actions">
            <div className="header-search">
              <a className="header-navbar-icon" href="#">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </div>
            <div className="header-favorite">
              <a className="header-navbar-icon" href="#">
                <i className="fa-regular fa-heart"></i>
              </a>
            </div>
            <div className="header-btn">
              <a href="#">Plan a Trip</a>
            </div>
            <div className="hamburger-menu">
              <a>
                <i className="fa-solid fa-bars"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header-hero-container">
        <div className="header-hero">
          <h1>Explore The World</h1>
          <p>
            Find your next adventure and
            <br /> create unforgettable memories.
          </p>
          <div className="header-hero-btn">
            <a href="#">
              <span>Discover More</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="header-carousel-back">
          <a href="#">
            <i className="fa-solid fa-angle-left"></i>
          </a>
        </div>
        <div className="header-carousel-next">
          <a href="#">
            <i className="fa-solid fa-angle-right"></i>
          </a>
        </div>
        <div className="header-carousel-position">
          <a className="active" href="#">
            <i className="fa-solid fa-circle"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-circle"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-circle"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-circle"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
