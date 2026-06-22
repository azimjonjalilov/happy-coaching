import './Footer.css';
import logo from "../../assets/Vector.png";
import Heart from "../../assets/Group 138.png";
import web from "../../assets/web.png";
import facebook from "../../assets/Vector.svg";
import linkedin from "../../assets/icon.svg";


export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="newsletter-section">-
                <div className="newsletter-text">
                    <h2>Get notified when I publish new articles</h2>
                    <p>Stay up to date with the latest news, announcements, and articles.</p>
                </div>
                <div className="newsletter-form">
                    <input type="email" placeholder="Enter your email" aria-label="Email address" />
                    <button type="submit">Subscribe</button>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-content">
                <div className="footer-brand">
                    <div className="brand-logo-container">
                        <div className="brand-logo-box">
                            <img src={logo} alt="Happy Coaching Logo" className="brand-logo-img" />
                        </div>
                        <strong>Happy Coaching</strong>
                    </div>
                    <p className="brand-desc">
                        Design amazing digital experiences that create more happy in the world.
                    </p>
                </div>

                <div className="footer-links-group">
                    <h3>Pages</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#sales">Extra Sales/Landingpage</a></li>
                        <li><a href="#guide">Free guide</a></li>
                    </ul>
                </div>

                <div className="footer-links-group">
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="tel:+123456789">+123 456 789</a></li>
                        <li><a href="mailto:hello@happydigital.nl">hello@happydigital.nl</a></li>
                        <li><a href="#instagram">Instagram</a></li>
                        <li><a href="#linkedin">LinkedIn</a></li>
                    </ul>
                </div>
            </div>

            <hr className="footer-divider" />

            {/* Pastki qism: Mualliflik huquqi va Ijtimoiy tarmoqlar */}
            <div className="footer-bottom">
                <div className="footer-madeby">
                    {/* 2. HEART/EMOJI LOGO */}
                    Made with a
                    <span className="madeby-icon-box">
                        <img src={Heart} alt="Heart" className="madeby-icon-img" />
                    </span>
                    by <strong>HappyDigital</strong>
                </div>

                {/* 3. IJTIMOIY TARMOQ LOGOLARI */}
                <div className="footer-socials">
                    <a href="#linkedin" aria-label="LinkedIn" className="social-link">
                        <img src={linkedin} alt="LinkedIn" className="social-icon-img" />
                    </a>
                    <a href="#facebook" aria-label="Facebook" className="social-link">
                        <img src={facebook} alt="Facebook" className="social-icon-img" />
                    </a>
                    <a href="#website" aria-label="Website" className="social-link">
                        <img src={web} alt="Website" className="social-icon-img" />
                    </a>
                </div>
            </div>
        </footer>
    );
}