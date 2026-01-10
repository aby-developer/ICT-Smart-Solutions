import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope, FaYoutube, FaXTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <Container>
        <Row className="g-4">
          {/* Column 1: Brand */}
          <Col md={3}>
            <h5 className="fw-bold">Ed Tech Solutions</h5>
            <p className="text-muted">Innovating ICT Learning For The Future</p>
          </Col>

          {/* Column 2: Quick Links */}
          <Col md={2}>
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/courses" className="text-white text-decoration-none">Programs</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
              <li><a href="/apply" className="text-white text-decoration-none">Apply Now</a></li>
            </ul>
          </Col>

          {/* Column 3: Programs */}
          <Col md={3}>
            <h5 className="fw-bold">Programs</h5>
            <ul className="list-unstyled text-muted">
              <li>Software Development (SOD)</li>
              <li>Computer Systems & Architecture (CSA)</li>
              <li>Networking & Internet Technology (NIT)</li>
              <li>Multimedia Productions (MMP)</li>
              <li>Electronics & Telecommunications (ETE)</li>
              <li>Electrical Technology (ELT)</li>
              <li>Teacher Training</li>
              <li>Holiday Program</li>
              <li>Technical Support & ICT Peripherals</li>
            </ul>
          </Col>

          {/* Column 4: Contact & Social */}
          <Col md={4}>
            <h5 className="fw-bold">Contact Us</h5>
            <p>
              <FaMapMarkerAlt className="me-2" />
              Kigali - Kicukiro Sonatube - Inindi House (Former UTB University)
            </p>
            <p>
              <a href="https://wa.me/250729598007" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                <FaWhatsapp className="me-2" /> +250 729 598 007
              </a>
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-2">
              <a href="https://wa.me/250729598007" target="_blank" className="text-white"><FaWhatsapp /></a>
              <a href="#" target="_blank" className="text-white"><FaInstagram /></a>
              <a href="#" target="_blank" className="text-white"><FaLinkedin /></a>
              <a href="mailto:edtechsolutions72@gmail.com" className="text-white"><FaEnvelope /></a>
              <a href="#" target="_blank" className="text-white"><FaYoutube /></a>
              <a href="#" target="_blank" className="text-white"><FaXTwitter /></a>
              <a href="#" target="_blank" className="text-white"><FaTiktok /></a>
            </div>

            {/* Developer Info */}
            <div className="mt-4 d-flex align-items-center gap-2">
              <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#10B981",
                overflow: "hidden"
              }}>
                {/* Place your photo here */}
                <img src="/developer-photo.png" alt="Developer" width="50" height="50" />
              </div>
              <div>
                <p className="mb-0">Developed by: Abimana Yves</p>
                <a href="https://wa.me/250729598007" target="_blank" className="text-white text-decoration-none">
                  +250 729 598 007
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="mt-4" style={{ borderColor: "#10B981" }} />
        <p className="text-center text-muted mb-0">&copy; {new Date().getFullYear()} Ed Tech Solutions. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
