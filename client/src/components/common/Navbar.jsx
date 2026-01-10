import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      style={{ backgroundColor: "#F9FAFB" }} 
      className="shadow-sm py-2"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img
            src="/logo.png"
            alt="EdTech Solutions"
            height="45"
          />
          <span style={{ color: "#1E3A8A", fontWeight: "700", fontSize: "1.3rem" }}>
            Ed Tech Solutions
          </span>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center gap-4 fw-semibold">
            {/* Correct page links */}
            <Nav.Link as={Link} to="/" style={{ color: "#1E3A8A" }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: "#1E3A8A" }}>About</Nav.Link>
            <Nav.Link as={Link} to="/programs" style={{ color: "#1E3A8A" }}>Programs</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: "#1E3A8A" }}>Contact</Nav.Link>
            <Button
              as={Link}
              to="/apply"
              style={{ backgroundColor: "#10B981", border: "none" }}
              className="px-4 rounded-pill"
            >
              Apply Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
