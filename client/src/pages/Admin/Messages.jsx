// client/src/pages/admin/Messages.jsx
import { useState, useEffect } from "react";
import { Card, Table, Button, Badge, Form, InputGroup, Dropdown, Row, Col, Modal, Spinner, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  BsSearch,
  BsFilter,
  BsTrash,
  BsEye,
  BsEnvelope,
  BsPerson,
  BsCalendar,
  BsHouseDoor,
  BsPeople,
  BsChatDots,
  BsGear,
  BsPersonCircle,
  BsReply,
  BsDownload,
  BsXCircle,
  BsCheckCircle,
  BsTelephone,
  BsInbox,
  BsInboxFill
} from "react-icons/bs";
import api from "../../services/api";

const Messages = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const primaryColor = "#4361ee";
  const lightBg = "#f8f9fa";
  const darkBg = "#0d1117";
  const textColor = "#1a1a1a";
  const lightText = "#6c757d";

  // Navigation buttons
  const navigationButtons = [
    {
      title: "Dashboard",
      icon: <BsHouseDoor size={18} />,
      path: "/admin/dashboard",
      description: "Overview",
      active: false
    },
    {
      title: "Applications",
      icon: <BsPeople size={18} />,
      path: "/admin/applications",
      count: 0,
      description: "Manage",
      active: false
    },
    {
      title: "Messages",
      icon: <BsChatDots size={18} />,
      path: "/admin/messages",
      active: true,
      count: messages.filter(m => !m.isRead).length,
      description: "Inbox",
      active: true
    }
  ];

  // Fetch messages from API
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const token = localStorage.getItem("adminToken");
        if (!token) {
          navigate("/admin/login");
          return;
        }
        
        const response = await api.get("/admin/messages", {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        let msgs = [];
        if (response.data.success) {
          msgs = response.data.messages || [];
        } else if (Array.isArray(response.data)) {
          msgs = response.data;
        }
        
        // Sort messages: unread first, then by date (newest first)
        msgs.sort((a, b) => {
          if (a.isRead !== b.isRead) {
            return a.isRead ? 1 : -1;
          }
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        });
        
        setMessages(msgs);
        setFilteredMessages(msgs);
        
      } catch (err) {
        console.error("Error fetching messages:", err);
        
        if (err.response?.status === 401) {
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
          return;
        }
        
        setError("Failed to fetch messages. Please check your connection.");
        setMessages([]);
        setFilteredMessages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [navigate]);

  // Filter messages
  useEffect(() => {
    let filtered = messages;
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(msg =>
        msg.name?.toLowerCase().includes(term) ||
        msg.email?.toLowerCase().includes(term) ||
        msg.subject?.toLowerCase().includes(term) ||
        msg.message?.toLowerCase().includes(term)
      );
    }
    
    if (statusFilter !== "all") {
      filtered = filtered.filter(msg => 
        statusFilter === "unread" ? !msg.isRead : msg.isRead
      );
    }
    
    setFilteredMessages(filtered);
  }, [searchTerm, statusFilter, messages]);

  // Mark message as read
  const handleMarkAsRead = async (messageId) => {
    try {
      const token = localStorage.getItem("adminToken");
      await api.patch(`/admin/messages/${messageId}/read`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setMessages(prev => prev.map(msg =>
        msg._id === messageId ? { ...msg, isRead: true } : msg
      ));
      
      if (selectedMessage?._id === messageId) {
        setSelectedMessage(prev => ({ ...prev, isRead: true }));
      }
    } catch (err) {
      console.error("Error marking message as read:", err);
    }
  };

  // Mark message as unread
  const handleMarkAsUnread = async (messageId) => {
    try {
      const token = localStorage.getItem("adminToken");
      await api.patch(`/admin/messages/${messageId}/unread`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setMessages(prev => prev.map(msg =>
        msg._id === messageId ? { ...msg, isRead: false } : msg
      ));
      
      if (selectedMessage?._id === messageId) {
        setSelectedMessage(prev => ({ ...prev, isRead: false }));
      }
    } catch (err) {
      console.error("Error marking message as unread:", err);
    }
  };

  // Delete message
  const handleDeleteMessage = async (messageId) => {
    if (!window.confirm("Are you sure you want to delete this message?")) {
      return;
    }
    
    try {
      setDeleting(true);
      const token = localStorage.getItem("adminToken");
      await api.delete(`/admin/messages/${messageId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setMessages(prev => prev.filter(msg => msg._id !== messageId));
      
      if (selectedMessage?._id === messageId) {
        setSelectedMessage(null);
        setShowModal(false);
      }
    } catch (err) {
      console.error("Error deleting message:", err);
      alert("Failed to delete message.");
    } finally {
      setDeleting(false);
    }
  };

  // Handle view details
  const handleViewDetails = (message) => {
    setSelectedMessage(message);
    setShowModal(true);
    
    // Mark as read when viewing details
    if (!message.isRead) {
      handleMarkAsRead(message._id);
    }
  };

  const handleReply = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  // Modal Component
  const MessageDetailsModal = ({ message, show, onHide }) => {
    if (!message) return null;
    
    return (
      <Modal 
        show={show} 
        onHide={onHide} 
        centered
        size="lg"
        backdrop="static"
      >
        <Modal.Header closeButton style={{ borderBottom: `1px solid ${lightBg}`, padding: '1rem 1.5rem' }}>
          <Modal.Title style={{ fontSize: '1.25rem', fontWeight: '600', color: textColor }}>
            <BsEnvelope className="me-2" style={{ color: primaryColor }} />
            Message Details
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body style={{ padding: '1.5rem' }}>
          {/* Sender Info */}
          <div className="d-flex align-items-center gap-3 mb-4 p-3" style={{ backgroundColor: lightBg, borderRadius: '12px' }}>
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
              style={{ 
                width: 56, 
                height: 56, 
                backgroundColor: `${primaryColor}15`,
                color: primaryColor,
                fontSize: '1.25rem',
                fontWeight: '600'
              }}
            >
              {message.name?.charAt(0) || 'U'}
            </div>
            <div className="flex-grow-1">
              <div className="d-flex align-items-center gap-2 mb-1">
                <h5 className="fw-bold mb-0" style={{ color: textColor, fontSize: '1.1rem' }}>
                  {message.name || "Unknown Sender"}
                </h5>
                <Badge 
                  bg={message.isRead ? "secondary" : "primary"}
                  style={{ 
                    fontSize: '0.7rem', 
                    padding: '0.25rem 0.5rem',
                    borderRadius: '12px'
                  }}
                >
                  {message.isRead ? "READ" : "NEW"}
                </Badge>
              </div>
              <p className="mb-1" style={{ color: lightText, fontSize: '0.9rem' }}>
                <BsEnvelope size={12} className="me-1" />
                {message.email}
              </p>
              {message.phone && (
                <p className="mb-0" style={{ color: lightText, fontSize: '0.9rem' }}>
                  <BsTelephone size={12} className="me-1" />
                  {message.phone}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="mb-4">
            <h6 className="fw-semibold mb-2" style={{ color: textColor, fontSize: '0.9rem' }}>
              SUBJECT
            </h6>
            <div className="p-3" style={{ 
              backgroundColor: lightBg, 
              borderRadius: '8px',
              borderLeft: `3px solid ${primaryColor}`
            }}>
              <p className="fw-medium mb-0" style={{ color: textColor, fontSize: '0.95rem' }}>
                {message.subject || "No Subject"}
              </p>
            </div>
          </div>

          {/* Message Content */}
          <div className="mb-4">
            <h6 className="fw-semibold mb-2" style={{ color: textColor, fontSize: '0.9rem' }}>
              MESSAGE
            </h6>
            <div className="p-3" style={{ 
              backgroundColor: lightBg, 
              borderRadius: '8px',
              minHeight: '120px'
            }}>
              <p className="mb-0" style={{ 
                whiteSpace: 'pre-wrap',
                color: textColor,
                fontSize: '0.9rem',
                lineHeight: '1.6'
              }}>
                {message.message || "No message content"}
              </p>
            </div>
          </div>

          {/* Meta Info and Actions */}
          <div className="row g-3">
            <div className="col-md-6">
              <div className="p-3 h-100" style={{ 
                backgroundColor: lightBg, 
                borderRadius: '12px'
              }}>
                <h6 className="fw-semibold mb-3" style={{ color: textColor, fontSize: '0.9rem' }}>
                  MESSAGE DETAILS
                </h6>
                <div className="mb-3">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <BsCalendar size={14} style={{ color: primaryColor }} />
                    <small style={{ color: lightText, fontSize: '0.8rem' }}>Received Date</small>
                  </div>
                  <div style={{ color: textColor, fontSize: '0.9rem', fontWeight: '500' }}>
                    {message.createdAt ? new Date(message.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    }) : "N/A"}
                  </div>
                </div>
                <div>
                  <small style={{ color: lightText, fontSize: '0.8rem' }}>Status</small>
                  <div>
                    <Badge 
                      bg={message.isRead ? "secondary" : "primary"}
                      style={{ 
                        fontSize: '0.75rem', 
                        padding: '0.35rem 0.75rem',
                        borderRadius: '12px'
                      }}
                    >
                      {message.isRead ? "READ" : "UNREAD"}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="p-3 h-100" style={{ 
                backgroundColor: `${primaryColor}08`, 
                borderRadius: '12px',
                border: `1px solid ${primaryColor}15`
              }}>
                <h6 className="fw-semibold mb-3" style={{ color: textColor, fontSize: '0.9rem' }}>
                  QUICK ACTIONS
                </h6>
                <div className="d-flex flex-column gap-2">
                  <Button 
                    variant="primary" 
                    size="sm"
                    className="d-flex align-items-center justify-content-center gap-2 py-2"
                    onClick={() => handleReply(message.email)}
                    style={{ 
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}
                  >
                    <BsReply size={14} />
                    Reply via Email
                  </Button>
                  
                  <div className="d-flex gap-2">
                    {message.isRead ? (
                      <Button 
                        variant="outline-secondary" 
                        size="sm"
                        className="d-flex align-items-center justify-content-center gap-2 flex-grow-1 py-2"
                        onClick={() => handleMarkAsUnread(message._id)}
                        style={{ 
                          borderRadius: '8px',
                          fontSize: '0.85rem',
                          fontWeight: '500'
                        }}
                      >
                        <BsInbox size={14} />
                        Mark Unread
                      </Button>
                    ) : (
                      <Button 
                        variant="outline-success" 
                        size="sm"
                        className="d-flex align-items-center justify-content-center gap-2 flex-grow-1 py-2"
                        onClick={() => handleMarkAsRead(message._id)}
                        style={{ 
                          borderRadius: '8px',
                          fontSize: '0.85rem',
                          fontWeight: '500'
                        }}
                      >
                        <BsCheckCircle size={14} />
                        Mark Read
                      </Button>
                    )}
                    
                    <Button 
                      variant="outline-danger" 
                      size="sm"
                      className="d-flex align-items-center justify-content-center gap-2 flex-grow-1 py-2"
                      onClick={() => handleDeleteMessage(message._id)}
                      disabled={deleting}
                      style={{ 
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        fontWeight: '500'
                      }}
                    >
                      <BsTrash size={14} />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: lightBg }}>
        <div className="text-center">
          <Spinner animation="border" variant="primary" style={{ width: '3rem', height: '3rem' }} />
          <p className="mt-3" style={{ color: textColor, fontSize: '0.95rem' }}>Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100" style={{ backgroundColor: lightBg }}>
      {/* HEADER */}
      <div className="bg-white border-bottom sticky-top" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
        <div className="container-fluid px-3 py-3">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center gap-3">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ 
                  width: 48, 
                  height: 48, 
                  backgroundColor: primaryColor,
                  color: 'white',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  boxShadow: `0 4px 12px ${primaryColor}40`
                }}
              >
                <BsInboxFill size={20} />
              </div>
              <div>
                <h4 className="fw-bold mb-1" style={{ color: textColor, fontSize: '1.5rem' }}>
                  Messages
                </h4>
                <div className="d-flex align-items-center gap-3">
                  <small className="text-muted" style={{ fontSize: '0.85rem' }}>
                    <span className="fw-medium" style={{ color: textColor }}>{messages.length}</span> total messages
                  </small>
                  <span style={{ color: lightText }}>•</span>
                  <small className="text-muted" style={{ fontSize: '0.85rem' }}>
                    <span className="fw-medium" style={{ color: primaryColor }}>{messages.filter(m => !m.isRead).length}</span> unread
                  </small>
                </div>
              </div>
            </div>
            
            <div className="d-flex align-items-center gap-2">
              {/* Profile Dropdown */}
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="outline"
                  className="p-1"
                  style={{ 
                    border: 'none', 
                    width: '40px', 
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: lightBg
                  }}
                >
                  <BsPersonCircle size={20} color={primaryColor} />
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ 
                  border: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  borderRadius: '12px',
                  padding: '0.5rem'
                }}>
                  <Dropdown.Item 
                    className="text-danger" 
                    onClick={handleLogout}
                    style={{ 
                      borderRadius: '8px',
                      padding: '0.5rem 1rem',
                      fontSize: '0.9rem'
                    }}
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          {/* NAVIGATION - Mobile */}
          <div className="d-lg-none mb-3">
            <div className="d-flex justify-content-between bg-light rounded-3 p-1">
              {navigationButtons.map((nav, index) => (
                <Button
                  key={index}
                  variant={nav.active ? "primary" : "outline"}
                  className="d-flex flex-column align-items-center justify-content-center py-2 px-1"
                  onClick={() => navigate(nav.path)}
                  style={{
                    backgroundColor: nav.active ? primaryColor : 'transparent',
                    border: 'none',
                    color: nav.active ? 'white' : lightText,
                    borderRadius: '10px',
                    flex: 1,
                    margin: '0 2px',
                    minHeight: '70px',
                    transition: 'all 0.2s ease'
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
                          fontSize: "0.65rem", 
                          padding: "0.2rem 0.4rem",
                          minWidth: '20px'
                        }}
                      >
                        {nav.count}
                      </Badge>
                    )}
                  </div>
                  <small className="mt-2" style={{ fontSize: '0.75rem', lineHeight: '1.2', fontWeight: '500' }}>
                    {nav.title}
                  </small>
                  <small className="opacity-75" style={{ 
                    fontSize: '0.65rem',
                    color: nav.active ? 'rgba(255,255,255,0.9)' : lightText
                  }}>
                    {nav.description}
                  </small>
                </Button>
              ))}
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="d-none d-lg-flex justify-content-start mb-2">
            <div className="d-flex gap-2 bg-light rounded-3 p-1">
              {navigationButtons.map((nav, index) => (
                <Button
                  key={index}
                  variant={nav.active ? "primary" : "outline"}
                  className="d-flex align-items-center gap-2 px-4 py-2"
                  onClick={() => navigate(nav.path)}
                  style={{
                    backgroundColor: nav.active ? primaryColor : 'transparent',
                    border: 'none',
                    color: nav.active ? 'white' : lightText,
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {nav.icon}
                  <span>{nav.title}</span>
                  {nav.count !== undefined && nav.count > 0 && (
                    <Badge 
                      bg={nav.active ? "light" : "danger"}
                      text={nav.active ? "dark" : "white"}
                      style={{ 
                        fontSize: "0.7rem", 
                        padding: "0.2rem 0.5rem",
                        borderRadius: '12px',
                        minWidth: '24px'
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
      </div>

      {/* MAIN CONTENT */}
      <div className="container-fluid px-3 py-4">
        {/* SEARCH AND FILTERS */}
        <Card className="border-0 shadow-sm mb-4" style={{ borderRadius: '12px' }}>
          <Card.Body className="p-3">
            <Row className="g-3 align-items-center">
              <Col xs={12} md={8}>
                <InputGroup>
                  <InputGroup.Text style={{ 
                    backgroundColor: lightBg, 
                    border: `1px solid ${lightBg}`,
                    borderRight: 'none',
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px'
                  }}>
                    <BsSearch size={16} color={lightText} />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Search messages by name, email, subject, or content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ 
                      border: `1px solid ${lightBg}`,
                      borderLeft: 'none',
                      backgroundColor: lightBg,
                      fontSize: '0.9rem',
                      borderTopRightRadius: '10px',
                      borderBottomRightRadius: '10px'
                    }}
                  />
                </InputGroup>
              </Col>
              
              <Col xs={12} md={4}>
                <div className="d-flex gap-2">
                  <Dropdown className="flex-grow-1">
                    <Dropdown.Toggle 
                      variant="outline-secondary" 
                      className="d-flex align-items-center justify-content-center gap-2 w-100"
                      style={{ 
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        borderRadius: '10px',
                        border: `1px solid ${lightBg}`,
                        backgroundColor: lightBg,
                        color: textColor
                      }}
                    >
                      <BsFilter size={14} />
                      {statusFilter === 'all' ? 'All Messages' : statusFilter === 'unread' ? 'Unread Only' : 'Read Only'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ 
                      borderRadius: '10px',
                      border: 'none',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      padding: '0.5rem'
                    }}>
                      <Dropdown.Item 
                        onClick={() => setStatusFilter("all")}
                        active={statusFilter === "all"}
                        style={{ 
                          borderRadius: '8px',
                          padding: '0.5rem 1rem',
                          fontSize: '0.9rem'
                        }}
                      >
                        All Messages
                      </Dropdown.Item>
                      <Dropdown.Item 
                        onClick={() => setStatusFilter("unread")}
                        active={statusFilter === "unread"}
                        style={{ 
                          borderRadius: '8px',
                          padding: '0.5rem 1rem',
                          fontSize: '0.9rem'
                        }}
                      >
                        Unread Only
                      </Dropdown.Item>
                      <Dropdown.Item 
                        onClick={() => setStatusFilter("read")}
                        active={statusFilter === "read"}
                        style={{ 
                          borderRadius: '8px',
                          padding: '0.5rem 1rem',
                          fontSize: '0.9rem'
                        }}
                      >
                        Read Only
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  
                  <Button 
                    variant="outline-primary" 
                    className="d-flex align-items-center justify-content-center px-3"
                    style={{ 
                      borderRadius: '10px',
                      border: `1px solid ${primaryColor}30`,
                      backgroundColor: `${primaryColor}08`
                    }}
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
          <Alert variant="danger" className="mb-4 border-0" style={{ 
            borderRadius: '12px',
            backgroundColor: '#fff5f5',
            border: '1px solid #fed7d7',
            color: '#9b2c2c'
          }}>
            <BsXCircle className="me-2" />
            {error}
          </Alert>
        )}

        {/* NO MESSAGES */}
        {!loading && messages.length === 0 && !error && (
          <Card className="border-0 shadow-sm" style={{ borderRadius: '12px' }}>
            <Card.Body className="text-center py-5">
              <div className="mb-4">
                <div className="rounded-circle d-inline-flex align-items-center justify-content-center p-4" 
                  style={{ 
                    backgroundColor: `${primaryColor}10`,
                    color: primaryColor
                  }}
                >
                  <BsEnvelope size={48} />
                </div>
              </div>
              <h5 className="fw-bold mb-3" style={{ color: textColor }}>
                No Messages Yet
              </h5>
              <p className="text-muted mb-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
                When visitors contact you through the contact form, their messages will appear here.
              </p>
              <Button 
                variant="outline-primary"
                onClick={() => window.location.reload()}
                style={{ borderRadius: '8px' }}
              >
                Refresh Messages
              </Button>
            </Card.Body>
          </Card>
        )}

        {/* MESSAGES TABLE - DESKTOP */}
        {!loading && messages.length > 0 && (
          <div className="d-none d-lg-block">
            <Card className="border-0 shadow-sm" style={{ borderRadius: '12px', overflow: 'hidden' }}>
              <div className="table-responsive">
                <Table hover className="mb-0" style={{ fontSize: '0.9rem' }}>
                  <thead style={{ backgroundColor: darkBg }}>
                    <tr>
                      <th className="py-3 px-4 fw-semibold border-0" style={{ color: 'white', fontSize: '0.85rem' }}>
                        SENDER
                      </th>
                      <th className="py-3 px-4 fw-semibold border-0" style={{ color: 'white', fontSize: '0.85rem' }}>
                        SUBJECT
                      </th>
                      <th className="py-3 px-4 fw-semibold border-0" style={{ color: 'white', fontSize: '0.85rem' }}>
                        MESSAGE PREVIEW
                      </th>
                      <th className="py-3 px-4 fw-semibold border-0" style={{ color: 'white', fontSize: '0.85rem' }}>
                        DATE
                      </th>
                      <th className="py-3 px-4 fw-semibold border-0" style={{ color: 'white', fontSize: '0.85rem' }}>
                        STATUS
                      </th>
                      <th className="py-3 px-4 fw-semibold border-0 text-end" style={{ color: 'white', fontSize: '0.85rem' }}>
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMessages.map((msg) => (
                      <tr 
                        key={msg._id} 
                        className={`align-middle ${!msg.isRead ? 'bg-light' : ''}`}
                        style={{ 
                          borderBottom: '1px solid #f1f1f1',
                          cursor: 'pointer'
                        }}
                        onClick={() => handleViewDetails(msg)}
                      >
                        <td className="py-3 px-4 border-0">
                          <div className="d-flex align-items-center gap-3">
                            <div 
                              className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                              style={{ 
                                width: 40, 
                                height: 40, 
                                backgroundColor: `${primaryColor}15`,
                                color: primaryColor,
                                fontSize: '0.95rem',
                                fontWeight: '600'
                              }}
                            >
                              {msg.name?.charAt(0) || 'U'}
                            </div>
                            <div>
                              <div className="fw-semibold" style={{ 
                                fontSize: '0.9rem',
                                color: textColor
                              }}>
                                {msg.name || "Unknown"}
                              </div>
                              <small className="text-muted" style={{ fontSize: '0.8rem' }}>
                                {msg.email || 'No email'}
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 border-0">
                          <div className="fw-medium" style={{ 
                            fontSize: '0.9rem',
                            color: textColor
                          }}>
                            {msg.subject || "No Subject"}
                          </div>
                        </td>
                        <td className="py-3 px-4 border-0">
                          <div className="text-muted" style={{ 
                            fontSize: '0.85rem',
                            maxWidth: '300px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}>
                            {msg.message || "No message content"}
                          </div>
                        </td>
                        <td className="py-3 px-4 border-0">
                          <div style={{ fontSize: '0.85rem', color: lightText }}>
                            {msg.createdAt ? new Date(msg.createdAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric'
                            }) : 'N/A'}
                          </div>
                        </td>
                        <td className="py-3 px-4 border-0">
                          <Badge 
                            bg={msg.isRead ? "secondary" : "primary"}
                            style={{ 
                              fontSize: '0.75rem', 
                              padding: '0.35rem 0.75rem',
                              borderRadius: '12px',
                              fontWeight: '500'
                            }}
                          >
                            {msg.isRead ? "READ" : "NEW"}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 border-0 text-end">
                          <div className="d-flex gap-1 justify-content-end">
                            <Button 
                              variant="outline-primary" 
                              size="sm"
                              className="p-2"
                              title="View Message"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleViewDetails(msg);
                              }}
                              style={{ 
                                width: '36px', 
                                height: '36px',
                                borderRadius: '8px'
                              }}
                            >
                              <BsEye size={16} />
                            </Button>
                            <Button 
                              variant="outline-success" 
                              size="sm"
                              className="p-2"
                              title="Reply"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleReply(msg.email);
                              }}
                              style={{ 
                                width: '36px', 
                                height: '36px',
                                borderRadius: '8px'
                              }}
                            >
                              <BsReply size={16} />
                            </Button>
                            <Button 
                              variant="outline-danger" 
                              size="sm"
                              className="p-2"
                              title="Delete"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteMessage(msg._id);
                              }}
                              disabled={deleting}
                              style={{ 
                                width: '36px', 
                                height: '36px',
                                borderRadius: '8px'
                              }}
                            >
                              <BsTrash size={16} />
                            </Button>
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

        {/* MESSAGES CARDS - MOBILE */}
        {!loading && messages.length > 0 && (
          <div className="d-lg-none">
            <div className="d-flex flex-column gap-3">
              {filteredMessages.map((msg) => (
                <Card 
                  key={msg._id}
                  className="border-0 shadow-sm"
                  style={{ 
                    borderRadius: '12px',
                    borderLeft: !msg.isRead ? `4px solid ${primaryColor}` : '4px solid transparent',
                    backgroundColor: !msg.isRead ? `${primaryColor}05` : 'white',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleViewDetails(msg)}
                >
                  <Card.Body className="p-3">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="d-flex align-items-center gap-3">
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{ 
                            width: 44, 
                            height: 44, 
                            backgroundColor: `${primaryColor}15`,
                            color: primaryColor,
                            fontSize: '1rem',
                            fontWeight: '600'
                          }}
                        >
                          {msg.name?.charAt(0) || 'U'}
                        </div>
                        <div>
                          <div className="fw-semibold mb-1" style={{ 
                            fontSize: '0.95rem',
                            color: textColor
                          }}>
                            {msg.name || "Unknown"}
                          </div>
                          <small className="text-muted" style={{ fontSize: '0.8rem' }}>
                            {msg.email || 'No email'}
                          </small>
                        </div>
                      </div>
                      <Badge 
                        bg={msg.isRead ? "secondary" : "primary"}
                        style={{ 
                          fontSize: '0.7rem', 
                          padding: '0.3rem 0.6rem',
                          borderRadius: '12px',
                          fontWeight: '500'
                        }}
                      >
                        {msg.isRead ? "READ" : "NEW"}
                      </Badge>
                    </div>
                    
                    <div className="mb-3">
                      <div className="fw-medium mb-2" style={{ 
                        fontSize: '0.9rem',
                        color: textColor
                      }}>
                        {msg.subject || "No Subject"}
                      </div>
                      <div className="text-muted mb-3" style={{ 
                        fontSize: '0.85rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        lineHeight: '1.5'
                      }}>
                        {msg.message || "No message content"}
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <small className="text-muted" style={{ fontSize: '0.8rem' }}>
                          <BsCalendar className="me-1" />
                          {msg.createdAt ? new Date(msg.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          }) : 'Unknown date'}
                        </small>
                      </div>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex gap-2">
                        <Button 
                          variant="outline-primary" 
                          size="sm"
                          className="p-2"
                          title="View Message"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewDetails(msg);
                          }}
                          style={{ 
                            width: '36px', 
                            height: '36px',
                            borderRadius: '8px'
                          }}
                        >
                          <BsEye size={14} />
                        </Button>
                        <Button 
                          variant="outline-success" 
                          size="sm"
                          className="p-2"
                          title="Reply"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReply(msg.email);
                          }}
                          style={{ 
                            width: '36px', 
                            height: '36px',
                            borderRadius: '8px'
                          }}
                        >
                          <BsReply size={14} />
                        </Button>
                      </div>
                      <Button 
                        variant="outline-danger" 
                        size="sm"
                        className="p-2"
                        title="Delete"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteMessage(msg._id);
                        }}
                        disabled={deleting}
                        style={{ 
                          width: '36px', 
                          height: '36px',
                          borderRadius: '8px'
                        }}
                      >
                        <BsTrash size={14} />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Message Details Modal */}
        <MessageDetailsModal
          message={selectedMessage}
          show={showModal}
          onHide={() => setShowModal(false)}
        />
      </div>

      {/* MOBILE BOTTOM SPACER */}
      <div className="d-lg-none" style={{ height: '60px' }}></div>
    </div>
  );
};

export default Messages;