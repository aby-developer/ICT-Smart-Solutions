// src/components/admin/AdminLayout.jsx
import React, { useState } from "react";
import { Container, Navbar, Nav, Form, Dropdown, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

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
      

      {/* Main content */}
      <div style={{ marginLeft: "", width: "100%" }}>
        {/* Top Navbar */}
        
        {/* Padding to avoid overlap with fixed top navbar */}
        <div style={{ paddingTop: "", paddingLeft: "", paddingRight: "" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
