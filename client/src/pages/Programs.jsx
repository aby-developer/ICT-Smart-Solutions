import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaLaptopCode, FaNetworkWired, FaMicrochip, FaVideo, FaBolt, FaTools, FaChalkboardTeacher, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";

// Replace with your own course images in /public/images/
const courses = [
  {
    title: "Software Development (SOD)",
    icon: <FaLaptopCode size={28} color="#10B981" />,
    image: "/images/sod.png",
    description: "Learn to build web and mobile applications.",
    studies: ["HTML, CSS & JavaScript", "React & Node.js", "Databases & Deployment"],
    duration: "1 Month"
  },
  {
    title: "Computer Systems & Architecture (CSA)",
    icon: <FaMicrochip size={28} color="#10B981" />,
    image: "/images/csa.png",
    description: "Understand how computers work from hardware to software.",
    studies: ["CPU & Memory", "Operating Systems", "Assembly & Logic Design"],
    duration: "1 Month"
  },
  {
    title: "Networking & Internet Technology (NIT)",
    icon: <FaNetworkWired size={28} color="#10B981" />,
    image: "/images/nit.png",
    description: "Learn how to design, build and manage networks.",
    studies: ["LAN & WAN", "Routers & Switches", "Network Security"],
    duration: "1 Month"
  },
  {
    title: "Multimedia Productions (MMP)",
    icon: <FaVideo size={28} color="#10B981" />,
    image: "/images/mmp.png",
    description: "Create stunning multimedia content for digital platforms.",
    studies: ["Video Editing", "Graphic Design", "Animation"],
    duration: "1 Month"
  },
  {
    title: "Electronics & Telecommunications (ETE)",
    icon: <FaBolt size={28} color="#10B981" />,
    image: "/images/ete.png",
    description: "Dive into electronics circuits and telecom systems.",
    studies: ["Circuit Design", "Signals & Communication", "IoT Basics"],
    duration: "1 Month"
  },
  {
    title: "Electrical Technology (ELT)",
    icon: <FaBolt size={28} color="#10B981" />,
    image: "/images/elt.png",
    description: "Learn electrical installations and power systems.",
    studies: ["Power Systems", "Electrical Machines", "Safety & Regulations"],
    duration: "1 Month"
  },
];

const services = [
  { title: "Teacher Training Programs", icon: <FaChalkboardTeacher size={28} color="#10B981" />, description: "Enhance ICT skills for educators.", image: "/images/teacher-training.png" },
  { title: "Holiday Programs", icon: <FaLaptopCode size={28} color="#10B981" />, description: "Engaging tech programs for students during holidays.", image: "/images/holiday-program.png" },
  { title: "Technical Support", icon: <FaHeadset size={28} color="#10B981" />, description: "Provide IT support for schools & institutions.", image: "/images/technical-support.png" },
  { title: "Supplying ICT Peripherals", icon: <FaTools size={28} color="#10B981" />, description: "High-quality ICT equipment and accessories.", image: "/images/ict-supply.png" },
];

const Programs = () => {
  return (
    <Container style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-5"
      >
        <h1 style={{ color: "#1E3A8A", fontWeight: "700" }}>Available Trainings & Internship Programs</h1>
        <p style={{ color: "#14B8A6", fontSize: "1.1rem" }}>Empowering learners with ICT skills for the future</p>
      </motion.div>

      {/* Section 1: Courses */}
      <h3 className="text-primary fw-bold mb-4">Available Trade Courses</h3>
      {courses.map((course, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: idx * 0.1 }}
          className="mb-5"
        >
          <Row className="align-items-center">
            <Col md={4} className="mb-3 mb-md-0">
              <img src={course.image} alt={course.title} className="img-fluid rounded shadow" />
            </Col>
            <Col md={8}>
              <h4 className="d-flex align-items-center gap-2">
                {course.icon} {course.title}
              </h4>
              <p className="text-muted">{course.description}</p>
              <ul>
                {course.studies.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <p><strong>Duration:</strong> {course.duration}</p>
              <Button href="/apply" style={{ backgroundColor: "#10B981", border: "none" }}>Apply Now</Button>
            </Col>
          </Row>
        </motion.div>
      ))}

      {/* Section 2: Services */}
      <h3 className="text-primary fw-bold mb-4 mt-5">Offered Services</h3>
      {services.map((service, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: idx * 0.1 }}
          className="mb-5"
        >
          <Row className="align-items-center">
            <Col md={4} className="mb-3 mb-md-0">
              <img src={service.image} alt={service.title} className="img-fluid rounded shadow" />
            </Col>
            <Col md={8}>
              <h4 className="d-flex align-items-center gap-2">
                {service.icon} {service.title}
              </h4>
              <p className="text-muted">{service.description}</p>
              <Button href="/apply" style={{ backgroundColor: "#10B981", border: "none" }}>Apply Now</Button>
            </Col>
          </Row>
        </motion.div>
      ))}

      {/* Ready to Start Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-5 py-5"
        style={{ backgroundColor: "#F9FAFB", borderRadius: "12px" }}
      >
        <h2 style={{ color: "#1E3A8A", fontWeight: "700" }}>Ready To Start Your Journey in Technology?</h2>
        <p style={{ color: "#14B8A6", fontSize: "1.2rem" }}>
          <span style={{ textDecoration: "line-through", marginRight: "10px" }}>45000 FRW</span>
          <span style={{ fontWeight: "700" }}>30000 FRW</span>
        </p>
        <Button href="/apply" style={{ backgroundColor: "#10B981", border: "none", padding: "12px 30px", fontSize: "1.1rem" }}>
          Apply Now
        </Button>
      </motion.div>
    </Container>
  );
};

export default Programs;
