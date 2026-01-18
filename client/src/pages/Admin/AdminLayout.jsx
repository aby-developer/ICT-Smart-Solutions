// src/components/admin/AdminLayout.jsx
import React, { useState } from "react";
import { Container, Navbar, Nav, Form, Dropdown, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AdminSidebar from "../../pages/Admin/AdminSidebar";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // or your auth logic
    navigate("/admin/login");
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div style={{ marginLeft: "250px", width: "100%" }}>
        {/* Top Navbar */}
        <Navbar bg="light" expand="lg" className="shadow-sm px-3" fixed="top">
          <Form className="d-flex flex-grow-1">
            <Form.Control
              type="search"
              placeholder="Search students, applications, messages..."
              className="me-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>

          <Nav className="ms-auto align-items-center">
            {/* Notifications example */}
            <Nav.Link className="position-relative">
              🔔
              <Badge bg="danger" pill style={{ position: "absolute", top: 0, right: 0 }}>
                3
              </Badge>
            </Nav.Link>

            {/* Admin dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                👤 Admin
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/admin/profile">Profile</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar>

        {/* Padding to avoid overlap with fixed top navbar */}
        <div style={{ paddingTop: "70px", paddingLeft: "20px", paddingRight: "20px" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
