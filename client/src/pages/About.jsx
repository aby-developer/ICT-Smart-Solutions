import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
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
            <h1 className="fw-bold display-4 mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              About <span style={{ color: colors.secondary }}>ICT Smart Solutions</span>
            </h1>
            <p className="lead mb-4" style={{ 
              fontSize: "clamp(1rem, 3vw, 1.3rem)", 
              maxWidth: "700px",
              margin: "0 auto",
              opacity: 0.9
            }}>
              Empowering Africa's digital future through innovative ICT education and practical training solutions
            </p>
            
            <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
              <Button
                as={Link}
                to="#programs"
                variant="outline-light"
                className="rounded-pill px-3 px-md-4 py-2 d-flex align-items-center gap-2"
                style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
              >
                <FaGraduationCap />
                Our Programs
              </Button>
              <Button
                as={Link}
                to="/apply"
                className="rounded-pill px-3 px-md-4 py-2 d-flex align-items-center gap-2"
                style={{ 
                  backgroundColor: colors.secondary, 
                  border: "none",
                  fontSize: "clamp(0.875rem, 2vw, 1rem)"
                }}
              >
                <FaRocket />
                Apply Now
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
                  <Card.Body className="p-3 p-md-4 p-lg-5">
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <div style={{ 
                        width: "clamp(40px, 8vw, 50px)", 
                        height: "clamp(40px, 8vw, 50px)", 
                        backgroundColor: `${colors.primary}15`,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                        color: colors.primary,
                        flexShrink: 0
                      }}>
                        <FaBullseye />
                      </div>
                      <h2 className="fw-bold mb-0" style={{ 
                        color: colors.dark,
                        fontSize: "clamp(1.5rem, 4vw, 2rem)"
                      }}>
                        Our Mission
                      </h2>
                    </div>
                    <p className="lead" style={{ 
                      color: colors.darkGray,
                      lineHeight: "1.8",
                      fontSize: "clamp(0.95rem, 2vw, 1.1rem)"
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
                  <Card.Body className="p-3 p-md-4 p-lg-5">
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <div style={{ 
                        width: "clamp(40px, 8vw, 50px)", 
                        height: "clamp(40px, 8vw, 50px)", 
                        backgroundColor: `${colors.secondary}15`,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                        color: colors.secondary,
                        flexShrink: 0
                      }}>
                        <FaLightbulb />
                      </div>
                      <h2 className="fw-bold mb-0" style={{ 
                        color: colors.dark,
                        fontSize: "clamp(1.5rem, 4vw, 2rem)"
                      }}>
                        Our Vision
                      </h2>
                    </div>
                    <p className="lead" style={{ 
                      color: colors.darkGray,
                      lineHeight: "1.8",
                      fontSize: "clamp(0.95rem, 2vw, 1.1rem)"
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
              <h2 className="fw-bold mb-3" style={{ 
                color: colors.dark,
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
              }}>
                What We Do
              </h2>
              <p className="mb-0" style={{ 
                color: colors.gray,
                maxWidth: "700px",
                margin: "0 auto",
                fontSize: "clamp(0.95rem, 2vw, 1.25rem)"
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
              paddingBottom: "10px",
              fontSize: "clamp(1.25rem, 3vw, 1.5rem)"
            }}>
              <FaGraduationCap className="me-2" />
              Training Programs
            </h3>
            <Row className="g-3 g-md-4">
              {offeredCourses.map((course, index) => (
                <Col xs={12} md={6} lg={4} key={index}>
                  <Card className="border-0 shadow-sm h-100 hover-lift" style={{ 
                    borderRadius: "16px",
                    transition: "all 0.3s ease"
                  }}>
                    <Card.Body className="p-3 p-md-4">
                      <div className="d-flex align-items-start gap-3 mb-3">
                        <div style={{ 
                          width: "clamp(40px, 8vw, 50px)", 
                          height: "clamp(40px, 8vw, 50px)", 
                          backgroundColor: `${course.color}15`,
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                          color: course.color,
                          flexShrink: 0
                        }}>
                          {course.icon}
                        </div>
                        <div>
                          <h5 className="fw-bold mb-1" style={{ 
                            color: colors.dark,
                            fontSize: "clamp(0.95rem, 2vw, 1.1rem)"
                          }}>
                            {course.name}
                          </h5>
                          <Badge bg="light" text="dark" className="mb-2" style={{ fontSize: "0.75rem" }}>
                            <small>{course.duration}</small>
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted mb-4" style={{ 
                        fontSize: "clamp(0.85rem, 1.8vw, 0.9rem)",
                        lineHeight: "1.5"
                      }}>
                        {course.description}
                      </p>
                      <Button
                        as={Link}
                        to="/apply"
                        variant="outline-primary"
                        size="sm"
                        className="w-100 rounded-pill py-2"
                        style={{ 
                          borderColor: course.color,
                          color: course.color,
                          fontWeight: "600",
                          fontSize: "clamp(0.8rem, 1.8vw, 0.875rem)"
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
              paddingBottom: "10px",
              fontSize: "clamp(1.25rem, 3vw, 1.5rem)"
            }}>
              <FaHandshake className="me-2" />
              Our Services
            </h3>
            <Row className="g-3 g-md-4">
              {offeredServices.map((service, index) => (
                <Col xs={12} sm={6} lg={3} key={index}>
                  <Card className="border-0 shadow-sm h-100 hover-lift" style={{ 
                    borderRadius: "16px",
                    transition: "all 0.3s ease"
                  }}>
                    <Card.Body className="p-3 p-md-4 text-center">
                      <div style={{ 
                        width: "clamp(50px, 10vw, 60px)", 
                        height: "clamp(50px, 10vw, 60px)", 
                        backgroundColor: `${service.color}15`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                        color: service.color,
                        margin: "0 auto 20px"
                      }}>
                        {service.icon}
                      </div>
                      <h6 className="fw-bold mb-2" style={{ 
                        color: colors.dark,
                        fontSize: "clamp(0.95rem, 2vw, 1.1rem)"
                      }}>
                        {service.name}
                      </h6>
                      <p className="text-muted small mb-3" style={{ lineHeight: "1.5" }}>
                        {service.description}
                      </p>
                      <Button
                        as={Link}
                        to="/contact"
                        variant="outline-secondary"
                        size="sm"
                        className="rounded-pill px-3"
                        style={{ 
                          borderColor: service.color,
                          color: service.color,
                          fontWeight: "600",
                          fontSize: "clamp(0.8rem, 1.8vw, 0.875rem)"
                        }}
                      >
                        Contact Us
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
            <h2 className="fw-bold mb-3" style={{ 
              color: colors.dark,
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
            }}>
              Our Impact
            </h2>
            <p className="mb-0" style={{ 
              color: colors.gray,
              fontSize: "clamp(0.95rem, 2vw, 1.25rem)"
            }}>
              Transforming careers and empowering futures across East Africa
            </p>
          </div>

          <Row className="g-3 g-md-4">
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
                value: "5", 
                label: "Programs", 
                color: colors.secondary,
                description: "Specialized tracks"
              },
            ].map((stat, index) => (
              <Col xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-sm h-100 text-center" style={{ 
                    borderRadius: "16px",
                    borderTop: `4px solid ${stat.color}`
                  }}>
                    <Card.Body className="p-3 p-md-4">
                      <div style={{ 
                        width: "clamp(50px, 12vw, 70px)", 
                        height: "clamp(50px, 12vw, 70px)", 
                        backgroundColor: `${stat.color}15`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                        color: stat.color,
                        margin: "0 auto 20px"
                      }}>
                        {stat.icon}
                      </div>
                      <h2 className="fw-bold mb-1" style={{ 
                        color: colors.dark, 
                        fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
                      }}>
                        {stat.value}
                      </h2>
                      <h5 className="fw-semibold mb-2" style={{ 
                        color: stat.color,
                        fontSize: "clamp(0.95rem, 2vw, 1.1rem)"
                      }}>
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

      {/* UPDATED DEVELOPER SECTION */}
      <section className="py-5" style={{ background: colors.lightGray }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-5">
              <h2 className="fw-bold mb-3" style={{ 
                color: colors.dark,
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
              }}>
                <FaRocket className="me-2" style={{ color: colors.secondary }} />
                Meet The Developer
              </h2>
              <p className="mb-0" style={{ 
                color: colors.gray,
                fontSize: "clamp(0.95rem, 2vw, 1.25rem)"
              }}>
                The creative mind behind the ICT Smart Solutions platform
              </p>
            </div>
            
            <Card className="border-0 shadow-lg overflow-hidden" style={{ 
              borderRadius: "clamp(16px, 4vw, 24px)",
              backgroundColor: "white",
              border: `1px solid ${colors.primary}20`
            }}>
              <Row className="g-0 align-items-stretch flex-column flex-md-row">
                {/* Developer Image Section - Updated Design */}
                <Col md={5} lg={4}>
                  <div 
                    className="h-100 d-flex flex-column align-items-center justify-content-center p-3 p-lg-4 p-xl-5 position-relative"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                      minHeight: "350px"
                    }}
                  >
                    <div className="position-relative z-2 text-center w-100">
                      {/* Developer Image Frame */}
                      <div
                        className="position-relative mb-3"
                        style={{
                          width: "clamp(150px, 30vw, 220px)",
                          height: "clamp(150px, 30vw, 220px)",
                          borderRadius: "50%",
                          backgroundColor: "white",
                          padding: "clamp(6px, 1.5vw, 8px)",
                          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.2)",
                          margin: "0 auto"
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            overflow: "hidden",
                            border: `clamp(3px, 0.8vw, 4px) solid ${colors.secondary}`,
                            position: "relative"
                          }}
                        >
                          <div 
                            style={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: colors.primary,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "clamp(2.5rem, 6vw, 4rem)",
                              color: "white",
                              fontWeight: "bold"
                            }}
                          >
                            AY
                          </div>
                        </div>
                        
                        {/* Status Badge */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: "clamp(10px, 2.5vw, 15px)",
                            right: "clamp(10px, 2.5vw, 15px)",
                            width: "clamp(35px, 8vw, 50px)",
                            height: "clamp(35px, 8vw, 50px)",
                            borderRadius: "50%",
                            backgroundColor: colors.secondary,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                            border: `clamp(2px, 0.5vw, 3px) solid white`,
                            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)"
                          }}
                        >
                          <FaLaptopCode />
                        </div>
                      </div>
                      
                      <h3 className="fw-bold text-white mt-3 mb-2" style={{ 
                        fontSize: "clamp(1.25rem, 3vw, 1.5rem)"
                      }}>
                        ABIMANA Yves
                      </h3>
                      <p className="text-white opacity-90 mb-3" style={{
                        fontSize: "clamp(0.875rem, 2vw, 1rem)"
                      }}>
                        Full Stack Developer & Mobile App Developer
                      </p>
                      
                      {/* Tech Stack - Updated */}
                      <div className="mt-4 px-2">
                        <h5 className="text-white opacity-90 mb-3" style={{
                          fontSize: "clamp(0.875rem, 2vw, 1rem)"
                        }}>
                          Tech Stack
                        </h5>
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                          {["React.js", "Node.js", "MongoDB", "Flutter", "Bootstrap"].map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 rounded-pill" 
                              style={{ 
                                backgroundColor: "rgba(255,255,255,0.15)", 
                                color: "white", 
                                fontSize: "clamp(0.75rem, 1.8vw, 0.85rem)" 
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Developer Details Section - Updated Design */}
                <Col md={7} lg={8}>
                  <Card.Body className="p-3 p-md-4 p-lg-5">
                    <div className="mb-4">
                      <h4 className="fw-bold mb-3" style={{ 
                        color: colors.primary,
                        fontSize: "clamp(1.25rem, 3vw, 1.5rem)"
                      }}>
                        <span className="d-inline-block px-3 py-1 rounded-pill" style={{ 
                          backgroundColor: `${colors.primary}15`,
                          fontSize: "clamp(0.875rem, 2vw, 1rem)"
                        }}>
                          About The Developer
                        </span>
                      </h4>
                      
                      <div className="mb-4">
                        <p style={{ 
                          color: colors.darkGray,
                          lineHeight: "1.8",
                          fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                          marginBottom: "1rem"
                        }}>
                          Hello! I'm <strong style={{ color: colors.primary }}>ABIMANA Yves</strong>, a passionate full-stack developer and mobile app developer specializing in creating modern web applications and digital solutions. With expertise in React, Node.js, MongoDB, and Flutter, I build scalable and user-friendly platforms.
                        </p>
                        <p style={{ 
                          color: colors.darkGray,
                          lineHeight: "1.8",
                          fontSize: "clamp(0.9rem, 2vw, 1.05rem)"
                        }}>
                          My mission is to leverage technology to empower education and business across Africa. I believe in creating solutions that are not only technically excellent but also socially impactful.
                        </p>
                      </div>

                      {/* Expertise Cards - Updated */}
                      <Row className="mb-4 g-3">
                        <Col xs={12} md={6}>
                          <div className="p-3 rounded-3 h-100" style={{ 
                            backgroundColor: `${colors.primary}08`,
                            borderLeft: `4px solid ${colors.primary}`
                          }}>
                            <h6 className="fw-bold mb-2" style={{ 
                              color: colors.primary,
                              fontSize: "clamp(0.875rem, 2vw, 1rem)"
                            }}>
                              <FaLaptopCode className="me-2" />
                              Full Stack Development
                            </h6>
                            <p className="small mb-0" style={{ 
                              color: colors.gray,
                              fontSize: "clamp(0.8rem, 1.8vw, 0.875rem)"
                            }}>
                              React, Node.js, MongoDB, REST APIs, Authentication
                            </p>
                          </div>
                        </Col>
                        <Col xs={12} md={6}>
                          <div className="p-3 rounded-3 h-100" style={{ 
                            backgroundColor: `${colors.success}08`,
                            borderLeft: `4px solid ${colors.success}`
                          }}>
                            <h6 className="fw-bold mb-2" style={{ 
                              color: colors.success,
                              fontSize: "clamp(0.875rem, 2vw, 1rem)"
                            }}>
                              <FaNetworkWired className="me-2" />
                              Mobile App Development
                            </h6>
                            <p className="small mb-0" style={{ 
                              color: colors.gray,
                              fontSize: "clamp(0.8rem, 1.8vw, 0.875rem)"
                            }}>
                              Flutter, React Native, Cross-platform apps, Mobile UI/UX
                            </p>
                          </div>
                        </Col>
                      </Row>

                      {/* Contact Cards - Responsive Design */}
                      <div className="mb-4">
                        <h5 className="fw-bold mb-3" style={{ 
                          color: colors.primary,
                          fontSize: "clamp(1rem, 2.5vw, 1.25rem)"
                        }}>
                          <FaPhone className="me-2" />
                          Contact Information
                        </h5>
                        <Row className="g-2 g-md-3">
                          <Col xs={12} md={6}>
                            <a 
                              href="https://wa.me/250729598007" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-decoration-none"
                            >
                              <div className="p-3 rounded-3 d-flex align-items-center h-100" style={{ 
                                backgroundColor: `${colors.success}08`,
                                border: `1px solid ${colors.success}30`,
                                transition: "all 0.3s ease"
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
                              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                              >
                                <div className="me-3" style={{ 
                                  width: "clamp(40px, 8vw, 50px)", 
                                  height: "clamp(40px, 8vw, 50px)", 
                                  borderRadius: "12px",
                                  backgroundColor: colors.success,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                                  color: "white",
                                  flexShrink: 0
                                }}>
                                  <FaWhatsapp />
                                </div>
                                <div className="w-100">
                                  <p className="mb-0 fw-semibold small" style={{ color: colors.darkGray }}>
                                    WhatsApp / Phone
                                  </p>
                                  <p className="mb-0 fw-bold" style={{ 
                                    color: colors.success,
                                    fontSize: "clamp(0.875rem, 2vw, 1rem)"
                                  }}>
                                    +250 729 598 007
                                  </p>
                                </div>
                              </div>
                            </a>
                          </Col>

                          <Col xs={12} md={6}>
                            <a 
                              href="mailto:abyzone01@gmail.com" 
                              className="text-decoration-none"
                            >
                              <div className="p-3 rounded-3 d-flex align-items-center h-100" style={{ 
                                backgroundColor: `${colors.primary}08`,
                                border: `1px solid ${colors.primary}30`,
                                transition: "all 0.3s ease"
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
                              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                              >
                                <div className="me-3" style={{ 
                                  width: "clamp(40px, 8vw, 50px)", 
                                  height: "clamp(40px, 8vw, 50px)", 
                                  borderRadius: "12px",
                                  backgroundColor: colors.primary,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                                  color: "white",
                                  flexShrink: 0
                                }}>
                                  <FaEnvelope />
                                </div>
                                <div className="w-100">
                                  <p className="mb-0 fw-semibold small" style={{ color: colors.darkGray }}>
                                    Email Address
                                  </p>
                                  <p className="mb-0 fw-bold" style={{ 
                                    color: colors.primary,
                                    fontSize: "clamp(0.875rem, 2vw, 1rem)"
                                  }}>
                                    abyzone01@gmail.com
                                  </p>
                                </div>
                              </div>
                            </a>
                          </Col>
                        </Row>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-4 pt-4 border-top">
                      <p className="mb-4 fw-semibold" style={{ 
                        color: colors.dark,
                        fontSize: "clamp(0.95rem, 2vw, 1.1rem)"
                      }}>
                        Have a project or need a custom ICT solution? Let's collaborate!
                      </p>
                      <div className="d-flex flex-wrap gap-2 gap-md-3">
                        <Button
                          href="https://wa.me/250729598007"
                          target="_blank"
                          className="rounded-pill px-3 px-md-4 py-2 d-flex align-items-center gap-2"
                          style={{ 
                            backgroundColor: colors.success, 
                            border: "none",
                            fontWeight: "600",
                            fontSize: "clamp(0.875rem, 2vw, 1rem)"
                          }}
                        >
                          <FaWhatsapp />
                          WhatsApp Chat
                        </Button>
                        <Button
                          href="mailto:abyzone01@gmail.com"
                          variant="outline-primary"
                          className="rounded-pill px-3 px-md-4 py-2 d-flex align-items-center gap-2"
                          style={{ 
                            borderColor: colors.primary,
                            color: colors.primary,
                            fontWeight: "600",
                            fontSize: "clamp(0.875rem, 2vw, 1rem)"
                          }}
                        >
                          <FaEnvelope />
                          Send Email
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* VALUES SECTION */}
      <section className="py-5" style={{ backgroundColor: colors.light }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3" style={{ 
              color: colors.dark,
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
            }}>
              Our Values
            </h2>
            <p className="mb-0" style={{ 
              color: colors.gray,
              fontSize: "clamp(0.95rem, 2vw, 1.25rem)"
            }}>
              The principles that guide everything we do
            </p>
          </div>

          <Row className="g-3 g-md-4">
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
              <Col xs={12} sm={6} lg={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-sm h-100 text-center" style={{ 
                    borderRadius: "16px",
                    transition: "all 0.3s ease"
                  }}>
                    <Card.Body className="p-3 p-md-4">
                      <div style={{ 
                        width: "clamp(50px, 12vw, 70px)", 
                        height: "clamp(50px, 12vw, 70px)", 
                        backgroundColor: `${value.color}15`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                        color: value.color,
                        margin: "0 auto 20px"
                      }}>
                        {value.icon}
                      </div>
                      <h5 className="fw-bold mb-3" style={{ 
                        color: colors.dark,
                        fontSize: "clamp(1rem, 2.5vw, 1.25rem)"
                      }}>
                        {value.title}
                      </h5>
                      <p className="text-muted mb-0" style={{ 
                        lineHeight: "1.6",
                        fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)"
                      }}>
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
            <h2 className="fw-bold mb-4" style={{ 
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
            }}>
              Ready to Start Your ICT Journey?
            </h2>
            <p className="mb-4 opacity-90" style={{ 
              maxWidth: "700px", 
              margin: "0 auto",
              fontSize: "clamp(0.95rem, 2vw, 1.25rem)"
            }}>
              Join hundreds of successful graduates and transform your career with practical, hands-on training
            </p>
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

              as={Link}
                to="/contact"
                variant="outline-light"
                size="lg"
                className="rounded-pill px-4 px-md-5 py-3 mt-2 mt-md-0"
                style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
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