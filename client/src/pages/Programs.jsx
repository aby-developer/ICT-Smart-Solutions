import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { 
  FaLaptopCode, 
  FaNetworkWired, 
  FaMicrochip, 
  FaPhotoVideo, 
  FaBolt, 
  FaTools, 
  FaChalkboardTeacher, 
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaGraduationCap,
  FaRocket,
  FaCheckCircle,
  FaHandshake,
  FaDesktop,
  FaBookOpen,
  FaCertificate
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


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

const programs = [
  {
    title: "Software Development (SOD)",
    icon: <FaLaptopCode />,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Learn full-stack web development with modern frameworks and build real-world applications.",
    topics: ["HTML, CSS & JavaScript", "React & Next.js", "Node.js & Express", "MongoDB & PostgreSQL", "API Development", "Deployment & DevOps"],
    duration: "4 Weeks",
    level: "Beginner to Advanced",
    color: colors.primary,
    requirements: ["Basic computer knowledge", "Laptop required", "Internet access"],
    outcome: "Full-stack developer capable of building complete web applications"
  },
  {
    title: "Computer Systems & Architecture (CSA)",
    icon: <FaMicrochip />,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Understand computer hardware fundamentals, system assembly, and troubleshooting techniques.",
    topics: ["Computer Hardware Basics", "CPU & Memory Architecture", "Motherboard & Components", "System Assembly", "Troubleshooting", "Maintenance"],
    duration: "3 Weeks",
    level: "Beginner",
    color: colors.secondary,
    requirements: ["Interest in hardware", "Basic tools (optional)", "No prior experience needed"],
    outcome: "Certified computer technician with practical repair skills"
  },
  {
    title: "Networking & Internet Technology (NIT)",
    icon: <FaNetworkWired />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Master network design, implementation, and security for modern IT infrastructure.",
    topics: ["Network Fundamentals", "LAN/WAN Setup", "Router & Switch Configuration", "IP Addressing", "Network Security", "Wireless Networking"],
    duration: "4 Weeks",
    level: "Intermediate",
    color: colors.accent,
    requirements: ["Basic IT knowledge", "Network hardware access", "Analytical thinking"],
    outcome: "Network administrator with practical configuration skills"
  },
  {
    title: "Multimedia Productions (MMP)",
    icon: <FaPhotoVideo />,
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Create stunning visual content with professional graphic design and video editing skills.",
    topics: ["Adobe Photoshop", "Adobe Premiere Pro", "Graphic Design Principles", "Video Editing", "Digital Marketing", "Branding"],
    duration: "3 Weeks",
    level: "Beginner",
    color: colors.success,
    requirements: ["Creative mindset", "Basic computer skills", "Design software access"],
    outcome: "Multimedia designer capable of professional visual content creation"
  },
  {
    title: "Electronics & Telecommunications (ETE)",
    icon: <FaBolt />,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Explore electronic circuits, communication systems, and modern telecommunications technology.",
    topics: ["Basic Electronics", "Circuit Design", "Signal Processing", "Communication Systems", "IoT Basics", "Troubleshooting"],
    duration: "4 Weeks",
    level: "Intermediate",
    color: colors.warning,
    requirements: ["Basic physics knowledge", "Interest in electronics", "Analytical skills"],
    outcome: "Electronics technician with practical circuit design skills"
  },
  {
    title: "Technical Support & ICT Supply",
    icon: <FaTools />,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    description: "Learn IT support skills and understand ICT equipment supply chain management.",
    topics: ["IT Troubleshooting", "System Maintenance", "Hardware Support", "ICT Equipment", "Supply Chain Basics", "Customer Service"],
    duration: "3 Weeks",
    level: "Intermediate",
    color: colors.gray,
    requirements: ["Basic IT knowledge", "Problem-solving skills", "Customer service mindset"],
    outcome: "IT support specialist with equipment management skills"
  },
];

const services = [
  {
    title: "Custom Training Solutions",
    icon: <FaHandshake />,
    description: "Tailored ICT training programs for organizations and institutions",
    color: colors.primary,
    benefits: ["Custom curriculum", "Flexible scheduling", "Industry-specific content"]
  },
  {
    title: "ICT Equipment Supply",
    icon: <FaDesktop />,
    description: "Quality computer hardware, peripherals, and networking equipment",
    color: colors.secondary,
    benefits: ["Genuine products", "Warranty support", "Bulk discounts"]
  },
  {
    title: "Technical Consultancy",
    icon: <FaBookOpen />,
    description: "Expert advice on ICT infrastructure and digital transformation",
    color: colors.accent,
    benefits: ["Expert guidance", "Cost optimization", "Future-proof solutions"]
  },
  {
    title: "Certification Programs",
    icon: <FaCertificate />,
    description: "Industry-recognized certification courses and assessments",
    color: colors.success,
    benefits: ["Global recognition", "Skill validation", "Career advancement"]
  },
];

const Programs = () => {
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
              Our <span style={{ color: colors.secondary }}>Training Programs</span>
            </h1>
            <p className="lead mb-4" style={{ 
              fontSize: "1.3rem", 
              maxWidth: "700px",
              margin: "0 auto",
              opacity: 0.9
            }}>
              Choose from {programs.length} specialized ICT programs designed for career success and practical skill development
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Badge bg="light" text="dark" className="px-3 py-2">
                <FaUsers className="me-2" />
                500+ Students Trained
              </Badge>
              <Badge bg="light" text="dark" className="px-3 py-2">
                <FaGraduationCap className="me-2" />
                95% Job Placement
              </Badge>
              <Badge bg="light" text="dark" className="px-3 py-2">
                <FaClock className="me-2" />
                4 Weeks Average Duration
              </Badge>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-5" style={{ backgroundColor: colors.lightGray }}>
        <Container>
          <div className="text-center mb-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="fw-bold display-5 mb-3" style={{ color: colors.dark }}>
                Available Programs
              </h2>
              <p className="lead mb-0" style={{ 
                color: colors.gray,
                maxWidth: "700px",
                margin: "0 auto"
              }}>
                Practical, hands-on training designed for the African job market
              </p>
            </motion.div>
          </div>

          <Row className="g-4">
            {programs.map((program, index) => (
              <Col lg={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg h-100 overflow-hidden hover-lift" style={{ 
                    borderRadius: "16px",
                    transition: "all 0.3s ease"
                  }}>
                    <Row className="g-0">
                      {/* Program Image */}
                      <Col md={5}>
                        <div style={{ 
                          position: "relative",
                          height: "100%",
                          minHeight: "250px",
                          overflow: "hidden"
                        }}>
                          <img 
                            src={program.image} 
                            alt={program.title}
                            className="img-fluid w-100 h-100"
                            style={{ 
                              objectFit: "cover",
                              filter: "brightness(0.8)"
                            }}
                          />
                          <div style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            background: `linear-gradient(135deg, ${program.color}80, ${program.color}40)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}>
                            <div style={{ 
                              width: "80px", 
                              height: "80px", 
                              backgroundColor: "rgba(255,255,255,0.2)",
                              backdropFilter: "blur(10px)",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "1.8rem",
                              color: "white",
                              border: "2px solid rgba(255,255,255,0.3)"
                            }}>
                              {program.icon}
                            </div>
                          </div>
                          
                          {/* Duration Badge */}
                          <div className="position-absolute top-3 start-3">
                            <Badge bg="dark" className="px-3 py-2" style={{ 
                              backgroundColor: "rgba(0,0,0,0.7)",
                              fontSize: "0.85rem"
                            }}>
                              <FaClock className="me-1" />
                              {program.duration}
                            </Badge>
                          </div>
                          
                          {/* Level Badge */}
                          <div className="position-absolute top-3 end-3">
                            <Badge bg="light" text="dark" className="px-3 py-2" style={{ fontSize: "0.85rem" }}>
                              {program.level}
                            </Badge>
                          </div>
                        </div>
                      </Col>
                      
                      {/* Program Details */}
                      <Col md={7}>
                        <Card.Body className="p-4">
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <div>
                              <h4 className="fw-bold mb-1" style={{ color: colors.dark }}>
                                {program.title}
                              </h4>
                              <p className="text-muted small mb-0">
                                {program.description}
                              </p>
                            </div>
                          </div>
                          
                          {/* Topics */}
                          <div className="mb-3">
                            <h6 className="fw-semibold mb-2" style={{ color: program.color }}>
                              <FaBookOpen className="me-2" />
                              What You'll Learn:
                            </h6>
                            <div className="d-flex flex-wrap gap-2 mb-3">
                              {program.topics.map((topic, idx) => (
                                <Badge 
                                  key={idx} 
                                  bg="light" 
                                  text="dark"
                                  className="px-2 py-1"
                                  style={{ 
                                    fontSize: "0.75rem",
                                    border: `1px solid ${program.color}20`
                                  }}
                                >
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          {/* Requirements & Outcome */}
                          <div className="mb-4">
                            <Row>
                              <Col xs={6}>
                                <h6 className="fw-semibold mb-2 small" style={{ color: colors.gray }}>
                                  Requirements:
                                </h6>
                                <ul className="list-unstyled mb-0">
                                  {program.requirements.map((req, idx) => (
                                    <li key={idx} className="mb-1">
                                      <FaCheckCircle className="me-1" size={10} style={{ color: colors.success }} />
                                      <small style={{ color: colors.darkGray }}>{req}</small>
                                    </li>
                                  ))}
                                </ul>
                              </Col>
                              <Col xs={6}>
                                <h6 className="fw-semibold mb-2 small" style={{ color: colors.gray }}>
                                  Outcome:
                                </h6>
                                <p className="small mb-0" style={{ color: colors.darkGray }}>
                                  {program.outcome}
                                </p>
                              </Col>
                            </Row>
                          </div>
                          
                          {/* Price & Apply Button */}
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <span className="text-muted small" style={{ textDecoration: "line-through" }}>
                                45,000 FRW
                              </span>
                              <h5 className="fw-bold mb-0" style={{ color: program.color }}>
                                30,000 FRW
                              </h5>
                            </div>
                            <Button
                            as={Link}
                              to="/apply"
                              className="rounded-pill px-4"
                              style={{ 
                                backgroundColor: program.color, 
                                border: "none",
                                fontWeight: "600"
                              }}
                            >
                              <FaRocket className="me-2" />
                              Apply Now
                            </Button>
                          </div>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="py-5" style={{ backgroundColor: colors.light }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-3" style={{ color: colors.dark }}>
              Additional Services
            </h2>
            <p className="lead mb-0" style={{ color: colors.gray }}>
              Beyond training - comprehensive ICT solutions for your needs
            </p>
          </div>

          <Row className="g-4">
            {services.map((service, index) => (
              <Col lg={3} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-sm h-100 text-center" style={{ 
                    borderRadius: "16px",
                    borderTop: `4px solid ${service.color}`,
                    transition: "all 0.3s ease"
                  }}>
                    <Card.Body className="p-4">
                      <div style={{ 
                        width: "70px", 
                        height: "70px", 
                        backgroundColor: `${service.color}15`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.8rem",
                        color: service.color,
                        margin: "0 auto 20px"
                      }}>
                        {service.icon}
                      </div>
                      <h5 className="fw-bold mb-3" style={{ color: colors.dark }}>
                        {service.title}
                      </h5>
                      <p className="text-muted mb-4" style={{ lineHeight: "1.6" }}>
                        {service.description}
                      </p>
                      <div className="mt-auto">
                        <ul className="list-unstyled mb-3 text-start">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="mb-2">
                              <FaCheckCircle className="me-2" style={{ color: service.color }} />
                              <small style={{ color: colors.darkGray }}>{benefit}</small>
                            </li>
                          ))}
                        </ul>
                        <Button
                          href="/contact"
                          variant="outline-primary"
                          size="sm"
                          className="rounded-pill px-3"
                          style={{ 
                            borderColor: service.color,
                            color: service.color,
                            fontWeight: "600"
                          }}
                        >
                          Contact Us
                        </Button>
                      </div>
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
              Ready to Transform Your Career?
            </h2>
            <p className="lead mb-4 opacity-90" style={{ maxWidth: "700px", margin: "0 auto" }}>
              Join hundreds of successful graduates with our practical, hands-on ICT training programs
            </p>
            
            {/* Pricing Display */}
            <div className="d-flex justify-content-center align-items-center mb-4 flex-column flex-md-row">
              <div className="text-center me-md-5 mb-3 mb-md-0">
                <span style={{ 
                  textDecoration: "line-through", 
                  color: colors.secondary,
                  fontSize: "1.5rem",
                  fontWeight: "600"
                }}>
                  45,000 FRW
                </span>
              </div>
              <div className="text-center">
                <span style={{ 
                  fontSize: "3rem", 
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
            
            {/* CTA Buttons */}
            <div className="d-flex justify-content-center gap-3 flex-column flex-md-row">
              <Button
              as={Link}
                to="/apply"
                size="lg"
                className="rounded-pill px-5 py-3 mb-2 mb-md-0"
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
                <FaHandshake className="me-2" />
                Contact Admissions
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Programs;