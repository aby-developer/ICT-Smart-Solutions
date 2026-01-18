// src/pages/Admin/AdminSidebar.jsx
import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  // Helper to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="d-flex flex-column bg-dark text-white vh-100 p-3"
      style={{ width: "250px", position: "fixed" }}
    >
      <div className="mb-4 text-center">
        <h5 className="fw-bold" style={{ color: "#10B981" }}>
          Ed Tech Admin
        </h5>
      </div>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/admin/dashboard"
            className={`text-white ${isActive("/admin/dashboard") ? "bg-secondary rounded" : ""}`}
          >
            🏠 Dashboard
          </Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/admin/applications"
            className={`text-white ${isActive("/admin/applications") ? "bg-secondary rounded" : ""}`}
          >
            📝 Applications
          </Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/admin/messages"
            className={`text-white ${isActive("/admin/messages") ? "bg-secondary rounded" : ""}`}
          >
            💬 Messages
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/admin/profile"
            className={`text-white ${isActive("/admin/profile") ? "bg-secondary rounded" : ""}`}
          >
            ⚙️ Settings
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mt-auto">
          <Nav.Link
            as={Link}
            to="/admin/login"
            className="text-white bg-danger rounded"
          >
            🚪 Logout
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default AdminSidebar;
