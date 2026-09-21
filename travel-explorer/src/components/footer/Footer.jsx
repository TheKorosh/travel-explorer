import "./footer.scss";
import FooterIcon from "../../assets/icons/travel-explorer.png";
import FacebookIcon from "../../assets/icons/facebook.png";
import InstagramIcon from "../../assets/icons/instagram.png";
import YoutubeIcon from "../../assets/icons/youtube.png";
import TwitterIcon from "../../assets/icons/twitter.png";
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-about-us">
          <img src={FooterIcon} alt="Travel Explorer Logo" width="100%" />
          <p>
            Explore the world and make

            unforgettable memories with
            our travel guides and tips.
          </p>
          <div className="footer-social-media-icons-container">
            <a href="#">
              <img src={FacebookIcon} alt="Facebook Icon" />
            </a>
            <a href="#">
              <img src={InstagramIcon} alt="Instagram Icon" />
            </a>
            <a href="#">
              <img src={TwitterIcon} alt="Tweeter Icon" />
            </a>
            <a href="#">
              <img src={YoutubeIcon} alt="YouTube Icon" />
            </a>
          </div>
        </div>
        <div className="footer-link-container">
          <div className="footer-link">
            <h4>Company</h4>
            <nav>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-link">
            <h4>Support</h4>
            <nav>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Term of Service</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-link">
            <h4>Resources</h4>
            <nav>
              <ul>
                <li>
                  <a href="#">Travel Guides</a>
                </li>
                <li>
                  <a href="#">Destination tips</a>
                </li>
                <li>
                  <a href="#">Travel Insurance</a>
                </li>
                <li>
                  <a href="#">Hotels</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer-newsletter">
          <h4>Subscribe to our newsletter</h4>
          <p>Get the latest travel tips and offers.</p>
          <form action="#">
            <input type="email" name="" id="" placeholder="Enter your email" />
            <input type="button" value="Subscribe" />
          </form>
        </div>
      </div>
      <div className="footer-copyright">
        <p>2026 Travel Explorer. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
