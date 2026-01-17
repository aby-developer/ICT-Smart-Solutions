import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={2} className="bg-dark text-white min-vh-100 p-3">
          <h5 className="text-center mb-4">Ed Tech Admin</h5>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/admin/dashboard" className="text-white">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/admin/applications" className="text-white">Applications</Nav.Link>
            <Nav.Link as={Link} to="/admin/messages" className="text-white">Messages</Nav.Link>
            <Nav.Link as={Link} to="/admin/settings" className="text-white">Settings</Nav.Link>
            <Nav.Link
              className="text-danger mt-3"
              onClick={() => {
                localStorage.removeItem("adminToken");
                window.location.href = "/login";
              }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLayout;
