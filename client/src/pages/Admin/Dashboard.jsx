import { useEffect, useState } from "react";
import { Card, Row, Col, Spinner, Badge, Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  BsClipboardCheck,
  BsClockHistory,
  BsCheckCircle,
  BsEnvelopeExclamation,
  BsPeople,
  BsChatDots,
  BsHouseDoor,
  BsBell,
  BsPersonCircle,
  BsGear,
  BsLaptop,
  BsDatabase,
  BsPhone,
  BsCalendar
} from "react-icons/bs";
import api from "../../services/api";

// Use the same color scheme
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

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [recentApplicants, setRecentApplicants] = useState([]);
  const [recentMessages, setRecentMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
        // Get token from localStorage
        const token = localStorage.getItem("adminToken");
        if (!token) {
          navigate("/admin/login");
          return;
        }
        
        // Fetch dashboard stats from your API
        const statsRes = await api.get("/admin/dashboard", {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        // Fetch applications
        const appsRes = await api.get("/admin/applications", {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        // Fetch messages
        const messagesRes = await api.get("/admin/messages", {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        // Set stats from your backend
        setStats({
          totalApplications: statsRes.data.totalApplications || 0,
          pendingApplications: statsRes.data.pendingApplications || 0,
          acceptedApplications: 0, // Your backend doesn't track accepted
          unreadMessages: statsRes.data.unreadMessages || 0,
        });
        
        // Get recent applicants (last 4)
        const applications = appsRes.data || [];
        const recentApps = applications
          .slice(0, 4)
          .map(app => ({
            _id: app._id,
            fullName: app.fullName,
            email: app.email,
            program: app.program,
            status: "pending",
            createdAt: app.createdAt
          }));
        
        setRecentApplicants(recentApps);
        
        // Get recent messages (last 3)
        const messages = messagesRes.data || [];
        const recentMsgs = messages
          .slice(0, 3)
          .map(msg => ({
            _id: msg._id,
            name: msg.name,
            email: msg.email,
            message: msg.message || msg.subject,
            isRead: false, // Your schema doesn't have isRead field
            createdAt: msg.createdAt
          }));
        
        setRecentMessages(recentMsgs);
        
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        if (err.response?.status === 401) {
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
        }
        
        // Set default empty data
        setStats({
          totalApplications: 0,
          pendingApplications: 0,
          acceptedApplications: 0,
          unreadMessages: 0,
        });
        setRecentApplicants([]);
        setRecentMessages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const navigationButtons = [
    {
      title: "Dashboard",
      icon: <BsHouseDoor size={18} />,
      path: "/admin/dashboard",
      active: true,
      description: "Overview"
    },
    {
      title: "Applications",
      icon: <BsPeople size={18} />,
      path: "/admin/applications",
      count: stats?.totalApplications || 0,
      description: "Manage"
    },
    {
      title: "Messages",
      icon: <BsChatDots size={18} />,
      path: "/admin/messages",
      count: stats?.unreadMessages || 0,
      description: "View"
    }
  ];

  const statsCards = [
    {
      title: "Total Applicants",
      value: stats?.totalApplications || 0,
      icon: <BsClipboardCheck size={24} />,
      color: colors.primary,
      bg: `linear-gradient(135deg, ${colors.primary}15, ${colors.primary}05)`,
      borderColor: colors.primary,
      iconBg: `${colors.primary}20`,
      onClick: () => navigate("/admin/applications"),
    },
    {
      title: "Pending",
      value: stats?.pendingApplications || 0,
      icon: <BsClockHistory size={24} />,
      color: colors.warning,
      bg: `linear-gradient(135deg, ${colors.warning}15, ${colors.warning}05)`,
      borderColor: colors.warning,
      iconBg: `${colors.warning}20`,
      onClick: () => navigate("/admin/applications"),
    },
    {
      title: "Accepted",
      value: stats?.acceptedApplications || 0,
      icon: <BsCheckCircle size={24} />,
      color: colors.success,
      bg: `linear-gradient(135deg, ${colors.success}15, ${colors.success}05)`,
      borderColor: colors.success,
      iconBg: `${colors.success}20`,
      onClick: () => navigate("/admin/applications"),
    },
    {
      title: "Messages",
      value: stats?.unreadMessages || 0,
      icon: <BsEnvelopeExclamation size={24} />,
      color: colors.accent,
      bg: `linear-gradient(135deg, ${colors.accent}15, ${colors.accent}05)`,
      borderColor: colors.accent,
      iconBg: `${colors.accent}20`,
      onClick: () => navigate("/admin/messages"),
    },
  ];

  const getProgramColor = (program) => {
    const colorsMap = {
      "Software Development (SOD)": colors.primary,
      "Computer Systems & Architecture (CSA)": colors.secondary,
      "Networking & Internet Technology (NIT)": colors.accent,
      "Multimedia Productions (MMP)": colors.success,
      "Electronics & Telecommunications (ETE)": colors.warning,
      "Teacher Training Program": colors.teal,
      "Holiday Tech Program": colors.info,
      "Technical Support & ICT Supply": colors.gray,
      "Default": colors.primary
    };
    
    for (const [key, color] of Object.entries(colorsMap)) {
      if (program?.includes(key)) return color;
    }
    return colors.primary;
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div 
        className="min-vh-100 d-flex flex-column justify-content-center align-items-center" 
        style={{ backgroundColor: colors.light }}
      >
        <div className="d-flex align-items-center">
          <div style={{
            width: "50px",
            height: "50px",
            borderRadius: "15px",
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 10px 25px ${colors.primary}40`,
            marginRight: "15px"
          }}>
            <BsLaptop size={24} color="white" />
          </div>
          <div>
            <h6 className="fw-bold mb-1" style={{ color: colors.dark }}>ICT Smart Solutions</h6>
            <small className="text-muted">Admin Dashboard</small>
          </div>
        </div>
        <Spinner animation="border" variant="primary" className="mt-4" />
        <span className="mt-3 text-muted">Loading dashboard data...</span>
      </div>
    );
  }

  return (
    <div className="min-vh-100" style={{ backgroundColor: colors.light }}>
      {/* TOP NAVIGATION BAR */}
      <nav className="navbar navbar-light bg-white shadow-sm border-bottom sticky-top py-3">
        <div className="container-fluid px-3 px-md-4">
          <div className="d-flex align-items-center justify-content-between w-100">
            {/* Logo and Title */}
            <div className="d-flex align-items-center">
              <div 
                className="rounded-3 d-flex align-items-center justify-content-center me-3"
                style={{ 
                  width: 42, 
                  height: 42, 
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  color: 'white',
                  fontSize: '1rem',
                  boxShadow: `0 5px 15px ${colors.primary}30`
                }}
              >
                <BsLaptop size={20} />
              </div>
              <div>
                <h6 className="fw-bold mb-0" style={{ color: colors.dark, fontSize: '1.1rem' }}>
                  ICT Smart Solutions
                </h6>
                <small className="text-muted d-none d-sm-inline" style={{ fontSize: '0.8rem' }}>
                  Admin Dashboard
                </small>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="d-flex align-items-center gap-3">
              <div className="position-relative">
                <Button
                  variant="outline"
                  className="rounded-circle position-relative p-2"
                  style={{ 
                    border: `1px solid ${colors.lightGray}`,
                    width: '40px', 
                    height: '40px',
                    backgroundColor: 'white'
                  }}
                >
                  <BsBell size={16} color={colors.gray} />
                  {stats?.unreadMessages > 0 && (
                    <Badge
                      bg="danger"
                      className="position-absolute top-0 start-100 translate-middle"
                      style={{ 
                        fontSize: "0.6rem", 
                        padding: "0.2rem 0.4rem",
                        minWidth: "18px",
                        height: "18px",
                        borderRadius: "9px"
                      }}
                    >
                      {stats.unreadMessages}
                    </Badge>
                  )}
                </Button>
              </div>

              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="outline"
                  className="rounded-circle p-2"
                  style={{ 
                    border: `1px solid ${colors.lightGray}`,
                    width: '40px', 
                    height: '40px',
                    backgroundColor: 'white'
                  }}
                >
                  <BsPersonCircle size={18} color={colors.primary} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="shadow-lg border-0" style={{ borderRadius: "12px", marginTop: "10px" }}>
                  <Dropdown.Item 
                    className="d-flex align-items-center gap-2 py-2"
                    style={{ fontSize: "0.9rem" }}
                  >
                    <BsPersonCircle /> Admin Account
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item 
                    className="d-flex align-items-center gap-2 py-2 text-danger"
                    onClick={handleLogout}
                    style={{ fontSize: "0.9rem" }}
                  >
                    <BsGear /> Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          {/* MOBILE NAVIGATION TABS */}
          <div className="d-lg-none mt-3">
            <div className="d-flex justify-content-between bg-white rounded-3 p-1 border" style={{ borderColor: colors.lightGray }}>
              {navigationButtons.map((nav, index) => (
                <Button
                  key={index}
                  variant={nav.active ? "primary" : "outline"}
                  className="d-flex flex-column align-items-center justify-content-center py-2 px-1"
                  onClick={() => navigate(nav.path)}
                  style={{
                    backgroundColor: nav.active ? colors.primary : 'transparent',
                    border: 'none',
                    color: nav.active ? 'white' : colors.gray,
                    borderRadius: '10px',
                    flex: 1,
                    margin: '0 2px',
                    minHeight: '70px'
                  }}
                >
                  <div className="position-relative">
                    {nav.icon}
                    {nav.count !== undefined && nav.count > 0 && (
                      <Badge 
                        bg={nav.active ? "light" : "danger"}
                        text={nav.active ? "dark" : "white"}
                        className="position-absolute top-0 start-100 translate-middle"
                        style={{ 
                          fontSize: "0.6rem", 
                          padding: "0.2rem 0.4rem",
                          minWidth: "18px",
                          height: "18px",
                          borderRadius: "9px"
                        }}
                      >
                        {nav.count}
                      </Badge>
                    )}
                  </div>
                  <small className="mt-2" style={{ fontSize: '0.75rem', lineHeight: '1.1', fontWeight: '500' }}>
                    {nav.title}
                  </small>
                  <small className="text-muted opacity-75" style={{ fontSize: '0.65rem' }}>
                    {nav.description}
                  </small>
                </Button>
              ))}
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="d-none d-lg-flex justify-content-center mt-4">
            <div className="d-flex gap-2 bg-white rounded-3 p-1 border" style={{ borderColor: colors.lightGray }}>
              {navigationButtons.map((nav, index) => (
                <Button
                  key={index}
                  variant={nav.active ? "primary" : "outline"}
                  className="d-flex align-items-center gap-2 px-4 py-2"
                  onClick={() => navigate(nav.path)}
                  style={{
                    backgroundColor: nav.active ? colors.primary : 'transparent',
                    border: 'none',
                    color: nav.active ? 'white' : colors.gray,
                    borderRadius: '10px',
                    fontWeight: '500',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!nav.active) {
                      e.currentTarget.style.backgroundColor = `${colors.primary}10`;
                      e.currentTarget.style.color = colors.primary;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!nav.active) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = colors.gray;
                    }
                  }}
                >
                  {nav.icon}
                  <span>{nav.title}</span>
                  {nav.count !== undefined && nav.count > 0 && (
                    <Badge 
                      bg={nav.active ? "light" : "danger"}
                      text={nav.active ? "dark" : "white"}
                      style={{ 
                        fontSize: "0.75rem", 
                        padding: "0.25rem 0.5rem",
                        fontWeight: '600'
                      }}
                    >
                      {nav.count}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="container-fluid px-3 px-md-4 py-4">
        {/* WELCOME MESSAGE */}
        <div className="mb-4">
          <h4 className="fw-bold mb-2" style={{ color: colors.dark }}>
            Welcome back, Admin 👋
          </h4>
          <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
            Here's what's happening with your ICT Smart Solutions platform today.
          </p>
        </div>

        {/* STATS CARDS */}
        <Row className="g-3 mb-4">
          {statsCards.map((card, index) => (
            <Col xs={6} md={3} key={index}>
              <Card 
                className="border-0 shadow-sm h-100"
                onClick={card.onClick}
                style={{ 
                  cursor: 'pointer',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  border: `1px solid ${card.borderColor}20`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 10px 30px ${card.borderColor}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                }}
              >
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <div 
                      className="rounded-3 d-flex align-items-center justify-content-center"
                      style={{ 
                        width: 48, 
                        height: 48, 
                        backgroundColor: card.iconBg,
                        color: card.color,
                        fontSize: '1.2rem'
                      }}
                    >
                      {card.icon}
                    </div>
                  </div>
                  
                  <h3 className="fw-bold mb-2" style={{ color: card.color, fontSize: '2rem' }}>
                    {card.value}
                  </h3>
                  <h6 className="fw-semibold mb-3" style={{ color: colors.darkGray, fontSize: '0.95rem' }}>
                    {card.title}
                  </h6>
                  
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={card.onClick}
                    className="w-100 py-2 rounded-pill"
                    style={{
                      borderColor: card.color,
                      color: card.color,
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = card.color;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = card.color;
                    }}
                  >
                    View Details →
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* RECENT ACTIVITY */}
        <Row className="g-3">
          {/* Recent Applicants Card */}
          <Col xs={12} lg={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: colors.dark, fontSize: '1.1rem' }}>
                      Recent Applicants
                    </h6>
                    <small className="text-muted" style={{ fontSize: '0.85rem' }}>
                      Latest program applications
                    </small>
                  </div>
                  <Button 
                    variant="outline-primary" 
                    size="sm"
                    onClick={() => navigate("/admin/applications")}
                    className="py-2 px-3 rounded-pill"
                    style={{ 
                      borderColor: colors.primary,
                      color: colors.primary,
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}
                  >
                    View All →
                  </Button>
                </div>

                {recentApplicants.length === 0 ? (
                  <div className="text-center py-5">
                    <div 
                      className="rounded-3 mx-auto mb-3 d-flex align-items-center justify-content-center"
                      style={{ 
                        width: 64, 
                        height: 64, 
                        backgroundColor: `${colors.primary}10`,
                        color: colors.primary
                      }}
                    >
                      <BsPeople size={24} />
                    </div>
                    <p className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>
                      No applications received yet
                    </p>
                    <small className="text-muted" style={{ fontSize: '0.8rem' }}>
                      Applications will appear here
                    </small>
                  </div>
                ) : (
                  <div className="d-flex flex-column gap-3">
                    {recentApplicants.map((app, index) => (
                      <div
                        key={index}
                        className="d-flex align-items-center p-3 rounded-3 border"
                        style={{ 
                          backgroundColor: `${colors.warning}05`,
                          borderColor: `${colors.warning}15`,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onClick={() => navigate(`/admin/applications`)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateX(5px)';
                          e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateX(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                          style={{ 
                            width: 40, 
                            height: 40, 
                            backgroundColor: getProgramColor(app.program),
                            color: 'white',
                            fontSize: '1rem',
                            fontWeight: '600'
                          }}
                        >
                          {app.fullName?.charAt(0) || 'A'}
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <div 
                              className="fw-semibold text-dark text-truncate"
                              style={{ fontSize: '0.9rem' }}
                            >
                              {app.fullName}
                            </div>
                            <Badge 
                              style={{ 
                                backgroundColor: colors.warning,
                                color: 'white',
                                fontSize: '0.7rem',
                                fontWeight: '500',
                                padding: '0.25rem 0.5rem'
                              }}
                              className="rounded-pill"
                            >
                              Pending
                            </Badge>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <small 
                              className="text-muted text-truncate me-2"
                              style={{ fontSize: '0.8rem' }}
                            >
                              {app.program}
                            </small>
                            <small 
                              className="text-muted flex-shrink-0"
                              style={{ fontSize: '0.75rem' }}
                            >
                              <BsCalendar className="me-1" size={10} />
                              {formatDate(app.createdAt)}
                            </small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* Recent Messages Card */}
          <Col xs={12} lg={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: colors.dark, fontSize: '1.1rem' }}>
                      Recent Messages
                    </h6>
                    <small className="text-muted" style={{ fontSize: '0.85rem' }}>
                      Latest contact inquiries
                    </small>
                  </div>
                  <Button 
                    variant="outline-primary" 
                    size="sm"
                    onClick={() => navigate("/admin/messages")}
                    className="py-2 px-3 rounded-pill"
                    style={{ 
                      borderColor: colors.primary,
                      color: colors.primary,
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}
                  >
                    View All →
                  </Button>
                </div>

                {recentMessages.length === 0 ? (
                  <div className="text-center py-5">
                    <div 
                      className="rounded-3 mx-auto mb-3 d-flex align-items-center justify-content-center"
                      style={{ 
                        width: 64, 
                        height: 64, 
                        backgroundColor: `${colors.accent}10`,
                        color: colors.accent
                      }}
                    >
                      <BsChatDots size={24} />
                    </div>
                    <p className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>
                      No messages received yet
                    </p>
                    <small className="text-muted" style={{ fontSize: '0.8rem' }}>
                      Contact inquiries will appear here
                    </small>
                  </div>
                ) : (
                  <div className="d-flex flex-column gap-3">
                    {recentMessages.map((msg, index) => (
                      <div 
                        key={index} 
                        className="p-3 rounded-3 border"
                        style={{ 
                          backgroundColor: `${colors.primary}05`,
                          borderColor: `${colors.primary}15`,
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onClick={() => navigate(`/admin/messages`)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateX(5px)';
                          e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateX(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <div className="d-flex align-items-center gap-2">
                            <div 
                              className="fw-semibold text-dark"
                              style={{ fontSize: '0.9rem' }}
                            >
                              {msg.name}
                            </div>
                            <Badge 
                              style={{ 
                                backgroundColor: colors.primary,
                                color: 'white',
                                fontSize: '0.65rem',
                                fontWeight: '500',
                                padding: '0.2rem 0.4rem'
                              }}
                              className="rounded-pill"
                            >
                              New
                            </Badge>
                          </div>
                          <small 
                            className="text-muted flex-shrink-0"
                            style={{ fontSize: '0.75rem' }}
                          >
                            <BsCalendar className="me-1" size={10} />
                            {formatDate(msg.createdAt)}
                          </small>
                        </div>
                        <p 
                          className="text-muted mb-2 text-truncate"
                          style={{ fontSize: '0.85rem', lineHeight: '1.4' }}
                        >
                          {msg.message}
                        </p>
                        <small 
                          className="text-muted d-flex align-items-center"
                          style={{ fontSize: '0.8rem' }}
                        >
                          <BsEnvelopeExclamation className="me-1" size={12} />
                          {msg.email}
                        </small>
                      </div>
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* MOBILE BOTTOM SPACER */}
      <div className="d-lg-none" style={{ height: '80px' }}></div>

      {/* FOOTER */}
      <footer className="py-3 border-top bg-white d-none d-lg-block">
        <div className="container-fluid px-3 px-md-4">
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted" style={{ fontSize: '0.8rem' }}>
              © {new Date().getFullYear()} ICT Smart Solutions. Admin Dashboard v1.0
            </small>
            <small className="text-muted d-flex align-items-center gap-2" style={{ fontSize: '0.8rem' }}>
              <BsDatabase size={12} /> 
              <span>Total Data: {stats?.totalApplications || 0} records</span>
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;