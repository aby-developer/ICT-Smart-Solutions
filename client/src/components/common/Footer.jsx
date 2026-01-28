import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCode,
  FaFacebookF,
  FaLightbulb,
  FaGraduationCap,
  FaTools,
  FaNetworkWired,
  FaMicrochip,
  FaPhotoVideo,
  FaChalkboardTeacher,
  FaUmbrellaBeach,
  FaBolt,
  FaRocket
} from "react-icons/fa";

// Use the same color scheme from Home.jsx and Navbar.jsx
const colors = {
  primary: "#1A56DB",     // Modern Blue
  secondary: "#F59E0B",   // Amber/Orange
  accent: "#7C3AED",      // Purple for highlights
  dark: "#1E3A8A",        // Dark Blue
  light: "#F0F9FF",       // Light Blue background
  success: "#10B981",     // Emerald Green
  warning: "#FBBF24",     // Yellow
  info: "#3B82F6",        // Light Blue
  gray: "#6B7280",        // Gray
  lightGray: "#F9FAFB",   // Light Gray
  darkGray: "#374151",    // Dark Gray
  teal: "#0D9488"         // Teal for variety
};

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          
          {/* COLUMN 1 – BRAND & DESCRIPTION */}
          <div className="footer-col footer-brand-col">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon" style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})` }}>
                  <FaLightbulb />
                </div>
                <div className="footer-brand-text">
                  <h3>ICT Smart</h3>
                  <h3 style={{ color: colors.primary }}>Solutions</h3>
                </div>
              </div>
            </div>

            <p className="footer-tagline">
              Empowering Africa's digital future through quality ICT education and innovative technology solutions.
            </p>

            {/* Contact Info */}
            <div className="footer-contact-info">
              <div className="contact-item">
                <FaPhoneAlt style={{ color: colors.secondary }} />
                <span>+250 789 402 303</span>
              </div>
              <div className="contact-item">
                <FaEnvelope style={{ color: colors.accent }} />
                <span>info@ictsmartsolutions.com</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt style={{ color: colors.success }} />
                <span>Kigali – Nyarugenge near Bank Of Kigali HeadQuarter</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="footer-socials">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="https://wa.me/250789402303" target="_blank" rel="noopener noreferrer" 
                   style={{ backgroundColor: "#25D366" }}>
                  <FaWhatsapp />
                </a>
                <a href="https://instagram.com/ictsmartsolutions" target="_blank" rel="noopener noreferrer"
                   style={{ background: "linear-gradient(45deg, #405DE6, #E1306C)" }}>
                  <FaInstagram />
                </a>
                <a href="https://youtube.com/@ictsmartsolutions" target="_blank" rel="noopener noreferrer"
                   style={{ backgroundColor: "#FF0000" }}>
                  <FaYoutube />
                </a>
                <a href="https://facebook.com/ictsmartsolutions" target="_blank" rel="noopener noreferrer"
                   style={{ backgroundColor: "#1877F2" }}>
                  <FaFacebookF />
                </a>
                <a href="https://linkedin.com/company/ictsmartsolutions" target="_blank" rel="noopener noreferrer"
                   style={{ backgroundColor: "#0A66C2" }}>
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com/ictsmartsolution" target="_blank" rel="noopener noreferrer"
                   style={{ backgroundColor: "#1DA1F2" }}>
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2 – QUICK LINKS */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/"><FaBolt style={{ color: colors.secondary }} /> Home</Link></li>
              <li><Link to="/about"><FaChalkboardTeacher style={{ color: colors.accent }} /> About Us</Link></li>
              <li><Link to="/programs"><FaGraduationCap style={{ color: colors.primary }} /> Programs</Link></li>
              <li><Link to="/contact"><FaEnvelope style={{ color: colors.success }} /> Contact</Link></li>
              <li><Link to="/apply" className="footer-highlight-link">
                <FaRocket style={{ color: colors.secondary }} /> Apply Now
              </Link></li>
              <li><Link to="/faq"><FaBolt style={{ color: colors.warning }} /> FAQ</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 – POPULAR PROGRAMS */}
          <div className="footer-col">
            <h4 className="footer-col-title">Popular Programs</h4>
            <ul className="footer-programs">
              <li>
                <FaMicrochip style={{ color: colors.primary }} />
                <span>Software Development (SOD)</span>
              </li>
              <li>
                <FaMicrochip style={{ color: colors.secondary }} />
                <span>Computer Systems & Architecture</span>
              </li>
              <li>
                <FaNetworkWired style={{ color: colors.accent }} />
                <span>Networking & Internet Technology</span>
              </li>
              <li>
                <FaPhotoVideo style={{ color: colors.success }} />
                <span>Multimedia Productions</span>
              </li>
              <li>
                <FaTools style={{ color: colors.teal }} />
                <span>Technical Support & ICT Supply</span>
              </li>
              <li>
                <FaUmbrellaBeach style={{ color: colors.warning }} />
                <span>Holiday Tech Program</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 – NEWSLETTER */}
          <div className="footer-col footer-newsletter-col">
            <h4 className="footer-col-title">Stay Updated</h4>
            <p className="newsletter-description">
              Subscribe to our newsletter for the latest updates on programs, events, and tech insights.
            </p>
            
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button 
                className="newsletter-btn"
                style={{ background: `linear-gradient(135deg, ${colors.secondary}, ${colors.warning})` }}
              >
                Subscribe
              </button>
            </div>

            {/* Developer Info */}
            <div className="footer-developer">
              <div className="developer-info">
                <small className="developed-by">Website Developed by:</small>
                <div className="developer-details">
                  <strong>Abimana Yves</strong>
                  <span className="dev-role">
                    <FaCode style={{ color: colors.primary }} /> Full Stack Developer
                  </span>
                  <a
                    href="https://www.instagram.com/yves.abimana/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dev-instagram"
                  >
                    <FaInstagram style={{ color: colors.accent }} /> @yves.abimana
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-copyright">
            <p>
              © {new Date().getFullYear()} ICT Smart Solutions. All Rights Reserved.
              <span className="separator">|</span>
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <span className="separator">|</span>
              <Link to="/terms" className="footer-link">Terms of Service</Link>
              <span className="separator">|</span>
              <Link to="/admin/login" className="footer-link admin-link">
                Admin Portal
              </Link>
            </p>
          </div>
          
          <div className="footer-payment">
            <span>Accepted Payments:</span>
            <div className="payment-methods">
              <span className="payment-method">Momo Pay</span>
              <span className="payment-method">Airtel Money</span>
              <span className="payment-method">Bank Transfer</span>
              <span className="payment-method">Cash</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;