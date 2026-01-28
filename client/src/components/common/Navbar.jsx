import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  FaHome, 
  FaInfoCircle, 
  FaGraduationCap, 
  FaEnvelope, 
  FaRocket,
  FaSun,
  FaMoon,
  FaLightbulb,
  FaCalendarAlt
} from "react-icons/fa";

// Use the same color scheme from Home.jsx
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

const AppNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{ 
        backgroundColor: darkMode ? "#111827" : scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.98)",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? `1px solid ${colors.primary}20` : "none",
        transition: "all 0.3s ease",
        padding: scrolled ? "0.5rem 0" : "0.8rem 0"
      }}
      className="shadow-sm"
      variant={darkMode ? "dark" : "light"}
      expanded={mobileMenuOpen}
      onToggle={(expanded) => setMobileMenuOpen(expanded)}
    >
      <Container fluid="lg">
        {/* Logo Section */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-3">
          <div style={{
            width: "45px",
            height: "45px",
            borderRadius: "12px",
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 4px 12px ${colors.primary}40`
          }}>
            <FaLightbulb size={24} color="white" />
          </div>
          <div className="d-flex flex-column">
            <span
              style={{
                color: darkMode ? "white" : colors.dark,
                fontWeight: "800",
                fontSize: "1.4rem",
                letterSpacing: "-0.5px"
              }}
            >
              ICT Smart
            </span>
            <span
              style={{
                color: darkMode ? colors.secondary : colors.primary,
                fontWeight: "700",
                fontSize: "1.1rem",
                letterSpacing: "0.5px"
              }}
            >
              Solutions
            </span>
          </div>
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          style={{
            border: `2px solid ${darkMode ? colors.secondary : colors.primary}`,
            borderRadius: "8px",
            padding: "8px 12px"
          }}
        >
          <span style={{ color: darkMode ? colors.secondary : colors.primary }}>☰</span>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-1 gap-lg-3">
            {/* Home Link */}
            <Nav.Link 
              as={Link} 
              to="/" 
              className="d-flex align-items-center gap-2 py-2 px-3 rounded-3"
              style={{ 
                color: darkMode ? "white" : colors.dark,
                fontWeight: "600",
                transition: "all 0.3s ease",
                fontSize: "0.95rem"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = darkMode ? colors.primary + "40" : colors.primary + "10";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaHome size={16} style={{ color: colors.primary }} />
              Home
            </Nav.Link>

            {/* About Link */}
            <Nav.Link 
              as={Link} 
              to="/about" 
              className="d-flex align-items-center gap-2 py-2 px-3 rounded-3"
              style={{ 
                color: darkMode ? "white" : colors.dark,
                fontWeight: "600",
                transition: "all 0.3s ease",
                fontSize: "0.95rem"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = darkMode ? colors.primary + "40" : colors.primary + "10";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaInfoCircle size={16} style={{ color: colors.accent }} />
              About Us
            </Nav.Link>

            {/* Programs Link with Badge */}
            <Nav.Link 
              as={Link} 
              to="/programs" 
              className="d-flex align-items-center gap-2 py-2 px-3 rounded-3 position-relative"
              style={{ 
                color: darkMode ? "white" : colors.dark,
                fontWeight: "600",
                transition: "all 0.3s ease",
                fontSize: "0.95rem"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = darkMode ? colors.primary + "40" : colors.primary + "10";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaGraduationCap size={16} style={{ color: colors.success }} />
              Programs
              <Badge 
                bg="danger" 
                pill 
                className="ms-1"
                style={{
                  fontSize: "0.65rem",
                  padding: "2px 6px",
                  position: "absolute",
                  top: "0",
                  right: "0",
                  transform: "translate(50%, -50%)"
                }}
              >
                8
              </Badge>
            </Nav.Link>

            {/* Contact Link */}
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className="d-flex align-items-center gap-2 py-2 px-3 rounded-3"
              style={{ 
                color: darkMode ? "white" : colors.dark,
                fontWeight: "600",
                transition: "all 0.3s ease",
                fontSize: "0.95rem"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = darkMode ? colors.primary + "40" : colors.primary + "10";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaEnvelope size={16} style={{ color: colors.teal }} />
              Contact
            </Nav.Link>

            {/* Apply Now Button */}
            <Button
              as={Link}
              to="/apply"
              className="d-flex align-items-center justify-content-center gap-2 py-2 px-4 rounded-pill shadow-sm"
              style={{ 
                background: `linear-gradient(135deg, ${colors.secondary}, ${colors.warning})`,
                border: "none",
                fontWeight: "700",
                fontSize: "0.95rem",
                minWidth: "130px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(245, 158, 11, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(245, 158, 11, 0.2)";
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaRocket size={14} />
              Apply Now
            </Button>

            {/* Dark Mode Toggle */}
            <div className="d-flex align-items-center gap-2 ms-2 ms-lg-3">
              <div
                onClick={toggleDarkMode}
                style={{
                  width: "45px",
                  height: "24px",
                  borderRadius: "12px",
                  backgroundColor: darkMode ? colors.primary : colors.gray + "40",
                  position: "relative",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: `2px solid ${darkMode ? colors.primary : colors.gray + "60"}`
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: darkMode ? "calc(100% - 22px)" : "2px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: darkMode ? colors.secondary : colors.dark,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                  }}
                >
                  {darkMode ? (
                    <FaMoon size={8} color="white" />
                  ) : (
                    <FaSun size={8} color="white" />
                  )}
                </div>
              </div>
              <small style={{ 
                color: darkMode ? colors.gray : colors.darkGray,
                fontWeight: "500",
                fontSize: "0.8rem"
              }}>
                {darkMode ? "Dark" : "Light"}
              </small>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Additional Mobile Menu Styles */}
      <style jsx="true">{`
        @media (max-width: 991px) {
          .navbar-collapse {
            background-color: ${darkMode ? "#111827" : "white"};
            padding: 1rem;
            border-radius: 12px;
            margin-top: 0.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            border: 1px solid ${darkMode ? colors.dark : colors.lightGray};
          }
          
          .nav-link {
            padding: 0.75rem 1rem !important;
            margin-bottom: 0.25rem;
          }
          
          .btn {
            margin-top: 0.5rem;
            width: 100%;
          }
          
          .dark-mode-toggle {
            justify-content: center !important;
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid ${darkMode ? colors.dark : colors.lightGray};
          }
        }
        
        /* Dark mode styles */
        body.dark-mode {
          background-color: #111827;
          color: #E5E7EB;
        }
        
        body.dark-mode .navbar-nav .nav-link {
          color: #E5E7EB !important;
        }
        
        body.dark-mode .navbar-nav .nav-link:hover {
          background-color: rgba(59, 130, 246, 0.1) !important;
        }
      `}</style>
    </Navbar>
  );
};

export default AppNavbar;