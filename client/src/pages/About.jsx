import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { 
  FaLaptopCode, 
  FaNetworkWired, 
  FaProjectDiagram, 
  FaMicrochip, 
  FaBolt, 
  FaChalkboardTeacher, 
  FaRegCalendarAlt, 
  FaTools, 
  FaDesktop,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaRocket,
  FaGraduationCap,
  FaUsers,
  FaMapMarkerAlt,
  FaAward,
  FaBullseye,
  FaLightbulb,
  FaHandshake,
  FaGlobeAfrica
} from "react-icons/fa";
import { motion } from "framer-motion";

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

const offeredCourses = [
  { 
    name: "Software Development (SOD)", 
    icon: <FaLaptopCode />, 
    color: colors.primary,
    duration: "4 Weeks",
    description: "Full-stack web development with modern frameworks"
  },
  { 
    name: "Computer Systems & Architecture (CSA)", 
    icon: <FaMicrochip />, 
    color: colors.secondary,
    duration: "3 Weeks",
    description: "Hardware fundamentals and system assembly"
  },
  { 
    name: "Networking & Internet Technology (NIT)", 
    icon: <FaNetworkWired />, 
    color: colors.accent,
    duration: "4 Weeks",
    description: "Network setup, configuration, and security"
  },
  { 
    name: "Multimedia Productions (MMP)", 
    icon: <FaProjectDiagram />, 
    color: colors.success,
    duration: "3 Weeks",
    description: "Graphic design and video editing skills"
  },
  { 
    name: "Electronics & Telecommunications (ETE)", 
    icon: <FaMicrochip />, 
    color: colors.warning,
    duration: "4 Weeks",
    description: "Electronic circuits and communication systems"
  },
  { 
    name: "Holiday Tech Program", 
    icon: <FaRegCalendarAlt />, 
    color: colors.info,
    duration: "2 Weeks",
    description: "Fun tech exploration for students"
  },
];

const offeredServices = [
  { 
    name: "Teacher Training Programs", 
    icon: <FaChalkboardTeacher />, 
    color: colors.teal,
    description: "Professional development for educators"
  },
  { 
    name: "Technical Support Services", 
    icon: <FaTools />, 
    color: colors.gray,
    description: "IT troubleshooting and maintenance"
  },
  { 
    name: "ICT Peripherals Supply", 
    icon: <FaDesktop />, 
    color: colors.primary,
    description: "Quality computer equipment and accessories"
  },
  { 
    name: "Custom Training Solutions", 
    icon: <FaHandshake />, 
    color: colors.secondary,
    description: "Tailored programs for organizations"
  },
];

const About = () => {
  return (
    <>
      {/* HERO HEADER */}
      <section
        className="d-flex align-items-center position-relative overflow-hidden"
        style={{
          minHeight: "50vh",
          background: `linear-gradient(135deg, ${colors.dark}, ${colors.primary})`,
          color: "white",
          textAlign: "center",
          paddingTop: "100px",
          paddingBottom: "80px"
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
              About <span style={{ color: colors.secondary }}>ICT Smart Solutions</span>
            </h1>
            <p className="lead mb-4" style={{ 
              fontSize: "1.3rem", 
              maxWidth: "700px",
              margin: "0 auto",
              opacity: 0.9
            }}>
              Empowering Africa's digital future through innovative ICT education and practical training solutions
            </p>
            
            <div className="d-flex justify-content-center gap-3 mt-4">
              <Button
                as="a"
                href="#programs"
                variant="outline-light"
                className="rounded-pill px-4 py-2 d-flex align-items-center gap-2"
              >
                <FaGraduationCap />
                Our Programs
              </Button>
              <Button
                as="a"
                href="#contact"
                className="rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                style={{ 
                  backgroundColor: colors.secondary, 
                  border: "none"
                }}
              >
                <FaRocket />
                Get Started
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-5" style={{ backgroundColor: colors.light }}>
        <Container>
          <Row className="g-4">
            <Col lg={6} className="mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-sm h-100" style={{ 
                  borderRadius: "20px",
                  borderTop: `4px solid ${colors.primary}`,
                  overflow: "hidden"
                }}>
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
                        <FaBullseye />
                      </div>
                      <h2 className="fw-bold mb-0" style={{ color: colors.dark }}>
                        Our Mission
                      </h2>
                    </div>
                    <p className="lead" style={{ 
                      color: colors.darkGray,
                      lineHeight: "1.8",
                      fontSize: "1.1rem"
                    }}>
                      To provide innovative, practical ICT training that equips students with industry-relevant skills, 
                      fosters digital literacy, and contributes to Africa's technological advancement.
                    </p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="border-0 shadow-sm h-100" style={{ 
                  borderRadius: "20px",
                  borderTop: `4px solid ${colors.secondary}`,
                  overflow: "hidden"
                }}>
                  <Card.Body className="p-4 p-md-5">
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <div style={{ 
                        width: "50px", 
                        height: "50px", 
                        backgroundColor: `${colors.secondary}15`,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        color: colors.secondary
                      }}>
                        <FaLightbulb />
                      </div>
                      <h2 className="fw-bold mb-0" style={{ color: colors.dark }}>
                        Our Vision
                      </h2>
                    </div>
                    <p className="lead" style={{ 
                      color: colors.darkGray,
                      lineHeight: "1.8",
                      fontSize: "1.1rem"
                    }}>
                      To be East Africa's leading ICT training institution, recognized for excellence in practical education, 
                      innovative teaching methods, and producing skilled professionals who drive digital transformation.
                    </p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHAT WE DO SECTION */}
      <section id="programs" className="py-5" style={{ backgroundColor: colors.lightGray }}>
        <Container>
          <div className="text-center mb-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="fw-bold display-5 mb-3" style={{ color: colors.dark }}>
                What We Do
              </h2>
              <p className="lead mb-0" style={{ 
                color: colors.gray,
                maxWidth: "700px",
                margin: "0 auto"
              }}>
                Comprehensive ICT training programs and services designed for career success
              </p>
            </motion.div>
          </div>

          {/* Offered Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5"
          >
            <h3 className="fw-bold mb-4" style={{ 
              color: colors.primary,
              borderBottom: `3px solid ${colors.primary}`,
              paddingBottom: "10px"
            }}>
              <FaGraduationCap className="me-2" />
              Training Programs
            </h3>
            <Row className="g-4">
              {offeredCourses.map((course, index) => (
                <Col lg={4} md={6} key={index}>
                  <Card className="border-0 shadow-sm h-100 hover-lift" style={{ 
                    borderRadius: "16px",
                    transition: "all 0.3s ease"
                  }}>
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-start gap-3 mb-3">
                        <div style={{ 
                          width: "50px", 
                          height: "50px", 
                          backgroundColor: `${course.color}15`,
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.3rem",
                          color: course.color,
                          flexShrink: 0
                        }}>
                          {course.icon}
                        </div>
                        <div>
                          <h5 className="fw-bold mb-1" style={{ color: colors.dark }}>
                            {course.name}
                          </h5>
                          <Badge bg="light" text="dark" className="mb-2">
                            <small>{course.duration}</small>
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted mb-4" style={{ fontSize: "0.9rem" }}>
                        {course.description}
                      </p>
                      <Button
                        as="a"
                        href="/apply"
                        variant="outline-primary"
                        size="sm"
                        className="w-100 rounded-pill py-2"
                        style={{ 
                          borderColor: course.color,
                          color: course.color,
                          fontWeight: "600"
                        }}
                      >
                        Apply Now
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </motion.div>

          {/* Offered Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="fw-bold mb-4" style={{ 
              color: colors.secondary,
              borderBottom: `3px solid ${colors.secondary}`,
              paddingBottom: "10px"
            }}>
              <FaHandshake className="me-2" />
              Our Services
            </h3>
            <Row className="g-4">
              {offeredServices.map((service, index) => (
                <Col lg={3} md={6} key={index}>
                  <Card className="border-0 shadow-sm h-100 hover-lift" style={{ 
                    borderRadius: "16px",
                    transition: "all 0.3s ease"
                  }}>
                    <Card.Body className="p-4 text-center">
                      <div style={{ 
                        width: "60px", 
                        height: "60px", 
                        backgroundColor: `${service.color}15`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        color: service.color,
                        margin: "0 auto 20px"
                      }}>
                        {service.icon}
                      </div>
                      <h6 className="fw-bold mb-2" style={{ color: colors.dark }}>
                        {service.name}
                      </h6>
                      <p className="text-muted small mb-3">
                        {service.description}
                      </p>
                      <Button
                        as="a"
                        href="/contact"
                        variant="outline-secondary"
                        size="sm"
                        className="rounded-pill px-3"
                        style={{ 
                          borderColor: service.color,
                          color: service.color
                        }}
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* TRAINING OUTCOMES */}
      <section className="py-5" style={{ backgroundColor: colors.light }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-3" style={{ color: colors.dark }}>
              Our Impact
            </h2>
            <p className="lead mb-0" style={{ color: colors.gray }}>
              Transforming careers and empowering futures across East Africa
            </p>
          </div>

          <Row className="g-4">
            {[
              { 
                icon: <FaUsers />, 
                value: "500+", 
                label: "Students Trained", 
                color: colors.primary,
                description: "Across East Africa"
              },
              { 
                icon: <FaGraduationCap />, 
                value: "95%", 
                label: "Job Placement", 
                color: colors.success,
                description: "Career success rate"
              },
              { 
                icon: <FaMapMarkerAlt />, 
                value: "5+", 
                label: "Countries", 
                color: colors.accent,
                description: "Across East Africa"
              },
              { 
                icon: <FaAward />, 
                value: "8", 
                label: "Programs", 
                color: colors.secondary,
                description: "Specialized tracks"
              },
            ].map((stat, index) => (
              <Col lg={3} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-sm h-100 text-center" style={{ 
                    borderRadius: "16px",
                    borderTop: `4px solid ${stat.color}`
                  }}>
                    <Card.Body className="p-4">
                      <div style={{ 
                        width: "70px", 
                        height: "70px", 
                        backgroundColor: `${stat.color}15`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.8rem",
                        color: stat.color,
                        margin: "0 auto 20px"
                      }}>
                        {stat.icon}
                      </div>
                      <h2 className="fw-bold mb-1" style={{ color: colors.dark, fontSize: "2.5rem" }}>
                        {stat.value}
                      </h2>
                      <h5 className="fw-semibold mb-2" style={{ color: stat.color }}>
                        {stat.label}
                      </h5>
                      <p className="text-muted small mb-0">
                        {stat.description}
                      </p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* DEVELOPER SECTION */}
      <section className="py-5" style={{ background: `linear-gradient(135deg, ${colors.dark}, #111827)` }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-5">
              <h2 className="fw-bold mb-3 text-white">
                Meet The Developer
              </h2>
              <p className="lead mb-0" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                The creative mind behind ICT Smart Solutions platform
              </p>
            </div>
            
            <Card className="border-0 shadow-lg overflow-hidden" style={{ 
              borderRadius: "20px",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)"
            }}>
              <Row className="g-0">
                {/* Developer Image Section */}
                <Col md={4}>
                  <div 
                    className="h-100 d-flex flex-column align-items-center justify-content-center p-4 p-md-5"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                      minHeight: "400px"
                    }}
                  >
                    <div className="text-center">
                      <div
                        style={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "50%",
                          backgroundColor: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 20px",
                          border: "5px solid rgba(255, 255, 255, 0.3)",
                          overflow: "hidden",
                          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                        }}
                      >
                        <img 
                          src="/developer.jpg" 
                          alt="ABIMANA Yves"
                          style={{ 
                            width: "100%", 
                            height: "100%", 
                            objectFit: "cover" 
                          }}
                        />
                      </div>
                      <h3 className="fw-bold text-white mt-3">ABIMANA Yves</h3>
                      <p className="text-white opacity-90 mb-0">Full Stack Developer</p>
                      
                      {/* Tech Stack */}
                      <div className="mt-4 d-flex flex-wrap justify-content-center gap-2">
                        <span className="badge bg-white text-dark px-3 py-2">React</span>
                        <span className="badge bg-white text-dark px-3 py-2">Node.js</span>
                        <span className="badge bg-white text-dark px-3 py-2">MongoDB</span>
                        <span className="badge bg-white text-dark px-3 py-2">Bootstrap</span>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Developer Details Section */}
                <Col md={8}>
                  <Card.Body className="p-4 p-md-5">
                    <h4 className="fw-bold mb-4" style={{ color: colors.primary }}>
                      About The Developer
                    </h4>
                    
                    <div className="mb-4">
                      <p style={{ 
                        color: colors.darkGray,
                        lineHeight: "1.8",
                        fontSize: "1.05rem"
                      }}>
                        Hi! I'm <strong style={{ color: colors.primary }}>ABIMANA Yves</strong>, a passionate full-stack developer specializing in modern web and mobile applications using React, Node.js, MongoDB, and Flutter. 
                      </p>
                      <p style={{ 
                        color: colors.darkGray,
                        lineHeight: "1.8",
                        fontSize: "1.05rem"
                      }}>
                        My focus is on building scalable, user-friendly, and impactful digital solutions for education and business. I believe in creating technology that empowers people and transforms lives.
                      </p>
                    </div>

                    {/* Skills & Expertise */}
                    <div className="mb-4">
                      <h5 className="fw-bold mb-3" style={{ color: colors.primary }}>Skills & Expertise</h5>
                      <div className="d-flex flex-wrap gap-2">
                        <Badge bg="primary" className="px-3 py-2">Frontend Development</Badge>
                        <Badge bg="success" className="px-3 py-2">Backend Development</Badge>
                        <Badge bg="warning" className="px-3 py-2 text-dark">Mobile Apps</Badge>
                        <Badge bg="info" className="px-3 py-2">UI/UX Design</Badge>
                        <Badge bg="secondary" className="px-3 py-2">Database Design</Badge>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mt-4">
                      <h5 className="fw-bold mb-3" style={{ color: colors.primary }}>Contact Details</h5>
                      <Row>
                        <Col md={6} className="mb-3">
                          <div className="d-flex align-items-center p-3 rounded-3" style={{ 
                            backgroundColor: `${colors.primary}10`,
                            border: `1px solid ${colors.primary}20`
                          }}>
                            <div style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              backgroundColor: colors.primary,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: "15px",
                              flexShrink: 0
                            }}>
                              <FaPhone style={{ color: "white" }} />
                            </div>
                            <div>
                              <p className="mb-0 fw-semibold small text-muted">Phone / WhatsApp</p>
                              <a 
                                href="https://wa.me/250729598007" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ 
                                  color: colors.primary, 
                                  textDecoration: "none",
                                  fontWeight: "600"
                                }}
                              >
                                +250 729 598 007
                              </a>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} className="mb-3">
                          <div className="d-flex align-items-center p-3 rounded-3" style={{ 
                            backgroundColor: `${colors.accent}10`,
                            border: `1px solid ${colors.accent}20`
                          }}>
                            <div style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              backgroundColor: colors.accent,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: "15px",
                              flexShrink: 0
                            }}>
                              <FaEnvelope style={{ color: "white" }} />
                            </div>
                            <div>
                              <p className="mb-0 fw-semibold small text-muted">Email</p>
                              <a 
                                href="mailto:abyzone01@gmail.com"
                                style={{ 
                                  color: colors.accent, 
                                  textDecoration: "none",
                                  fontWeight: "600"
                                }}
                              >
                                abyzone01@gmail.com
                              </a>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} className="mb-3">
                          <div className="d-flex align-items-center p-3 rounded-3" style={{ 
                            backgroundColor: "#E1306C10",
                            border: "1px solid #E1306C20"
                          }}>
                            <div style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              backgroundColor: "#E1306C",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: "15px",
                              flexShrink: 0
                            }}>
                              <FaInstagram style={{ color: "white" }} />
                            </div>
                            <div>
                              <p className="mb-0 fw-semibold small text-muted">Instagram</p>
                              <a 
                                href="https://instagram.com/yves.abimana" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ 
                                  color: "#E1306C", 
                                  textDecoration: "none",
                                  fontWeight: "600"
                                }}
                              >
                                @yves.abimana
                              </a>
                            </div>
                          </div>
                        </Col>

                        <Col md={6} className="mb-3">
                          <div className="d-flex align-items-center p-3 rounded-3" style={{ 
                            backgroundColor: "#25D36610",
                            border: "1px solid #25D36620"
                          }}>
                            <div style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              backgroundColor: "#25D366",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: "15px",
                              flexShrink: 0
                            }}>
                              <FaWhatsapp style={{ color: "white" }} />
                            </div>
                            <div>
                              <p className="mb-0 fw-semibold small text-muted">WhatsApp</p>
                              <a 
                                href="https://wa.me/250729598007" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ 
                                  color: "#25D366", 
                                  textDecoration: "none",
                                  fontWeight: "600"
                                }}
                              >
                                Chat on WhatsApp
                              </a>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-4">
                      <h5 className="fw-bold mb-3" style={{ color: colors.primary }}>Connect With Me</h5>
                      <div className="d-flex flex-wrap gap-3">
                        <Button
                          href="https://wa.me/250729598007"
                          target="_blank"
                          variant="outline-success"
                          className="d-flex align-items-center gap-2 rounded-pill px-4"
                          style={{ borderColor: "#25D366", color: "#25D366" }}
                        >
                          <FaWhatsapp /> WhatsApp
                        </Button>
                        <Button
                          href="https://instagram.com/yves.abimana"
                          target="_blank"
                          variant="outline-danger"
                          className="d-flex align-items-center gap-2 rounded-pill px-4"
                          style={{ borderColor: "#E1306C", color: "#E1306C" }}
                        >
                          <FaInstagram /> Instagram
                        </Button>
                        <Button
                          href="mailto:abyzone01@gmail.com"
                          variant="outline-primary"
                          className="d-flex align-items-center gap-2 rounded-pill px-4"
                        >
                          <FaEnvelope /> Email
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>

            {/* CTA */}
            <div className="text-center mt-5">
              <p className="text-white opacity-75 mb-4" style={{ fontSize: "1.1rem" }}>
                Have a project idea or need a custom solution? Let's build something amazing together!
              </p>
              <Button
                href="mailto:abyzone01@gmail.com"
                size="lg"
                className="rounded-pill px-5 py-3 mt-2"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.secondary}, ${colors.warning})`, 
                  border: "none",
                  fontWeight: "600"
                }}
              >
                <FaRocket className="me-2" />
                Start a Conversation
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* VALUES SECTION */}
      <section className="py-5" style={{ backgroundColor: colors.lightGray }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-3" style={{ color: colors.dark }}>
              Our Values
            </h2>
            <p className="lead mb-0" style={{ color: colors.gray }}>
              The principles that guide everything we do
            </p>
          </div>

          <Row className="g-4">
            {[
              { 
                icon: <FaUsers />, 
                title: "Student-Centric", 
                description: "Our students' success is our top priority. We tailor our approach to meet individual learning needs.",
                color: colors.primary
              },
              { 
                icon: <FaBolt />, 
                title: "Innovation", 
                description: "We embrace new technologies and teaching methods to stay ahead in the fast-evolving ICT landscape.",
                color: colors.secondary
              },
              { 
                icon: <FaHandshake />, 
                title: "Integrity", 
                description: "We maintain the highest standards of professionalism and ethical conduct in all our operations.",
                color: colors.success
              },
              { 
                icon: <FaGlobeAfrica />, 
                title: "Community Impact", 
                description: "We're committed to contributing to Africa's digital transformation and economic development.",
                color: colors.accent
              },
            ].map((value, index) => (
              <Col lg={3} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-sm h-100 text-center" style={{ 
                    borderRadius: "16px",
                    transition: "all 0.3s ease"
                  }}>
                    <Card.Body className="p-4">
                      <div style={{ 
                        width: "70px", 
                        height: "70px", 
                        backgroundColor: `${value.color}15`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.8rem",
                        color: value.color,
                        margin: "0 auto 20px"
                      }}>
                        {value.icon}
                      </div>
                      <h5 className="fw-bold mb-3" style={{ color: colors.dark }}>
                        {value.title}
                      </h5>
                      <p className="text-muted mb-0" style={{ lineHeight: "1.6" }}>
                        {value.description}
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
            <h2 className="fw-bold display-5 mb-4">
              Ready to Start Your ICT Journey?
            </h2>
            <p className="lead mb-4 opacity-90" style={{ maxWidth: "700px", margin: "0 auto" }}>
              Join hundreds of successful graduates and transform your career with practical, hands-on training
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Button
                href="/apply"
                size="lg"
                className="rounded-pill px-5 py-3"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.secondary}, ${colors.warning})`, 
                  border: "none",
                  fontWeight: "600"
                }}
              >
                <FaRocket className="me-2" />
                Apply Now
              </Button>
              <Button
                href="/contact"
                variant="outline-light"
                size="lg"
                className="rounded-pill px-5 py-3"
              >
                Contact Admissions
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default About;