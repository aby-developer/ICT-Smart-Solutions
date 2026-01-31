import { useState, useEffect } from "react";
import { Card, Table, Button, Badge, Form, InputGroup, Dropdown, Row, Col, Modal, Spinner, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  BsSearch,
  BsFilter,
  BsDownload,
  BsEnvelope,
  BsTelephone,
  BsThreeDotsVertical,
  BsCheckCircle,
  BsClockHistory,
  BsXCircle,
  BsEye,
  BsPerson,
  BsEnvelopeFill,
  BsPhone,
  BsHouseDoor,
  BsPeople,
  BsChatDots,
  BsGear,
  BsPersonCircle,
  BsInstagram,
  BsLaptop,
  BsPhone as BsPhoneIcon
} from "react-icons/bs";
import api from "../../services/api";

const Applications = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedApp, setSelectedApp] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(false);

  const primaryColor = "#1A56DB";
  const secondaryColor = "#F59E0B";
  const accentColor = "#7C3AED";
  const lightBg = "#F0F9FF";

  // Navigation buttons
  const navigationButtons = [
    {
      title: "Dashboard",
      icon: <BsHouseDoor size={18} />,
      path: "/admin/dashboard",
      description: "Overview"
    },
    {
      title: "Applications",
      icon: <BsPeople size={18} />,
      path: "/admin/applications",
      active: true,
      count: applications.length,
      description: "Manage"
    },
    {
      title: "Messages",
      icon: <BsChatDots size={18} />,
      path: "/admin/messages",
      description: "View"
    }
  ];

  // Fetch applications from your API
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const token = localStorage.getItem("adminToken");
        if (!token) {
          navigate("/admin/login");
          return;
        }
        
        const response = await api.get("/admin/applications", {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        console.log("Applications data:", response.data); // Debug
        
        // Your backend returns array directly
        const apps = Array.isArray(response.data) ? response.data : [];
        
        // Format applications (add status field since your model doesn't have it)
        const formattedApps = apps.map(app => ({
          _id: app._id,
          fullName: app.fullName,
          email: app.email,
          phone: app.phone,
          instagram: app.instagram || "Not Available",
          program: app.program,
          fee: app.fee || 0,
          status: app.status || "pending", // Default since your schema doesn't have status
          appliedDate: app.createdAt,
          createdAt: app.createdAt,
          updatedAt: app.updatedAt
        }));
        
        setApplications(formattedApps);
        setFilteredApplications(formattedApps);
        
      } catch (err) {
        console.error("Error fetching applications:", err);
        
        if (err.response?.status === 401) {
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
          return;
        }
        
        setError("Failed to fetch applications. Please check your connection.");
        setApplications([]);
        setFilteredApplications([]);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [navigate]);

  // Filter applications
  useEffect(() => {
    let filtered = applications;
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(app =>
        app.fullName?.toLowerCase().includes(term) ||
        app.email?.toLowerCase().includes(term) ||
        app.program?.toLowerCase().includes(term) ||
        app.phone?.includes(searchTerm)
      );
    }
    
    if (statusFilter !== "all") {
      filtered = filtered.filter(app => app.status === statusFilter);
    }
    
    setFilteredApplications(filtered);
  }, [searchTerm, statusFilter, applications]);

  // Handle status update
  const handleStatusUpdate = async (appId, newStatus) => {
    try {
      setUpdating(true);
      const token = localStorage.getItem("adminToken");
      
      // Use your backend endpoint
      await api.patch(`/admin/applications/${appId}`, 
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      // Update in local state
      setApplications(prev => prev.map(app =>
        app._id === appId ? { ...app, status: newStatus } : app
      ));
      
      if (selectedApp?._id === appId) {
        setSelectedApp(prev => ({ ...prev, status: newStatus }));
      }
      
      setShowModal(false);
      alert(`Application status updated to ${newStatus}`);
      
    } catch (err) {
      console.error("Error updating status:", err);
      alert("Failed to update status. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  // Handle application deletion
  const handleDeleteApplication = async (appId) => {
    if (!window.confirm("Are you sure you want to delete this application?")) {
      return;
    }
    
    try {
      const token = localStorage.getItem("adminToken");
      await api.delete(`/admin/applications/${appId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // Remove from local state
      setApplications(prev => prev.filter(app => app._id !== appId));
      
      if (selectedApp?._id === appId) {
        setSelectedApp(null);
        setShowModal(false);
      }
      
      alert("Application deleted successfully");
    } catch (err) {
      console.error("Error deleting application:", err);
      alert("Failed to delete application.");
    }
  };

  const handleViewDetails = (app) => {
    setSelectedApp(app);
    setShowModal(true);
  };

  const getStatusBadge = (status) => {
    const config = {
      pending: { color: "warning", text: "Pending", icon: <BsClockHistory className="me-1" /> },
      accepted: { color: "success", text: "Accepted", icon: <BsCheckCircle className="me-1" /> },
      rejected: { color: "danger", text: "Rejected", icon: <BsXCircle className="me-1" /> }
    };
    const cfg = config[status] || config.pending;
    
    return (
      <Badge 
        bg={cfg.color} 
        className="d-inline-flex align-items-center px-2 py-1 rounded-pill"
        style={{ fontSize: '0.7rem', fontWeight: '500' }}
      >
        {cfg.icon}
        {cfg.text}
      </Badge>
    );
  };

  const getProgramColor = (program) => {
    const colors = {
      "Software Development": "#1A56DB",
      "Software Development (SOD)": "#1A56DB",
      "Networking & Internet Technology": "#7C3AED",
      "Networking & Internet Technology (NIT)": "#7C3AED",
      "Computer Systems and Architecture": "#F59E0B",
      "Computer Systems & Architecture": "#F59E0B",
      "Computer Systems & Architecture (CSA)": "#F59E0B",
      "Multimedia Productions": "#10B981",
      "Multimedia Productions (MMP)": "#10B981",
      "Electronics & Telecommunication": "#F59E0B",
      "Electronics & Telecommunications": "#F59E0B",
      "Electronics & Telecommunications (ETE)": "#F59E0B",
      "Holiday Tech Program": "#3B82F6"
    };
    
    for (const [key, color] of Object.entries(colors)) {
      if (program?.includes(key)) return color;
    }
    return "#1A56DB";
  };

  // Modal Component
  const ApplicationDetailsModal = ({ application, show, onHide }) => {
    if (!application) return null;
    
    return (
      <Modal 
        show={show} 
        onHide={onHide} 
        centered
        size="lg"
        className="border-0"
      >
        <Modal.Header 
          closeButton 
          className="border-0 pb-1"
          style={{ backgroundColor: lightBg }}
        >
          <Modal.Title className="fw-bold" style={{ color: primaryColor, fontSize: '1.1rem' }}>
            <BsLaptop className="me-2" />
            Application Details
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body className="pt-2">
          {/* Program Header */}
          <div className="text-center mb-4">
            <div 
              className="badge mb-2 px-3 py-2 rounded-pill"
              style={{ 
                backgroundColor: `${getProgramColor(application.program)}20`,
                color: getProgramColor(application.program),
                fontSize: '0.9rem',
                fontWeight: '500'
              }}
            >
              {application.program || 'Program'}
            </div>
            <div className="border-bottom pb-3 mb-3"></div>
          </div>

          {/* Applicant Information */}
          <div className="row g-3">
            <div className="col-md-6">
              <div className="mb-3">
                <h6 className="fw-semibold mb-2 d-flex align-items-center gap-1" style={{ color: primaryColor }}>
                  <BsPerson size={16} />
                  Personal Information
                </h6>
                
                <div className="bg-light rounded-3 p-3 border" style={{ backgroundColor: `${primaryColor}08` }}>
                  <div className="mb-3">
                    <small className="text-muted d-block mb-1">Full Name</small>
                    <div className="fw-medium d-flex align-items-center gap-2">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ 
                          width: 32, 
                          height: 32, 
                          backgroundColor: `${getProgramColor(application.program)}20`,
                          color: getProgramColor(application.program),
                          fontSize: '0.9rem',
                          fontWeight: '600'
                        }}
                      >
                        {application.fullName?.charAt(0) || 'A'}
                      </div>
                      <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>{application.fullName || 'N/A'}</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <small className="text-muted d-block mb-1 d-flex align-items-center gap-1">
                      <BsEnvelopeFill size={12} />
                      Email
                    </small>
                    <div className="fw-medium" style={{ fontSize: '0.9rem', color: '#374151' }}>
                      <a href={`mailto:${application.email}`} style={{ color: primaryColor, textDecoration: 'none' }}>
                        {application.email || 'N/A'}
                      </a>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <small className="text-muted d-block mb-1 d-flex align-items-center gap-1">
                      <BsPhoneIcon size={12} />
                      Phone
                    </small>
                    <div className="fw-medium" style={{ fontSize: '0.9rem', color: '#374151' }}>
                      <a href={`tel:${application.phone}`} style={{ color: primaryColor, textDecoration: 'none' }}>
                        {application.phone || 'N/A'}
                      </a>
                    </div>
                  </div>

                  <div className="mb-0">
                    <small className="text-muted d-block mb-1 d-flex align-items-center gap-1">
                      <BsInstagram size={12} />
                      Instagram
                    </small>
                    <div className="fw-medium" style={{ fontSize: '0.9rem', color: '#374151' }}>
                      {application.instagram || 'Not Available'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <h6 className="fw-semibold mb-2" style={{ color: primaryColor }}>Application Details</h6>
                
                <div className="bg-light rounded-3 p-3 border h-100" style={{ backgroundColor: `${primaryColor}08` }}>
                  <div className="mb-3">
                    <small className="text-muted d-block mb-1">Program Applied</small>
                    <div className="fw-medium d-flex align-items-center gap-2" style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ 
                          width: 24, 
                          height: 24, 
                          backgroundColor: `${getProgramColor(application.program)}20`,
                          color: getProgramColor(application.program),
                          fontSize: '0.8rem'
                        }}
                      >
                        <BsLaptop size={12} />
                      </div>
                      {application.program || 'Not specified'}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <small className="text-muted d-block mb-1">Registration Fee</small>
                    <div className="fw-medium" style={{ fontSize: '0.95rem', fontWeight: '500', color: '#10B981' }}>
                      {application.fee ? `RWF ${application.fee.toLocaleString()}` : 'Free'}
                    </div>
                  </div>
                  
                  <div className="mb-0">
                    <small className="text-muted d-block mb-1">Applied Date</small>
                    <div className="fw-medium" style={{ fontSize: '0.9rem', color: '#374151' }}>
                      {application.appliedDate ? new Date(application.appliedDate).toLocaleDateString('en-US', {
                        weekday: 'short',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      }) : 'N/A'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status and Actions */}
          <div className="border-top pt-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
              <div className="d-flex align-items-center gap-2">
                <span className="text-muted" style={{ fontSize: '0.85rem' }}>Current Status:</span>
                {getStatusBadge(application.status)}
              </div>
              <div className="d-flex gap-2 w-100 w-md-auto">
                <Button 
                  variant="success" 
                  size="sm"
                  className="flex-grow-1 flex-md-grow-0 rounded-pill px-3"
                  onClick={() => handleStatusUpdate(application._id, "accepted")}
                  disabled={updating}
                  style={{ fontSize: '0.85rem', fontWeight: '500' }}
                >
                  <BsCheckCircle className="me-1" />
                  Accept
                </Button>
                <Button 
                  variant="danger"
                  size="sm"
                  className="flex-grow-1 flex-md-grow-0 rounded-pill px-3"
                  onClick={() => handleStatusUpdate(application._id, "rejected")}
                  disabled={updating}
                  style={{ fontSize: '0.85rem', fontWeight: '500' }}
                >
                  <BsXCircle className="me-1" />
                  Reject
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: lightBg }}>
        <Spinner animation="border" variant="primary" />
        <span className="mt-3" style={{ color: primaryColor, fontWeight: '500' }}>Loading applications...</span>
      </div>
    );
  }

  return (
    <div className="min-vh-100" style={{ backgroundColor: lightBg }}>
      {/* HEADER */}
      <div className="bg-white border-bottom shadow-sm sticky-top">
        <div className="container-fluid px-3 px-md-4 py-3">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center gap-3">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ 
                  width: 42, 
                  height: 42, 
                  background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 12px rgba(26, 86, 219, 0.2)'
                }}
              >
                <BsLaptop />
              </div>
              <div>
                <h5 className="fw-bold mb-1" style={{ color: primaryColor, fontSize: '1.1rem' }}>ICT Smart Solutions</h5>
                <small className="text-muted d-flex align-items-center gap-1" style={{ fontSize: '0.8rem' }}>
                  <BsPeople size={12} />
                  <span>{applications.length} total applications</span>
                </small>
              </div>
            </div>
            
            <div className="d-flex align-items-center gap-2">
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="outline"
                  className="p-2 rounded-circle"
                  style={{ 
                    border: `1px solid ${primaryColor}30`,
                    backgroundColor: 'white',
                    width: '42px',
                    height: '42px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}
                >
                  <BsPersonCircle size={20} color={primaryColor} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="shadow border-0" style={{ minWidth: '180px' }}>
                  <Dropdown.Header className="small text-muted">Admin Panel</Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item 
                    className="text-danger d-flex align-items-center gap-2"
                    onClick={handleLogout}
                  >
                    <BsPersonCircle size={14} />
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="d-lg-none">
            <div className="d-flex justify-content-between bg-white rounded-3 p-1 border" style={{ backgroundColor: `${primaryColor}05` }}>
              {navigationButtons.map((nav, index) => (
                <Button
                  key={index}
                  variant={nav.active ? "primary" : "outline"}
                  className="d-flex flex-column align-items-center justify-content-center py-2 px-1"
                  onClick={() => navigate(nav.path)}
                  style={{
                    background: nav.active ? `linear-gradient(135deg, ${primaryColor}, ${accentColor})` : 'transparent',
                    border: 'none',
                    color: nav.active ? 'white' : '#6B7280',
                    borderRadius: '8px',
                    flex: 1,
                    margin: '0 2px',
                    minHeight: '60px',
                    transition: 'all 0.2s'
                  }}
                >
                  <div className="position-relative">
                    {nav.icon}
                    {nav.count !== undefined && nav.count > 0 && (
                      <Badge 
                        bg={nav.active ? "light" : "danger"}
                        text={nav.active ? "dark" : "white"}
                        className="position-absolute top-0 start-100 translate-middle rounded-pill"
                        style={{ fontSize: "0.6rem", padding: "0.1rem 0.3rem" }}
                      >
                        {nav.count}
                      </Badge>
                    )}
                  </div>
                  <small className="mt-1 fw-medium" style={{ fontSize: '0.7rem', lineHeight: '1.1' }}>
                    {nav.title}
                  </small>
                  <small className="text-muted opacity-75" style={{ fontSize: '0.6rem' }}>
                    {nav.description}
                  </small>
                </Button>
              ))}
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="d-none d-lg-flex justify-content-center mt-3">
            <div className="d-flex gap-2 bg-white rounded-3 p-1 border" style={{ backgroundColor: `${primaryColor}05` }}>
              {navigationButtons.map((nav, index) => (
                <Button
                  key={index}
                  variant={nav.active ? "primary" : "outline"}
                  className="d-flex align-items-center gap-2 px-4 py-2 rounded-2"
                  onClick={() => navigate(nav.path)}
                  style={{
                    background: nav.active ? `linear-gradient(135deg, ${primaryColor}, ${accentColor})` : 'transparent',
                    border: 'none',
                    color: nav.active ? 'white' : '#6B7280',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'all 0.2s'
                  }}
                >
                  {nav.icon}
                  <span>{nav.title}</span>
                  {nav.count !== undefined && nav.count > 0 && (
                    <Badge 
                      bg={nav.active ? "light" : "danger"}
                      text={nav.active ? "dark" : "white"}
                      className="rounded-pill"
                      style={{ fontSize: "0.65rem", padding: "0.1rem 0.3rem", fontWeight: '600' }}
                    >
                      {nav.count}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container-fluid px-3 px-md-4 py-4">
        {/* SEARCH AND FILTERS */}
        <Card className="border-0 shadow-sm mb-4">
          <Card.Body className="p-3 p-md-4">
            <Row className="g-3 align-items-center">
              <Col xs={12} md={8}>
                <InputGroup size="md">
                  <InputGroup.Text 
                    style={{ 
                      backgroundColor: 'white', 
                      border: `1px solid ${primaryColor}30`,
                      borderRight: 0,
                      borderTopLeftRadius: '12px',
                      borderBottomLeftRadius: '12px'
                    }}
                  >
                    <BsSearch size={16} color={primaryColor} />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Search by name, email, phone, or program..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ 
                      border: `1px solid ${primaryColor}30`,
                      borderLeft: 0,
                      backgroundColor: 'white',
                      fontSize: '0.9rem',
                      borderTopRightRadius: '12px',
                      borderBottomRightRadius: '12px'
                    }}
                  />
                </InputGroup>
              </Col>
              
              <Col xs={12} md={4}>
                <div className="d-flex gap-2">
                  <Dropdown className="flex-grow-1">
                    <Dropdown.Toggle 
                      variant="outline-secondary" 
                      size="md"
                      className="d-flex align-items-center justify-content-center gap-2 w-100 rounded-2"
                      style={{ 
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        border: `1px solid ${primaryColor}30`,
                        backgroundColor: 'white'
                      }}
                    >
                      <BsFilter size={14} />
                      {statusFilter === 'all' ? 'All Status' : statusFilter}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="shadow border-0" style={{ minWidth: '200px' }}>
                      <Dropdown.Item 
                        onClick={() => setStatusFilter("all")}
                        className="d-flex align-items-center gap-2"
                      >
                        <BsFilter size={14} />
                        All Status
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item 
                        onClick={() => setStatusFilter("pending")}
                        className="d-flex align-items-center gap-2"
                      >
                        <BsClockHistory size={14} className="text-warning" />
                        Pending
                      </Dropdown.Item>
                      <Dropdown.Item 
                        onClick={() => setStatusFilter("accepted")}
                        className="d-flex align-items-center gap-2"
                      >
                        <BsCheckCircle size={14} className="text-success" />
                        Accepted
                      </Dropdown.Item>
                      <Dropdown.Item 
                        onClick={() => setStatusFilter("rejected")}
                        className="d-flex align-items-center gap-2"
                      >
                        <BsXCircle size={14} className="text-danger" />
                        Rejected
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  
                  <Button 
                    variant="outline-primary" 
                    size="md"
                    className="d-flex align-items-center justify-content-center rounded-2"
                    style={{ 
                      width: '46px',
                      border: `1px solid ${primaryColor}30`,
                      backgroundColor: 'white'
                    }}
                    title="Download Report"
                  >
                    <BsDownload size={16} />
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* ERROR MESSAGE */}
        {error && (
          <Alert 
            variant="danger" 
            className="mb-4 border-0 rounded-3"
            style={{ 
              backgroundColor: '#FEF2F2',
              borderLeft: `4px solid #DC2626`,
              fontSize: '0.9rem'
            }}
          >
            <div className="d-flex align-items-center gap-2">
              <BsXCircle size={16} />
              <span>{error}</span>
            </div>
          </Alert>
        )}

        {/* NO APPLICATIONS */}
        {!loading && applications.length === 0 && !error && (
          <Card className="border-0 shadow-sm rounded-3">
            <Card.Body className="text-center py-5">
              <BsPeople size={48} className="text-muted mb-3" />
              <h5 className="fw-bold mb-2" style={{ color: primaryColor }}>No Applications Yet</h5>
              <p className="text-muted mb-0" style={{ maxWidth: '400px', margin: '0 auto' }}>
                When students apply for training programs, they will appear here.
              </p>
            </Card.Body>
          </Card>
        )}

        {/* APPLICATIONS TABLE - DESKTOP */}
        {!loading && applications.length > 0 && (
          <div className="d-none d-lg-block">
            <Card className="border-0 shadow-sm rounded-3">
              <div className="table-responsive rounded-3">
                <Table hover className="mb-0" style={{ fontSize: '0.9rem' }}>
                  <thead style={{ 
                    backgroundColor: `${primaryColor}08`,
                    borderBottom: `2px solid ${primaryColor}20`
                  }}>
                    <tr>
                      <th className="py-3 px-4 fw-semibold border-0" style={{ color: primaryColor }}>APPLICANT</th>
                      <th className="py-3 px-4 fw-semibold border-0" style={{ color: primaryColor }}>PROGRAM</th>
                      <th className="py-3 px-4 fw-semibold border-0" style={{ color: primaryColor }}>PHONE</th>
                      <th className="py-3 px-4 fw-semibold border-0" style={{ color: primaryColor }}>FEE</th>
                      <th className="py-3 px-4 fw-semibold border-0" style={{ color: primaryColor }}>STATUS</th>
                      <th className="py-3 px-4 fw-semibold border-0 text-end" style={{ color: primaryColor }}>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredApplications.map((app) => (
                      <tr key={app._id} style={{ borderBottom: `1px solid ${primaryColor}10` }}>
                        <td className="py-3 px-4 border-0">
                          <div className="d-flex align-items-center gap-3">
                            <div 
                              className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                              style={{ 
                                width: 40, 
                                height: 40, 
                                backgroundColor: `${getProgramColor(app.program)}20`,
                                color: getProgramColor(app.program),
                                fontSize: '0.95rem',
                                fontWeight: '600',
                                boxShadow: `0 2px 6px ${getProgramColor(app.program)}20`
                              }}
                            >
                              {app.fullName?.charAt(0) || 'A'}
                            </div>
                            <div>
                              <div className="fw-semibold" style={{ fontSize: '0.95rem', color: '#374151' }}>
                                {app.fullName || 'Unknown'}
                              </div>
                              <small className="text-muted" style={{ fontSize: '0.8rem' }}>{app.email || 'No email'}</small>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 border-0">
                          <div className="fw-medium" style={{ fontSize: '0.9rem', color: '#374151' }}>
                            {app.program || 'Not specified'}
                          </div>
                        </td>
                        <td className="py-3 px-4 border-0">
                          <div className="fw-medium" style={{ fontSize: '0.9rem', color: '#374151' }}>
                            <a href={`tel:${app.phone}`} style={{ color: primaryColor, textDecoration: 'none' }}>
                              {app.phone || 'N/A'}
                            </a>
                          </div>
                        </td>
                        <td className="py-3 px-4 border-0">
                          <div className="fw-medium" style={{ fontSize: '0.9rem', color: '#10B981', fontWeight: '500' }}>
                            {app.fee ? `RWF ${app.fee.toLocaleString()}` : 'Free'}
                          </div>
                        </td>
                        <td className="py-3 px-4 border-0">
                          {getStatusBadge(app.status)}
                        </td>
                        <td className="py-3 px-4 border-0 text-end">
                          <div className="d-flex gap-1 justify-content-end">
                            <Button 
                              variant="outline-info" 
                              size="sm"
                              className="p-2 rounded-circle"
                              title="View Details"
                              onClick={() => handleViewDetails(app)}
                              style={{ 
                                width: '36px', 
                                height: '36px',
                                border: `1px solid ${primaryColor}30`
                              }}
                            >
                              <BsEye size={14} />
                            </Button>
                            <Button 
                              variant="outline-primary" 
                              size="sm"
                              className="p-2 rounded-circle"
                              title="Send Email"
                              onClick={() => window.location.href = `mailto:${app.email}`}
                              style={{ 
                                width: '36px', 
                                height: '36px',
                                border: `1px solid ${primaryColor}30`
                              }}
                            >
                              <BsEnvelope size={14} />
                            </Button>
                            <Dropdown>
                              <Dropdown.Toggle 
                                variant="outline-secondary" 
                                size="sm"
                                className="p-2 rounded-circle"
                                style={{ 
                                  width: '36px', 
                                  height: '36px',
                                  border: `1px solid ${primaryColor}30`
                                }}
                              >
                                <BsThreeDotsVertical size={14} />
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="shadow border-0">
                                <Dropdown.Item 
                                  onClick={() => handleStatusUpdate(app._id, "accepted")}
                                  className="d-flex align-items-center gap-2"
                                >
                                  <BsCheckCircle className="text-success" size={14} />
                                  Accept Application
                                </Dropdown.Item>
                                <Dropdown.Item 
                                  onClick={() => handleStatusUpdate(app._id, "rejected")}
                                  className="d-flex align-items-center gap-2"
                                >
                                  <BsXCircle className="text-danger" size={14} />
                                  Reject Application
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item 
                                  className="text-danger d-flex align-items-center gap-2"
                                  onClick={() => handleDeleteApplication(app._id)}
                                >
                                  Delete Application
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card>
          </div>
        )}

        {/* APPLICATIONS CARDS - MOBILE */}
        {!loading && applications.length > 0 && (
          <div className="d-lg-none">
            <div className="d-flex flex-column gap-3">
              {filteredApplications.map((app) => (
                <Card 
                  key={app._id}
                  className="border-0 shadow-sm rounded-3"
                  style={{ 
                    borderLeft: `4px solid ${getProgramColor(app.program)}`,
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <Card.Body className="p-3">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="d-flex align-items-center gap-3">
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{ 
                            width: 42, 
                            height: 42, 
                            backgroundColor: `${getProgramColor(app.program)}20`,
                            color: getProgramColor(app.program),
                            fontSize: '0.95rem',
                            fontWeight: '600'
                          }}
                        >
                          {app.fullName?.charAt(0) || 'A'}
                        </div>
                        <div>
                          <div className="fw-semibold mb-1" style={{ fontSize: '0.95rem', color: '#374151' }}>
                            {app.fullName || 'Unknown'}
                          </div>
                          <small className="text-muted d-block" style={{ fontSize: '0.8rem' }}>
                            <a href={`mailto:${app.email}`} style={{ color: primaryColor, textDecoration: 'none' }}>
                              {app.email || 'No email'}
                            </a>
                          </small>
                        </div>
                      </div>
                      {getStatusBadge(app.status)}
                    </div>
                    
                    <div className="mb-3">
                      <div className="fw-medium mb-2 d-flex align-items-center gap-2" style={{ fontSize: '0.9rem', color: '#374151' }}>
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{ 
                            width: 24, 
                            height: 24, 
                            backgroundColor: `${getProgramColor(app.program)}20`,
                            color: getProgramColor(app.program),
                            fontSize: '0.8rem'
                          }}
                        >
                          <BsLaptop size={12} />
                        </div>
                        {app.program || 'Not specified'}
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted d-flex align-items-center gap-1" style={{ fontSize: '0.8rem' }}>
                          <BsPhoneIcon size={12} />
                          <a href={`tel:${app.phone}`} style={{ color: primaryColor, textDecoration: 'none' }}>
                            {app.phone || 'N/A'}
                          </a>
                        </small>
                        <small className="fw-medium" style={{ fontSize: '0.85rem', color: '#10B981', fontWeight: '500' }}>
                          {app.fee ? `RWF ${app.fee.toLocaleString()}` : 'Free'}
                        </small>
                      </div>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                      <small className="text-muted" style={{ fontSize: '0.75rem' }}>
                        Applied: {app.appliedDate ? new Date(app.appliedDate).toLocaleDateString() : 'Unknown date'}
                      </small>
                      <div className="d-flex gap-2">
                        <Button 
                          variant="outline-info" 
                          size="sm"
                          className="p-1 rounded-circle"
                          title="View Details"
                          onClick={() => handleViewDetails(app)}
                          style={{ 
                            width: '34px', 
                            height: '34px',
                            border: `1px solid ${primaryColor}30`
                          }}
                        >
                          <BsEye size={14} />
                        </Button>
                        <Button 
                          variant="outline-primary" 
                          size="sm"
                          className="p-1 rounded-circle"
                          title="Send Email"
                          onClick={() => window.location.href = `mailto:${app.email}`}
                          style={{ 
                            width: '34px', 
                            height: '34px',
                            border: `1px solid ${primaryColor}30`
                          }}
                        >
                          <BsEnvelope size={14} />
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Application Details Modal */}
        <ApplicationDetailsModal
          application={selectedApp}
          show={showModal}
          onHide={() => setShowModal(false)}
        />
      </div>

      {/* MOBILE BOTTOM SPACER */}
      <div className="d-lg-none" style={{ height: '20px' }}></div>
    </div>
  );
};

export default Applications;