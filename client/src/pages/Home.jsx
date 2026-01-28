import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaNetworkWired,
  FaMicrochip,
  FaPhotoVideo,
  FaBolt,
  FaChalkboardTeacher,
  FaUmbrellaBeach,
  FaTools,
  FaArrowLeft,
  FaArrowRight,
  FaCertificate,
  FaUserGraduate,
  FaBullseye,
  FaQuoteLeft,
  FaStar,
  FaMapMarkerAlt,
  FaUsers,
  FaHandshake,
  FaChevronLeft,
  FaChevronRight,
  FaPlayCircle,
  FaYoutube,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaCogs,
  FaGlobeAfrica,
  FaGraduationCap,
  FaBriefcase,
  FaCheckCircle,
  FaClock,
  FaCalendarAlt,
  FaAward,
  FaChalkboard
} from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Updated Color Palette for ICT Smart Solutions
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
    shortTitle: "Software Dev",
    icon: <FaLaptopCode />,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    topics: ["HTML, CSS, JS", "React & Node.js", "Database Management", "API Development"],
    color: colors.primary,
    duration: "4 Weeks",
    level: "Beginner to Advanced"
  },
  {
    title: "Computer Systems & Architecture (CSA)",
    shortTitle: "Computer Systems",
    icon: <FaMicrochip />,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    topics: ["Hardware Basics", "System Assembly", "Troubleshooting", "Maintenance"],
    color: colors.secondary,
    duration: "3 Weeks",
    level: "Beginner"
  },
  {
    title: "Networking & Internet Technology (NIT)",
    shortTitle: "Networking",
    icon: <FaNetworkWired />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    topics: ["LAN/WAN Setup", "IP Addressing", "Router Configuration", "Security"],
    color: colors.accent,
    duration: "4 Weeks",
    level: "Intermediate"
  },
  {
    title: "Multimedia Productions (MMP)",
    shortTitle: "Multimedia",
    icon: <FaPhotoVideo />,
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    topics: ["Graphic Design", "Video Editing", "Digital Marketing", "Branding"],
    color: colors.success,
    duration: "3 Weeks",
    level: "Beginner"
  },
  {
    title: "Electronics & Telecommunications (ETE)",
    shortTitle: "Electronics",
    icon: <FaMicrochip />,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    topics: ["Circuit Design", "Signal Processing", "Communication Systems", "IoT Basics"],
    color: colors.warning,
    duration: "4 Weeks",
    level: "Intermediate"
  },
  {
    title: "Teacher Training Program",
    shortTitle: "Teacher Training",
    icon: <FaChalkboardTeacher />,
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    topics: ["ICT Pedagogy", "Digital Tools", "Curriculum Design", "Classroom Tech"],
    color: colors.teal,
    duration: "2 Weeks",
    level: "Professional"
  },
  {
    title: "Holiday Tech Program",
    shortTitle: "Holiday Program",
    icon: <FaUmbrellaBeach />,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    topics: ["Basic Coding", "Creative Projects", "Tech Exploration", "Fun Activities"],
    color: colors.info,
    duration: "2 Weeks",
    level: "Beginner"
  },
  {
    title: "Technical Support & ICT Supply",
    shortTitle: "Tech Support",
    icon: <FaTools />,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    topics: ["System Maintenance", "Troubleshooting", "Hardware Support", "ICT Equipment"],
    color: colors.gray,
    duration: "3 Weeks",
    level: "Intermediate"
  }
];

const testimonials = [
  {
    name: "NDATIMANA David Ombeni",
    program: "Software Development",
    shortProgram: "Software Dev",
    image: "/testimonials/henriette.jpg",
    quote: "The hands-on approach gave me real development experience. I built 3 complete projects that impressed my employers!",
    rating: 5,
    color: colors.primary,
    location: "Kigali, Rwanda",
    position: "Junior Developer"
  },
  {
    name: "ABIMANA Yves",
    program: "Computer Systems",
    shortProgram: "Computer Systems",
    image: "/testimonials/richard.jpg",
    quote: "Practical hardware training was exactly what I needed. I can now troubleshoot and assemble systems confidently.",
    rating: 5,
    color: colors.secondary,
    location: "Ruhango, Rwanda",
    position: "IT Technician"
  },
  {
    name: "ISHIMWE Tona Miguel",
    program: "Software Development",
    shortProgram: "Software Dev",
    image: "/testimonials/pascal.jpg",
    quote: "From beginner to job-ready in one month! The project-based curriculum and expert mentorship were game-changers.",
    rating: 5,
    color: colors.accent,
    location: "Kigali, Rwanda",
    position: "Frontend Developer"
  },
  {
    name: "HATEGEKIMANA Lucky Bruce",
    program: "Multimedia Productions",
    shortProgram: "Multimedia",
    image: "/testimonials/alice.jpg",
    quote: "The creative tools and techniques I learned opened doors to freelance opportunities I never imagined possible.",
    rating: 5,
    color: colors.success,
    location: "Kigali, Rwanda",
    position: "Graphic Designer"
  }
];

const Home = () => {
  const programsScrollRef = useRef(null);
  const testimonialsScrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = isMobile ? 280 : 320;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* HEADER BANNER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-2 py-md-3"
        style={{
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.dark})`,
          color: "white",
          position: "sticky",
          top: "56px",
          zIndex: 1000,
          boxShadow: "0 4px 20px rgba(26, 86, 219, 0.15)"
        }}
      >
        <Container>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <FaLightbulb size={isMobile ? 18 : 22} style={{ color: colors.secondary }} />
            <h3 className="fw-bold mb-0" style={{ 
              fontSize: isMobile ? "0.95rem" : "1.15rem",
              letterSpacing: "0.5px"
            }}>
              {isMobile ? "🚀 ICT SMART SOLUTIONS 🚀" : "🌟 ICT SMART SOLUTIONS - Excellence in Technology Education 🌟"}
            </h3>
            <FaLightbulb size={isMobile ? 18 : 22} style={{ color: colors.secondary }} />
          </div>
          <small className="opacity-75 d-none d-sm-block" style={{ fontSize: "0.9rem" }}>
            Empowering Africa's Digital Future Through Quality ICT Education
          </small>
        </Container>
      </motion.div>

      {/* HERO SECTION */}
      <section
        className="d-flex align-items-center position-relative overflow-hidden"
        style={{
          minHeight: isMobile ? "auto" : "90vh",
          background: `linear-gradient(135deg, ${colors.dark}, ${colors.primary})`,
          color: "white",
          paddingTop: isMobile ? "70px" : "90px",
          paddingBottom: isMobile ? "50px" : "70px"
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
          <Row className="align-items-center flex-column-reverse flex-lg-row">
            <Col lg={6} className={isMobile ? "mt-4" : "mt-lg-0"}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className={`fw-bold ${isMobile ? "display-6 text-center" : "display-4"}`}>
                  Transform Your Future with{" "}
                  <span style={{ color: colors.secondary }}>Smart</span> ICT Solutions
                </h1>
                <p className={`lead mt-3 ${isMobile ? "text-center px-2" : ""}`} style={{ 
                  opacity: 0.9,
                  fontSize: isMobile ? "1rem" : "1.25rem"
                }}>
                  Hands-on ICT training designed for the African market. Gain practical skills, 
                  earn industry-recognized certificates, and launch your tech career in just 4 weeks.
                </p>
                
                {/* Quick Stats */}
                <div className={`d-flex ${isMobile ? "justify-content-center flex-wrap" : "justify-content-start"} gap-4 mt-4`}>
                  <div className="text-center">
                    <h3 className="fw-bold mb-0" style={{ color: colors.secondary, fontSize: isMobile ? "1.5rem" : "2rem" }}>500+</h3>
                    <small className="opacity-75">Students Trained</small>
                  </div>
                  <div className="text-center">
                    <h3 className="fw-bold mb-0" style={{ color: colors.accent, fontSize: isMobile ? "1.5rem" : "2rem" }}>95%</h3>
                    <small className="opacity-75">Job Placement</small>
                  </div>
                  <div className="text-center">
                    <h3 className="fw-bold mb-0" style={{ color: colors.success, fontSize: isMobile ? "1.5rem" : "2rem" }}>8</h3>
                    <small className="opacity-75">Programs</small>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className={`d-flex ${isMobile ? "flex-column align-items-center" : "flex-column flex-lg-row gap-3"} mt-5`}>
                  <Button
                    as={Link}
                    to="/apply"
                    size="lg"
                    className={`rounded-pill ${isMobile ? "w-100 mb-2 py-3" : "py-3 px-5"} d-flex align-items-center justify-content-center shadow-lg`}
                    style={{ 
                      backgroundColor: colors.secondary, 
                      border: "none",
                      fontWeight: "700",
                      fontSize: isMobile ? "1rem" : "1.1rem",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                  >
                    <FaRocket className="me-2" />
                    {isMobile ? "Start Your Journey 🚀" : "Start Your Tech Journey Today"}
                  </Button>
                  <Button
                    as={Link}
                    to="/programs"
                    size="lg"
                    variant="outline-light"
                    className={`rounded-pill ${isMobile ? "w-100 py-3" : "py-3 px-5"} d-flex align-items-center justify-content-center border-2`}
                    style={{ 
                      borderColor: "white",
                      fontWeight: "600",
                      fontSize: isMobile ? "1rem" : "1.1rem",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                  >
                    <FaLaptopCode className="me-2" />
                    Explore Programs
                  </Button>
                </div>
              </motion.div>
            </Col>

            <Col lg={6} className={isMobile ? "mt-4" : "mt-lg-0"}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="position-relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="ICT Smart Solutions - Technology Training Center"
                  className="img-fluid rounded-4 shadow-lg w-100"
                  style={{ 
                    border: `5px solid ${colors.light}`,
                    boxShadow: `0 25px 50px rgba(0, 0, 0, 0.3)`,
                    objectFit: "cover",
                    height: isMobile ? "300px" : "450px"
                  }}
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-3"
                  style={{
                    background: `linear-gradient(to top, ${colors.primary}E6, transparent)`,
                    borderBottomLeftRadius: "16px",
                    borderBottomRightRadius: "16px"
                  }}
                >
                  <p className="text-white mb-0 d-flex align-items-center justify-content-center small">
                    <FaGraduationCap className="me-2" />
                    <strong>Practical Skills • Industry Experts • Career Support</strong>
                  </p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-5" style={{ backgroundColor: colors.light }}>
        <Container>
          <h2 className={`fw-bold text-center mb-4 ${isMobile ? "h3" : "display-6"}`} style={{ color: colors.dark }}>
            Why Choose ICT Smart Solutions?
          </h2>
          <p className={`text-center mb-5 ${isMobile ? "px-2" : ""}`} style={{ 
            color: colors.gray,
            fontSize: isMobile ? "0.95rem" : "1.1rem"
          }}>
            We provide comprehensive ICT training designed for real-world success
          </p>
          
          <Row className="g-4">
            {[
              {
                icon: <FaShieldAlt />,
                title: "Industry-Relevant Curriculum",
                description: "Courses designed with current industry requirements and future trends in mind.",
                color: colors.primary
              },
              {
                icon: <FaCogs />,
                title: "Hands-On Practical Training",
                description: "Learn by doing with real-world projects and industry-standard tools.",
                color: colors.secondary
              },
              {
                icon: <FaBriefcase />,
                title: "Career Support & Placement",
                description: "Job placement assistance, interview preparation, and career guidance.",
                color: colors.accent
              },
              {
                icon: <FaAward />,
                title: "Certified Instructors",
                description: "Learn from industry professionals with years of practical experience.",
                color: colors.success
              },
              {
                icon: <FaClock />,
                title: "Flexible Learning",
                description: "Programs designed to fit your schedule with multiple intake periods.",
                color: colors.warning
              },
              {
                icon: <FaChalkboard />,
                title: "Modern Facilities",
                description: "State-of-the-art labs and equipment for optimal learning experience.",
                color: colors.teal
              }
            ].map((item, index) => (
              <Col xs={12} md={6} lg={4} key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-0 shadow-sm h-100" style={{ 
                    borderRadius: "16px",
                    borderTop: `4px solid ${item.color}`,
                    transition: "all 0.3s ease"
                  }}>
                    <Card.Body className="text-center p-4">
                      <div style={{ 
                        width: "70px", 
                        height: "70px", 
                        backgroundColor: `${item.color}15`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 20px",
                        fontSize: "1.8rem",
                        color: item.color
                      }}>
                        {item.icon}
                      </div>
                      <h5 className={`fw-bold mb-3 ${isMobile ? "h6" : ""}`} style={{ color: colors.dark }}>
                        {item.title}
                      </h5>
                      <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                        {item.description}
                      </p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-5" style={{ backgroundColor: colors.lightGray }}>
        <Container>
          <div className={`text-center mb-5 ${isMobile ? "px-2" : ""}`}>
            <h2 className={`fw-bold mb-3 ${isMobile ? "h3" : "display-5"}`} style={{ color: colors.dark }}>
              Our Training Programs
            </h2>
            <p className={`lead ${isMobile ? "small" : ""}`} style={{ color: colors.gray }}>
              Choose from 8 specialized ICT programs designed for career success
            </p>
          </div>

          <div className="position-relative">
            {/* Navigation Arrows */}
            <Button
              className="position-absolute start-0 top-50 translate-middle-y z-3 rounded-circle d-none d-md-flex shadow"
              variant="light"
              onClick={() => scroll(programsScrollRef, "left")}
              style={{ 
                width: "48px", 
                height: "48px",
                backgroundColor: "white",
                border: `2px solid ${colors.primary}`
              }}
            >
              <FaArrowLeft style={{ color: colors.primary }} />
            </Button>

            <Button
              className="position-absolute start-0 top-50 translate-middle-y z-3 rounded-circle d-md-none shadow"
              variant="light"
              onClick={() => scroll(programsScrollRef, "left")}
              style={{ 
                width: "40px", 
                height: "40px",
                backgroundColor: "white",
                border: `2px solid ${colors.primary}`
              }}
            >
              <FaChevronLeft size={16} style={{ color: colors.primary }} />
            </Button>

            {/* Programs Scroll Container */}
            <div
              ref={programsScrollRef}
              className="d-flex gap-3 gap-md-4 overflow-auto px-2 px-md-3 py-3"
              style={{ 
                scrollBehavior: "smooth", 
                scrollbarWidth: "none",
                msOverflowStyle: "none"
              }}
            >
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                  style={{ width: isMobile ? "300px" : "340px" }}
                >
                  <Card className="border-0 shadow-lg h-100 overflow-hidden" style={{ 
                    borderRadius: "16px",
                    transition: "all 0.3s ease"
                  }}>
                    {/* Program Image */}
                    <div style={{ 
                      position: "relative",
                      height: "180px",
                      overflow: "hidden"
                    }}>
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="img-fluid w-100 h-100"
                        style={{ 
                          objectFit: "cover",
                          transition: "transform 0.5s ease"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                      />
                      <div style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        background: `linear-gradient(to bottom, transparent 60%, ${program.color}90 100%)`,
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "1rem"
                      }}>
                        <div style={{ 
                          width: "50px", 
                          height: "50px", 
                          backgroundColor: "rgba(255,255,255,0.9)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.2rem",
                          color: program.color
                        }}>
                          {program.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Program Info */}
                    <Card.Body className="p-4">
                      <h5 className="fw-bold mb-2" style={{ 
                        color: colors.dark,
                        fontSize: "1.1rem"
                      }}>
                        {program.title}
                      </h5>
                      
                      <div className="d-flex align-items-center mb-3">
                        <FaClock className="me-2" size={14} style={{ color: colors.gray }} />
                        <small style={{ color: colors.gray }} className="me-3">{program.duration}</small>
                        <FaCalendarAlt className="me-2" size={14} style={{ color: colors.gray }} />
                        <small style={{ color: colors.gray }}>{program.level}</small>
                      </div>
                      
                      <ul className="mb-4" style={{ 
                        listStyle: "none", 
                        paddingLeft: "0",
                        marginBottom: "1.5rem"
                      }}>
                        {program.topics.map((topic, idx) => (
                          <li key={idx} className="mb-2 d-flex align-items-center">
                            <FaCheckCircle className="me-2" size={12} style={{ color: colors.success }} />
                            <span style={{ fontSize: "0.9rem", color: colors.darkGray }}>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <span className="fw-semibold" style={{ color: program.color, fontSize: "1rem" }}>
                          From 30,000 FRW
                        </span>
                        <Button
                          as={Link}
                          to={`/program/${index + 1}`}
                          size="sm"
                          className="rounded-pill px-3 py-2"
                          style={{ 
                            backgroundColor: program.color, 
                            color: "white",
                            border: "none",
                            fontWeight: "600",
                            fontSize: "0.875rem"
                          }}
                        >
                          Learn More
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Right Arrow */}
            <Button
              className="position-absolute end-0 top-50 translate-middle-y z-3 rounded-circle d-none d-md-flex shadow"
              variant="light"
              onClick={() => scroll(programsScrollRef, "right")}
              style={{ 
                width: "48px", 
                height: "48px",
                backgroundColor: "white",
                border: `2px solid ${colors.primary}`
              }}
            >
              <FaArrowRight style={{ color: colors.primary }} />
            </Button>

            <Button
              className="position-absolute end-0 top-50 translate-middle-y z-3 rounded-circle d-md-none shadow"
              variant="light"
              onClick={() => scroll(programsScrollRef, "right")}
              style={{ 
                width: "40px", 
                height: "40px",
                backgroundColor: "white",
                border: `2px solid ${colors.primary}`
              }}
            >
              <FaChevronRight size={16} style={{ color: colors.primary }} />
            </Button>
          </div>

          {/* View All Programs Button */}
          <div className="text-center mt-4">
            <Button
              as={Link}
              to="/programs"
              variant="outline-primary"
              size="lg"
              className={`rounded-pill ${isMobile ? "w-100 py-3" : "px-5 py-3"}`}
              style={{ 
                borderWidth: "2px",
                borderColor: colors.primary,
                color: colors.primary,
                fontWeight: "600",
                fontSize: "1rem"
              }}
            >
              View All Programs
            </Button>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-5" style={{ backgroundColor: colors.light }}>
        <Container>
          <div className={`text-center mb-5 ${isMobile ? "px-2" : ""}`}>
            <h2 className={`fw-bold mb-3 ${isMobile ? "h3" : "display-5"}`} style={{ color: colors.dark }}>
              Success Stories
            </h2>
            <p className={`${isMobile ? "small" : "lead"}`} style={{ color: colors.gray }}>
              Hear from our graduates who transformed their careers
            </p>
          </div>

          <div className="position-relative">
            <Button
              className="position-absolute start-0 top-50 translate-middle-y z-3 rounded-circle d-none d-md-flex shadow"
              variant="outline-primary"
              onClick={() => scroll(testimonialsScrollRef, "left")}
              style={{ 
                width: "48px", 
                height: "48px", 
                borderColor: colors.primary, 
                color: colors.primary,
                backgroundColor: "white"
              }}
            >
              <FaArrowLeft />
            </Button>

            <Button
              className="position-absolute start-0 top-50 translate-middle-y z-3 rounded-circle d-md-none shadow"
              variant="outline-primary"
              onClick={() => scroll(testimonialsScrollRef, "left")}
              style={{ 
                width: "40px", 
                height: "40px", 
                borderColor: colors.primary, 
                color: colors.primary,
                backgroundColor: "white"
              }}
            >
              <FaChevronLeft size={16} />
            </Button>

            <div
              ref={testimonialsScrollRef}
              className="d-flex gap-3 gap-md-4 overflow-auto px-2 px-md-3"
              style={{ 
                scrollBehavior: "smooth", 
                scrollbarWidth: "none",
                msOverflowStyle: "none"
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0"
                  style={{ width: isMobile ? "300px" : "340px" }}
                >
                  <Card className="border-0 shadow-lg h-100" style={{ 
                    borderRadius: "16px", 
                    border: `1px solid ${testimonial.color}20`,
                    transition: "all 0.3s ease"
                  }}>
                    <Card.Body className="p-4">
                      {/* Rating Stars */}
                      <div className="d-flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={i < testimonial.rating ? "text-warning" : "text-muted"} 
                            size={16}
                          />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <div className="mb-4">
                        <FaQuoteLeft className="mb-3" style={{ color: testimonial.color, fontSize: "24px" }} />
                        <p className="fst-italic" style={{ 
                          lineHeight: "1.6", 
                          color: colors.darkGray,
                          fontSize: "0.95rem"
                        }}>
                          "{testimonial.quote}"
                        </p>
                      </div>
                      
                      {/* Student Info */}
                      <div className="d-flex align-items-center">
                        <div
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}80)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                            marginRight: "15px"
                          }}
                        >
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1" style={{ color: testimonial.color }}>
                            {testimonial.name}
                          </h6>
                          <small className="text-muted d-block">{testimonial.position}</small>
                          <div className="d-flex align-items-center mt-1">
                            <FaMapMarkerAlt size={12} className="text-muted me-1" />
                            <small className="text-muted" style={{ fontSize: "0.85rem" }}>
                              {testimonial.location}
                            </small>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Button
              className="position-absolute end-0 top-50 translate-middle-y z-3 rounded-circle d-none d-md-flex shadow"
              variant="outline-primary"
              onClick={() => scroll(testimonialsScrollRef, "right")}
              style={{ 
                width: "48px", 
                height: "48px", 
                borderColor: colors.primary, 
                color: colors.primary,
                backgroundColor: "white"
              }}
            >
              <FaArrowRight />
            </Button>

            <Button
              className="position-absolute end-0 top-50 translate-middle-y z-3 rounded-circle d-md-none shadow"
              variant="outline-primary"
              onClick={() => scroll(testimonialsScrollRef, "right")}
              style={{ 
                width: "40px", 
                height: "40px", 
                borderColor: colors.primary, 
                color: colors.primary,
                backgroundColor: "white"
              }}
            >
              <FaChevronRight size={16} />
            </Button>
          </div>

          {isMobile && (
            <div className="text-center mt-3">
              <small className="opacity-75" style={{ color: colors.gray }}>
                Swipe to see more testimonials
              </small>
            </div>
          )}
        </Container>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="py-5" style={{ backgroundColor: colors.dark }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-center text-white ${isMobile ? "p-4" : "p-5"}`}
            style={{ 
              borderRadius: "20px",
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
              boxShadow: "0 20px 40px rgba(26, 86, 219, 0.3)"
            }}
          >
            <h2 className={`fw-bold mb-4 ${isMobile ? "h3" : "display-5"}`}>
              Ready to Start Your Tech Journey?
            </h2>
            <p className={`mb-4 opacity-90 ${isMobile ? "small" : "lead"}`}>
              Join hundreds of successful graduates with our practical, hands-on ICT training programs
            </p>
            
            {/* Pricing */}
            <div className="d-flex justify-content-center align-items-center mb-4">
              <div className="me-4">
                <span style={{ 
                  textDecoration: "line-through", 
                  color: colors.secondary,
                  fontSize: isMobile ? "1.1rem" : "1.3rem",
                  fontWeight: "600"
                }}>
                  45,000 FRW
                </span>
              </div>
              <div>
                <span style={{ 
                  fontSize: isMobile ? "2rem" : "2.5rem", 
                  fontWeight: "800",
                  color: "white"
                }}>
                  30,000 FRW
                </span>
              </div>
            </div>
            
            <p className="opacity-75 mb-4" style={{ fontSize: isMobile ? "0.9rem" : "1rem" }}>
              ⏰ Limited spots available for next intake • 📅 Next session starts in 2 weeks
            </p>
            
            {/* CTA Buttons */}
            <div className={`d-flex ${isMobile ? "flex-column" : "flex-row justify-content-center"} gap-3 mb-4`}>
              <Button
                as={Link}
                to="/apply"
                size="lg"
                className={`rounded-pill ${isMobile ? "w-100 py-3" : "px-5 py-3"}`}
                style={{ 
                  backgroundColor: colors.secondary, 
                  border: "none",
                  fontWeight: "600",
                  fontSize: "1rem"
                }}
              >
                Apply Now 🚀
              </Button>
              
              <Button
                as={Link}
                to="/contact"
                variant="outline-light"
                size="lg"
                className={`rounded-pill ${isMobile ? "w-100 py-3" : "px-5 py-3"}`}
                style={{ 
                  border: "2px solid white",
                  fontWeight: "600",
                  fontSize: "1rem"
                }}
              >
                Contact Admissions
              </Button>
            </div>
            
            {/* Features */}
            <div className={`d-flex ${isMobile ? "flex-column" : "flex-row justify-content-center"} gap-4 mt-4`}>
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
          </motion.div>
        </Container>
      </section>

      {/* LOCATIONS SECTION */}
      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5">
            <h3 className={`fw-bold ${isMobile ? "h4" : "h2"}`} style={{ color: colors.dark }}>
              Serving Across East Africa
            </h3>
            <p className={`${isMobile ? "small" : ""}`} style={{ color: colors.gray }}>
              Students from across East Africa trust our quality ICT education
            </p>
          </div>
          
          <Row className="justify-content-center text-center">
            {[
              { flag: "🇷🇼", country: "Rwanda", color: colors.primary },
              { flag: "🇺🇬", country: "Uganda", color: colors.secondary },
              { flag: "🇰🇪", country: "Kenya", color: colors.accent },
              { flag: "🇹🇿", country: "Tanzania", color: colors.success },
              { flag: "🇧🇮", country: "Burundi", color: colors.warning }
            ].map((location, index) => (
              <Col xs={6} sm={4} md={3} lg={2} key={index} className="mb-4">
                <div className="p-3">
                  <div style={{ 
                    fontSize: "2.5rem", 
                    marginBottom: "0.5rem"
                  }}>
                    {location.flag}
                  </div>
                  <h5 className="fw-bold" style={{ 
                    fontSize: "1rem",
                    color: location.color
                  }}>
                    {location.country}
                  </h5>
                </div>
              </Col>
            ))}
          </Row>
          
          {/* Partnership Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-5 p-4 rounded-3 ${isMobile ? "mx-2" : ""}`}
            style={{ 
              background: `linear-gradient(135deg, ${colors.light}, white)`,
              border: `2px solid ${colors.primary}20`,
              boxShadow: "0 10px 25px rgba(26, 86, 219, 0.1)"
            }}
          >
            <Row className="align-items-center">
              <Col md={8}>
                <h5 className={`fw-bold mb-2 ${isMobile ? "h6" : ""}`} style={{ color: colors.dark }}>
                  <FaGlobeAfrica className="me-2" style={{ color: colors.primary }} />
                  Building Africa's Digital Future Together
                </h5>
                <small className="text-muted">
                  Partnering with educational institutions and tech companies across East Africa
                </small>
              </Col>
              <Col md={4} className="text-md-end mt-3 mt-md-0">
                <Button
                  as={Link}
                  to="/partnerships"
                  variant="outline-primary"
                  size={isMobile ? "sm" : "md"}
                  className="rounded-pill"
                >
                  Partner With Us
                </Button>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Home;