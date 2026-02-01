import { Container, Row, Col, Form, Button, Card, Alert, InputGroup, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { 
  FaInstagram, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaGraduationCap, 
  FaComment, 
  FaCheck, 
  FaClock, 
  FaCertificate, 
  FaBriefcase, 
  FaBuilding, 
  FaMoneyBillWave, 
  FaPhoneAlt,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaCalendarAlt,
  FaBook,
  FaLaptopCode,
  FaMicrochip,
  FaNetworkWired,
  FaPhotoVideo,
  FaBolt,
  FaTools,
  FaChalkboardTeacher,
  FaUmbrellaBeach
} from "react-icons/fa";
import { Link } from "react-router-dom";

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

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    instagram: "",
    program: "",
    message: "",
  });

  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });
  const [loading, setLoading] = useState(false);

  const programs = [
    { 
      name: "Software Development (SOD)", 
      icon: <FaLaptopCode />,
      duration: "4 Weeks",
      color: colors.primary
    },
    { 
      name: "Computer Systems & Architecture (CSA)", 
      icon: <FaMicrochip />,
      duration: "3 Weeks",
      color: colors.secondary
    },
    { 
      name: "Networking & Internet Technology (NIT)", 
      icon: <FaNetworkWired />,
      duration: "4 Weeks",
      color: colors.accent
    },
    { 
      name: "Multimedia Productions (MMP)", 
      icon: <FaPhotoVideo />,
      duration: "3 Weeks",
      color: colors.success
    },
    { 
      name: "Electronics & Telecommunications (ETE)", 
      icon: <FaBolt />,
      duration: "4 Weeks",
      color: colors.warning
    },
    { 
      name: "Teacher Training Program", 
      icon: <FaChalkboardTeacher />,
      duration: "2 Weeks",
      color: colors.teal
    },
    { 
      name: "Holiday Tech Program", 
      icon: <FaUmbrellaBeach />,
      duration: "2 Weeks",
      color: colors.info
    },
    { 
      name: "Technical Support & ICT Supply", 
      icon: <FaTools />,
      duration: "3 Weeks",
      color: colors.gray
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ show: false, message: "", variant: "" });

    try {
      const res = await axios.post(`${apiUrl}/api/applications`, formData);
      setAlert({ show: true, message: res.data.message, variant: "success" });
      setFormData({ 
        fullName: "", 
        email: "", 
        phone: "", 
        instagram: "",
        program: "", 
        message: "" 
      });
    } catch (err) {
      setAlert({
        show: true,
        message: err.response?.data?.message || "Server error. Please try again.",
        variant: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

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
              Apply <span style={{ color: colors.secondary }}>Now</span>
            </h1>
            <p className="lead mb-4" style={{ 
              fontSize: "1.3rem", 
              maxWidth: "700px",
              margin: "0 auto",
              opacity: 0.9
            }}>
              Take the first step towards transforming your career with our practical ICT training programs
            </p>
          </motion.div>
        </Container>
      </section>

      {/* APPLICATION SECTION */}
      <section className="py-5" style={{ backgroundColor: colors.lightGray }}>
        <Container>
          <Row className="g-4">
            {/* OFFER SECTION */}
            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky-top"
                style={{ top: "100px" }}
              >
                <Card className="border-0 shadow-lg overflow-hidden" style={{ 
                  borderRadius: "20px",
                  background: `linear-gradient(135deg, ${colors.dark}, ${colors.primary})`,
                  color: "white"
                }}>
                  {/* Badge for limited offer */}
                  <div className="position-absolute top-0 end-0 m-4">
                    <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold">
                      <FaClock className="me-2" />
                      Limited Time Offer
                    </span>
                  </div>

                  <Card.Body className="p-4 p-md-5">
                    <h2 className="fw-bold mb-4 text-center">
                      Special Enrollment Package
                    </h2>

                    {/* Price Section */}
                    <div className="text-center mb-4 p-4 rounded-3" 
                      style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                      <div className="d-flex justify-content-center align-items-center mb-2">
                        <span className="text-light fs-4 me-3" style={{ opacity: 0.8 }}>
                          <del>45,000 FRW</del>
                        </span>
                        <span className="fw-bold display-4">
                          30,000 FRW
                        </span>
                      </div>
                      <p className="fw-semibold mt-2 fs-5 mb-0">
                        Save <span className="text-warning fw-bold">15,000 FRW</span>
                      </p>
                      <Badge bg="danger" className="mt-2 px-3 py-2">
                        ⏰ Next intake in 2 weeks
                      </Badge>
                    </div>

                    <h5 className="fw-bold mb-3 d-flex align-items-center">
                      <FaCheck className="me-2 text-warning" />
                      Everything You Get:
                    </h5>
                    
                    <ul className="list-unstyled mb-4">
                      {[
                        { icon: <FaClock />, text: "1-month hands-on practical training" },
                        { icon: <FaUser />, text: "Expert mentorship from industry professionals" },
                        { icon: <FaCertificate />, text: "Official completion certificate" },
                        { icon: <FaBriefcase />, text: "Job placement assistance & career support" },
                        { icon: <FaBuilding />, text: "24/7 access to modern lab facilities" },
                        { icon: <FaShieldAlt />, text: "Money-back guarantee if criteria met" }
                      ].map((item, index) => (
                        <motion.li 
                          key={index}
                          className="mb-3 d-flex align-items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <span className="me-3 text-warning fs-5">{item.icon}</span>
                          <span className="fs-6">{item.text}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Quick Stats */}
                    <div className="mt-4 p-3 rounded-3" 
                      style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                      <Row>
                        <Col xs={6} className="text-center mb-2">
                          <h4 className="fw-bold mb-1" style={{ color: colors.secondary }}>500+</h4>
                          <small className="opacity-75">Students Trained</small>
                        </Col>
                        <Col xs={6} className="text-center mb-2">
                          <h4 className="fw-bold mb-1" style={{ color: colors.success }}>95%</h4>
                          <small className="opacity-75">Job Placement</small>
                        </Col>
                        <Col xs={6} className="text-center">
                          <h4 className="fw-bold mb-1" style={{ color: colors.accent }}>8</h4>
                          <small className="opacity-75">Programs</small>
                        </Col>
                        <Col xs={6} className="text-center">
                          <h4 className="fw-bold mb-1" style={{ color: colors.warning }}>4</h4>
                          <small className="opacity-75">Weeks Avg.</small>
                        </Col>
                      </Row>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 p-3 rounded-3" 
                      style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                      <div className="d-flex align-items-center justify-content-center">
                        <FaPhoneAlt className="me-3 text-warning fs-4" />
                        <div className="text-center">
                          <p className="mb-1 fw-bold">Need Assistance?</p>
                          <h5 className="mb-0 text-warning">+250 789 402 303</h5>
                          <small className="opacity-75">Mon-Fri, 8AM-5PM</small>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            {/* APPLICATION FORM */}
            <Col lg={7}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-lg h-100" style={{ borderRadius: "20px" }}>
                  <Card.Body className="p-4 p-md-5">
                    <div className="text-center mb-4">
                      <h2 className="fw-bold mb-2" style={{ color: colors.dark }}>
                        Application Form
                      </h2>
                      <p className="text-muted">
                        Fill in your details to secure your spot in the next intake
                      </p>
                    </div>

                    {alert.show && (
                      <Alert 
                        variant={alert.variant} 
                        className="border-0 rounded-3 mb-4"
                        dismissible
                        onClose={() => setAlert({ ...alert, show: false })}
                        style={{ 
                          backgroundColor: alert.variant === "success" ? `${colors.success}20` : `${colors.accent}20`,
                          borderLeft: `4px solid ${alert.variant === "success" ? colors.success : colors.accent}`
                        }}
                      >
                        <strong>{alert.variant === "success" ? "✅ Success!" : "❌ Error:"}</strong> {alert.message}
                      </Alert>
                    )}

                    <Form onSubmit={handleSubmit}>
                      <Row>
                        {/* Full Name */}
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label className="fw-semibold d-flex align-items-center">
                              <FaUser className="me-2" style={{ color: colors.primary }} />
                              Full Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              required
                              placeholder="Enter your full name"
                              className="py-3 rounded-3"
                              style={{ 
                                border: `2px solid ${colors.lightGray}`,
                                transition: "all 0.3s ease"
                              }}
                              onFocus={(e) => e.target.style.borderColor = colors.primary}
                              onBlur={(e) => e.target.style.borderColor = colors.lightGray}
                            />
                          </Form.Group>
                        </Col>

                        {/* Email */}
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label className="fw-semibold d-flex align-items-center">
                              <FaEnvelope className="me-2" style={{ color: colors.primary }} />
                              Email Address
                            </Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="Enter your email"
                              className="py-3 rounded-3"
                              style={{ 
                                border: `2px solid ${colors.lightGray}`,
                                transition: "all 0.3s ease"
                              }}
                              onFocus={(e) => e.target.style.borderColor = colors.primary}
                              onBlur={(e) => e.target.style.borderColor = colors.lightGray}
                            />
                          </Form.Group>
                        </Col>

                        {/* Phone */}
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label className="fw-semibold d-flex align-items-center">
                              <FaPhone className="me-2" style={{ color: colors.primary }} />
                              Phone Number
                            </Form.Label>
                            <Form.Control
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              placeholder="07XX XXX XXX"
                              className="py-3 rounded-3"
                              style={{ 
                                border: `2px solid ${colors.lightGray}`,
                                transition: "all 0.3s ease"
                              }}
                              onFocus={(e) => e.target.style.borderColor = colors.primary}
                              onBlur={(e) => e.target.style.borderColor = colors.lightGray}
                            />
                          </Form.Group>
                        </Col>

                        {/* Instagram */}
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label className="fw-semibold d-flex align-items-center">
                              <FaInstagram className="me-2" style={{ color: colors.primary }} />
                              Instagram Username
                            </Form.Label>
                            <InputGroup>
                              <InputGroup.Text className="bg-light border-end-0">
                                <span className="text-muted">@</span>
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                                name="instagram"
                                value={formData.instagram}
                                onChange={handleChange}
                                placeholder="username"
                                className="py-3 rounded-end-3 border-start-0"
                                style={{ 
                                  border: `2px solid ${colors.lightGray}`,
                                  borderLeft: "none",
                                  transition: "all 0.3s ease"
                                }}
                                onFocus={(e) => e.target.style.borderColor = colors.primary}
                                onBlur={(e) => e.target.style.borderColor = colors.lightGray}
                              />
                            </InputGroup>
                            <Form.Text className="text-muted small">
                              Optional - for updates and community access
                            </Form.Text>
                          </Form.Group>
                        </Col>

                        {/* Program Selection */}
                        <Col xs={12} className="mb-4">
                          <Form.Group>
                            <Form.Label className="fw-semibold d-flex align-items-center">
                              <FaGraduationCap className="me-2" style={{ color: colors.primary }} />
                              Select Program
                            </Form.Label>
                            <Row className="g-2">
                              {programs.map((program, index) => (
                                <Col md={6} key={index}>
                                  <div 
                                    className={`p-3 rounded-3 border cursor-pointer ${formData.program === program.name ? 'border-primary' : 'border-light'}`}
                                    style={{ 
                                      transition: "all 0.3s ease",
                                      backgroundColor: formData.program === program.name ? `${colors.primary}10` : "white",
                                      borderColor: formData.program === program.name ? colors.primary : colors.lightGray,
                                      borderWidth: "2px"
                                    }}
                                    onClick={() => setFormData({...formData, program: program.name})}
                                  >
                                    <div className="d-flex align-items-center gap-3">
                                      <div style={{ 
                                        width: "40px", 
                                        height: "40px", 
                                        backgroundColor: `${program.color}15`,
                                        borderRadius: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "1.2rem",
                                        color: program.color
                                      }}>
                                        {program.icon}
                                      </div>
                                      <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between align-items-center">
                                          <h6 className="fw-semibold mb-0" style={{ color: colors.dark }}>
                                            {program.name}
                                          </h6>
                                          <Badge bg="light" text="dark" className="small">
                                            {program.duration}
                                          </Badge>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          </Form.Group>
                        </Col>

                        {/* Message */}
                        <Col xs={12} className="mb-4">
                          <Form.Group>
                            <Form.Label className="fw-semibold d-flex align-items-center">
                              <FaComment className="me-2" style={{ color: colors.primary }} />
                              Additional Information
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={4}
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Tell us about your background, expectations, career goals, or any questions you may have..."
                              className="rounded-3"
                              style={{ 
                                border: `2px solid ${colors.lightGray}`,
                                resize: "vertical",
                                transition: "all 0.3s ease"
                              }}
                              onFocus={(e) => e.target.style.borderColor = colors.primary}
                              onBlur={(e) => e.target.style.borderColor = colors.lightGray}
                            />
                            <Form.Text className="text-muted small">
                              Help us understand your needs better
                            </Form.Text>
                          </Form.Group>
                        </Col>
                      </Row>

                      {/* Submit Button */}
                      <div className="d-grid mt-4">
                        <Button
                          type="submit"
                          disabled={loading}
                          size="lg"
                          className="rounded-pill py-3 fw-bold border-0 shadow"
                          style={{ 
                            background: `linear-gradient(135deg, ${colors.secondary}, ${colors.warning})`,
                            fontSize: "1.1rem",
                            transition: "all 0.3s ease"
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                        >
                          {loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" />
                              Processing Application...
                            </>
                          ) : (
                            <>
                              <FaRocket className="me-2" />
                              Submit Application & Secure Your Spot
                            </>
                          )}
                        </Button>
                        <div className="text-center mt-3">
                          <small className="text-muted">
                            By submitting, you agree to our{" "}
                            <a href="/terms" style={{ color: colors.primary, textDecoration: "none" }}>terms of service</a>{" "}
                            and{" "}
                            <a href="/privacy" style={{ color: colors.primary, textDecoration: "none" }}>privacy policy</a>
                          </small>
                        </div>
                      </div>
                    </Form>

                    {/* Additional Assistance */}
                    <div className="mt-4 p-3 rounded-3 text-center" 
                      style={{ backgroundColor: colors.light, border: `1px solid ${colors.primary}20` }}>
                      <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
                        <FaPhoneAlt style={{ color: colors.primary }} />
                        <h6 className="fw-bold mb-0" style={{ color: colors.dark }}>
                          Need Help with Your Application?
                        </h6>
                      </div>
                      <p className="text-muted small mb-2">
                        Call our admissions team for assistance
                      </p>
                      <a 
                        href="tel:+250788467037" 
                        className="fw-bold"
                        style={{ color: colors.primary, textDecoration: "none", fontSize: "1.1rem" }}
                      >
                        +250 788 467 037
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* NEXT STEPS SECTION */}
      <section className="py-5" style={{ backgroundColor: colors.light }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-3" style={{ color: colors.dark }}>
              What Happens Next?
            </h2>
            <p className="lead mb-0" style={{ color: colors.gray }}>
              Your journey to becoming an ICT professional starts here
            </p>
          </div>

          <Row className="g-4">
            {[
              {
                step: "01",
                title: "Application Review",
                description: "Our admissions team will review your application within 24 hours",
                icon: <FaBook style={{ color: colors.primary }} />,
                color: colors.primary
              },
              {
                step: "02",
                title: "Interview Call",
                description: "We'll schedule a brief call to discuss your goals and expectations",
                icon: <FaPhone style={{ color: colors.secondary }} />,
                color: colors.secondary
              },
              {
                step: "03",
                title: "Admission Confirmation",
                description: "Receive your acceptance letter and program details",
                icon: <FaCertificate style={{ color: colors.success }} />,
                color: colors.success
              },
              {
                step: "04",
                title: "Program Orientation",
                description: "Attend orientation session and start your training journey",
                icon: <FaUsers style={{ color: colors.accent }} />,
                color: colors.accent
              },
            ].map((step, index) => (
              <Col lg={3} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-sm h-100 text-center" style={{ 
                    borderRadius: "16px",
                    borderTop: `4px solid ${step.color}`
                  }}>
                    <Card.Body className="p-4">
                      <div style={{ 
                        width: "60px", 
                        height: "60px", 
                        backgroundColor: `${step.color}15`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.8rem",
                        color: step.color,
                        margin: "0 auto 20px"
                      }}>
                        {step.icon}
                      </div>
                      <Badge bg="light" text="dark" className="mb-3 px-3 py-2">
                        Step {step.step}
                      </Badge>
                      <h5 className="fw-bold mb-3" style={{ color: colors.dark }}>
                        {step.title}
                      </h5>
                      <p className="text-muted mb-0" style={{ lineHeight: "1.6" }}>
                        {step.description}
                      </p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
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
              Ready to Start Your Journey?
            </h2>
            <p className="mb-4 opacity-90" style={{ 
              maxWidth: "700px", 
              margin: "0 auto",
              fontSize: "clamp(0.95rem, 2vw, 1.25rem)"
            }}>
              Don't miss the opportunity to transform your career with hands-on ICT training
            </p>
            
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
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Apply;