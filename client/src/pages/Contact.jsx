import { Container, Row, Col, Form, Button, Card, Alert, Badge } from "react-bootstrap";
import { 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaRocket,
  FaCheckCircle,
  FaHeadset,
  FaComments,
  FaCalendarAlt,
  FaUser,
  FaHashtag,
  FaGraduationCap
} from "react-icons/fa";
import { 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaFacebookF,
  FaTwitter
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useState } from "react";
import { Link } from "react-router-dom";

// API URL from environment variables


const apiUrl = import.meta.env.VITE_API_URL;

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

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    program: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}/api/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message);

      toast.success("✅ Message sent successfully! We'll contact you within 24 hours.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        program: ""
      });
      
    } catch (error) {
      toast.error("❌ Failed to send message. Please try again or contact us directly.");
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      info: "+250 788 467 037",
      link: "tel:+250788467037",
      color: colors.success,
      description: "Available Mon-Fri, 8AM-5PM"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      info: "+250 729 598 007",
      link: "https://wa.me/250729598007",
      color: "#25D366",
      description: "Quick response via chat"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "abyzone01@gmail.com",
      link: "mailto:abyzone01@gmail.com",
      color: colors.accent,
      description: "24/7 email support"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      info: "Kigali, Nyarugenge",
      link: "#map",
      color: colors.primary,
      description: "Near Bank of Kigali HQ"
    }
  ];

  const programs = [
    "Software Development (SOD)",
    "Computer Systems & Architecture (CSA)",
    "Networking & Internet Technology (NIT)",
    "Multimedia Productions (MMP)",
    "Electronics & Telecommunications (ETE)",
    "Teacher Training Program",
    "Holiday Tech Program",
    "Technical Support & ICT Supply",
    "General Inquiry"
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="d-flex align-items-center position-relative overflow-hidden"
        style={{
          minHeight: "40vh",
          background: `linear-gradient(135deg, ${colors.dark}, ${colors.primary})`,
          color: "white",
          textAlign: "center",
          paddingTop: "100px",
          paddingBottom: "60px"
        }}
      >
        {/* Background Pattern */}
        <div className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, ${colors.secondary}15 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, ${colors.accent}10 0%, transparent 50%)`,
            opacity: 0.4
          }}
        />
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="position-relative z-1"
          >
            <h1 className="fw-bold display-4 mb-3">
              Get in <span style={{ color: colors.secondary }}>Touch</span>
            </h1>
            <p className="lead mb-4" style={{ 
              fontSize: "1.3rem", 
              maxWidth: "700px",
              margin: "0 auto",
              opacity: 0.9
            }}>
              We're here to help you start your journey in technology. Contact us for inquiries, 
              admissions, or partnership opportunities.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* CONTACT METHODS */}
      <section className="py-5" style={{ backgroundColor: colors.light }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-3" style={{ color: colors.dark }}>
              Contact Information
            </h2>
            <p className="lead mb-0" style={{ color: colors.gray }}>
              Choose your preferred way to reach us
            </p>
          </div>

          <Row className="g-4">
            {contactMethods.map((method, index) => (
              <Col lg={3} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    className="border-0 shadow-sm h-100 text-center hover-lift"
                    style={{ 
                      borderRadius: "16px",
                      transition: "all 0.3s ease",
                      cursor: "pointer"
                    }}
                    onClick={() => method.link.startsWith('http') ? window.open(method.link, '_blank') : null}
                  >
                    <Card.Body className="p-4">
                      <div style={{ 
                        width: "70px", 
                        height: "70px", 
                        backgroundColor: `${method.color}15`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.8rem",
                        color: method.color,
                        margin: "0 auto 20px"
                      }}>
                        {method.icon}
                      </div>
                      <h5 className="fw-bold mb-2" style={{ color: colors.dark }}>
                        {method.title}
                      </h5>
                      <a 
                        href={method.link}
                        className="d-block mb-2"
                        style={{ 
                          color: method.color,
                          textDecoration: "none",
                          fontWeight: "600",
                          fontSize: "1.1rem"
                        }}
                      >
                        {method.info}
                      </a>
                      <small className="text-muted d-block">
                        {method.description}
                      </small>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CONTACT FORM & INFO */}
      <section className="py-5" style={{ backgroundColor: colors.lightGray }}>
        <Container>
          <Row className="g-4">
            {/* CONTACT FORM */}
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-lg h-100" style={{ borderRadius: "20px" }}>
                  <Card.Body className="p-4 p-md-5">
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <div style={{ 
                        width: "50px", 
                        height: "50px", 
                        backgroundColor: `${colors.primary}15`,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        color: colors.primary
                      }}>
                        <FaComments />
                      </div>
                      <div>
                        <h2 className="fw-bold mb-1" style={{ color: colors.dark }}>
                          Send Us a Message
                        </h2>
                        <p className="text-muted mb-0">
                          Fill out the form below and we'll get back to you within 24 hours
                        </p>
                      </div>
                    </div>

                    <Alert variant="info" className="mb-4">
                      <FaHeadset className="me-2" />
                      <strong>Need immediate assistance?</strong> Call us at +250 788 467 037
                    </Alert>

                    <Form onSubmit={sendMessage}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">
                              <FaUser className="me-2" />
                              Full Name *
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              placeholder="Enter your full name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              style={{ 
                                border: `2px solid ${colors.lightGray}`,
                                borderRadius: "10px",
                                padding: "12px 15px"
                              }}
                            />
                          </Form.Group>
                        </Col>
                        
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">
                              <FaEnvelope className="me-2" />
                              Email Address *
                            </Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              style={{ 
                                border: `2px solid ${colors.lightGray}`,
                                borderRadius: "10px",
                                padding: "12px 15px"
                              }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">
                              <FaHashtag className="me-2" />
                              Subject *
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="subject"
                              placeholder="What is this regarding?"
                              required
                              value={formData.subject}
                              onChange={handleChange}
                              style={{ 
                                border: `2px solid ${colors.lightGray}`,
                                borderRadius: "10px",
                                padding: "12px 15px"
                              }}
                            />
                          </Form.Group>
                        </Col>
                        
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">
                              <FaGraduationCap className="me-2" />
                              Program Interest
                            </Form.Label>
                            <Form.Select
                              name="program"
                              value={formData.program}
                              onChange={handleChange}
                              style={{ 
                                border: `2px solid ${colors.lightGray}`,
                                borderRadius: "10px",
                                padding: "12px 15px"
                              }}
                            >
                              <option value="">Select a program</option>
                              {programs.map((program, index) => (
                                <option key={index} value={program}>{program}</option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-4">
                        <Form.Label className="fw-semibold">
                          <FaComments className="me-2" />
                          Your Message *
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          placeholder="Please provide details about your inquiry..."
                          required
                          value={formData.message}
                          onChange={handleChange}
                          style={{ 
                            border: `2px solid ${colors.lightGray}`,
                            borderRadius: "10px",
                            padding: "12px 15px"
                          }}
                        />
                      </Form.Group>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-100 py-3 rounded-pill"
                        style={{ 
                          background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                          border: "none",
                          fontWeight: "600",
                          fontSize: "1.1rem"
                        }}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="me-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            {/* CONTACT DETAILS & SOCIAL */}
            <Col lg={4}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="h-100 d-flex flex-column gap-4"
              >
                {/* Office Hours */}
                <Card className="border-0 shadow-lg" style={{ 
                  borderRadius: "20px",
                  background: `linear-gradient(135deg, ${colors.secondary}, ${colors.warning})`,
                  color: "white"
                }}>
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div style={{ 
                        width: "50px", 
                        height: "50px", 
                        backgroundColor: "rgba(255,255,255,0.2)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem"
                      }}>
                        <FaClock />
                      </div>
                      <div>
                        <h4 className="fw-bold mb-1">Office Hours</h4>
                        <p className="mb-0 opacity-90">Visit or call us during these hours</p>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <div className="d-flex justify-content-between mb-2">
                        <span>Monday - Friday</span>
                        <strong>8:00 AM - 5:00 PM</strong>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Saturday</span>
                        <strong>9:00 AM - 1:00 PM</strong>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Sunday</span>
                        <strong>Closed</strong>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                {/* Social Media */}
                <Card className="border-0 shadow-lg" style={{ borderRadius: "20px" }}>
                  <Card.Body className="p-4">
                    <h4 className="fw-bold mb-4" style={{ color: colors.dark }}>
                      Follow Us
                    </h4>
                    
                    <div className="row g-3">
                      <Col xs={6}>
                        <a 
                          href="https://www.instagram.com/ictsmartsolution90/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="d-flex align-items-center gap-2 p-3 rounded-3 text-decoration-none"
                          style={{ 
                            background: "linear-gradient(45deg, #405DE6, #E1306C)",
                            color: "white"
                          }}
                        >
                          <FaInstagram size={20} />
                          <span className="fw-semibold">Instagram</span>
                        </a>
                      </Col>
                      
                      <Col xs={6}>
                        <a 
                          href="https://facebook.com/ictsmartsolutions" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="d-flex align-items-center gap-2 p-3 rounded-3 text-decoration-none"
                          style={{ 
                            backgroundColor: "#1877F2",
                            color: "white"
                          }}
                        >
                          <FaFacebookF size={20} />
                          <span className="fw-semibold">Facebook</span>
                        </a>
                      </Col>
                      
                      <Col xs={6}>
                        <a 
                          href="https://linkedin.com/company/ictsmartsolutions" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="d-flex align-items-center gap-2 p-3 rounded-3 text-decoration-none"
                          style={{ 
                            backgroundColor: "#0A66C2",
                            color: "white"
                          }}
                        >
                          <FaLinkedin size={20} />
                          <span className="fw-semibold">LinkedIn</span>
                        </a>
                      </Col>
                      
                      <Col xs={6}>
                        <a 
                          href="https://twitter.com/ictsmartsolution" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="d-flex align-items-center gap-2 p-3 rounded-3 text-decoration-none"
                          style={{ 
                            backgroundColor: "#1DA1F2",
                            color: "white"
                          }}
                        >
                          <FaTwitter size={20} />
                          <span className="fw-semibold">Twitter</span>
                        </a>
                      </Col>
                      
                      <Col xs={6}>
                        <a 
                          href="https://youtube.com/@ictsmartsolutions" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="d-flex align-items-center gap-2 p-3 rounded-3 text-decoration-none"
                          style={{ 
                            backgroundColor: "#FF0000",
                            color: "white"
                          }}
                        >
                          <FaYoutube size={20} />
                          <span className="fw-semibold">YouTube</span>
                        </a>
                      </Col>
                      
                      <Col xs={6}>
                        <a 
                          href="https://wa.me/250788467037" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="d-flex align-items-center gap-2 p-3 rounded-3 text-decoration-none"
                          style={{ 
                            backgroundColor: "#25D366",
                            color: "white"
                          }}
                        >
                          <FaWhatsapp size={20} />
                          <span className="fw-semibold">WhatsApp</span>
                        </a>
                      </Col>
                    </div>
                  </Card.Body>
                </Card>

                {/* Quick Response */}
                <Card className="border-0 shadow-lg" style={{ 
                  borderRadius: "20px",
                  borderTop: `4px solid ${colors.success}`
                }}>
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <FaCheckCircle size={24} style={{ color: colors.success }} />
                      <div>
                        <h5 className="fw-bold mb-1" style={{ color: colors.dark }}>
                          Quick Response Guarantee
                        </h5>
                        <small className="text-muted">We respond within 24 hours</small>
                      </div>
                    </div>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2">
                        <FaCheckCircle className="me-2" size={12} style={{ color: colors.success }} />
                        <small>Email response within 24 hours</small>
                      </li>
                      <li className="mb-2">
                        <FaCheckCircle className="me-2" size={12} style={{ color: colors.success }} />
                        <small>WhatsApp response within 2 hours</small>
                      </li>
                      <li>
                        <FaCheckCircle className="me-2" size={12} style={{ color: colors.success }} />
                        <small>Phone calls answered immediately</small>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* LOCATION MAP */}
      <section id="map" className="py-5" style={{ backgroundColor: colors.light }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-3" style={{ color: colors.dark }}>
              Find Our Location
            </h2>
            <p className="lead mb-0" style={{ color: colors.gray }}>
              Visit our training center in Kigali
            </p>
          </div>

          <div className="rounded-3 overflow-hidden shadow-lg" style={{ border: `3px solid ${colors.primary}20` }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.513672698696!2d30.0593279!3d-1.9475303999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca517e0d51953%3A0xeee9601cbf88a138!2sICT%20Smart%20Solution!5e0!3m2!1sen!2srw!4v1769611194802!5m2!1sen!2srw"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ICT Smart Solutions Location"
            ></iframe>

            
          </div>

          <Row className="mt-4 g-3">
            <Col md={4}>
              <div className="d-flex align-items-center p-3 rounded-3" style={{ 
                backgroundColor: `${colors.primary}10`,
                border: `1px solid ${colors.primary}20`
              }}>
                <FaMapMarkerAlt className="me-3" style={{ color: colors.primary, fontSize: "1.5rem" }} />
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: colors.dark }}>Address</h6>
                  <p className="mb-0 text-muted">Kigali, Nyarugenge - Near Bank of Kigali Headquarters</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex align-items-center p-3 rounded-3" style={{ 
                backgroundColor: `${colors.success}10`,
                border: `1px solid ${colors.success}20`
              }}>
                <FaClock className="me-3" style={{ color: colors.success, fontSize: "1.5rem" }} />
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: colors.dark }}>Visiting Hours</h6>
                  <p className="mb-0 text-muted">Mon-Fri: 8AM-5PM, Sat: 9AM-1PM</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex align-items-center p-3 rounded-3" style={{ 
                backgroundColor: `${colors.accent}10`,
                border: `1px solid ${colors.accent}20`
              }}>
                <FaCalendarAlt className="me-3" style={{ color: colors.accent, fontSize: "1.5rem" }} />
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: colors.dark }}>Appointments</h6>
                  <p className="mb-0 text-muted">Book in advance for personalized tours</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FINAL CTA */}
            {/* FINAL CTA */}
      <section className="py-5" style={{ 
        background: `linear-gradient(135deg, ${colors.dark}, ${colors.primary})`
      }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="fw-bold mb-4" style={{ 
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
            }}>
              Ready to Start Your Tech Journey?
            </h2>
            <p className="mb-4 opacity-90" style={{ 
              maxWidth: "700px", 
              margin: "0 auto",
              fontSize: "clamp(0.95rem, 2vw, 1.25rem)"
            }}>
              Take the first step towards transforming your career with our practical ICT training programs
            </p>
            
            {/* Pricing Display */}
            <div className="d-flex justify-content-center align-items-center mb-4 flex-column flex-md-row">
              <div className="text-center me-md-5 mb-3 mb-md-0">
                <span style={{ 
                  textDecoration: "line-through", 
                  color: colors.secondary,
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: "600"
                }}>
                  45,000 FRW
                </span>
              </div>
              <div className="text-center">
                <span style={{ 
                  fontSize: "clamp(2rem, 5vw, 3rem)", 
                  fontWeight: "800",
                  color: "white"
                }}>
                  30,000 FRW
                </span>
                <div className="mt-1">
                  <Badge bg="warning" text="dark" className="px-3 py-2">
                    ⏰ Limited Time Offer
                  </Badge>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
              <div className="d-flex align-items-center">
                <FaCheckCircle className="me-2" style={{ color: colors.success }} />
                <small>100% Practical Training</small>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="me-2" style={{ color: colors.success }} />
                <small>Certificate Included</small>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="me-2" style={{ color: colors.success }} />
                <small>Job Placement Support</small>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="me-2" style={{ color: colors.success }} />
                <small>Flexible Payment Options</small>
              </div>
            </div>
            
            {/* CTA Buttons - Made Responsive */}
            <div className="d-flex justify-content-center gap-2 gap-md-3 flex-column flex-md-row">
              <Button
              as={Link}
                to="/apply"
                size="lg"
                className="rounded-pill px-4 px-md-5 py-3"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.secondary}, ${colors.warning})`, 
                  border: "none",
                  fontWeight: "600",
                  fontSize: "clamp(0.875rem, 2vw, 1rem)"
                }}
              >
                <FaRocket className="me-2" />
                Apply Now
              </Button>
              <Button
                href="tel:+250788467037"
                variant="outline-light"
                size="lg"
                className="rounded-pill px-4 px-md-5 py-3 mt-2 mt-md-0"
                style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
              >
                <FaPhoneAlt className="me-2" />
                Call Admissions
              </Button>
            </div>
            
            {/* Next Intake */}
            <div className="mt-4">
              <small className="opacity-75">
                📅 Next intake starts in 2 weeks • Limited spots available
              </small>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Contact;