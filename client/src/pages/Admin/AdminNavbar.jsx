import { Navbar, Container, Form, FormControl, Nav, Dropdown } from "react-bootstrap";
import { BsBell, BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login", { replace: true });
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      className="shadow-sm px-3 admin-navbar"
    >
      <Container fluid>
        {/* Search */}
        <Form className="d-flex align-items-center me-auto admin-search">
          <BsSearch className="text-muted me-2" />
          <FormControl
            type="search"
            placeholder="Search students, applications..."
            className="border-0 shadow-none"
          />
        </Form>

        {/* Right Section */}
        <Nav className="align-items-center gap-3">
          {/* Notifications */}
          <Nav.Link className="position-relative">
            <BsBell size={20} />
            <span className="notification-dot"></span>
          </Nav.Link>

          {/* Admin Dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle
              variant="light"
              className="border-0 shadow-none d-flex align-items-center gap-2"
            >
              <img
                src="https://i.pravatar.cc/40"
                alt="Admin"
                className="rounded-circle"
                width="35"
                height="35"
              />
              <span className="d-none d-md-inline fw-semibold">
                Admin
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {/* <Dropdown.Item onClick={() => navigate("/admin/profile")}>
                Profile
              </Dropdown.Item> */}
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout} className="text-danger">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;
