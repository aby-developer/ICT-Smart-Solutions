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
  FaBullseye
} from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Software Development (SOD)",
    icon: <FaLaptopCode />,
    image: "/programs/sod.png",
    topics: ["HTML, CSS, JS", "React Basics", "Backend Intro"]
  },
  {
    title: "Computer Systems & Architecture (CSA)",
    icon: <FaMicrochip />,
    image: "/programs/csa.png",
    topics: ["Hardware Basics", "CPU & Memory", "System Assembly"]
  },
  {
    title: "Networking & Internet Technology (NIT)",
    icon: <FaNetworkWired />,
    image: "/programs/nit.png",
    topics: ["LAN/WAN", "IP Addressing", "Routing Basics"]
  },
  {
    title: "Multimedia Productions (MMP)",
    icon: <FaPhotoVideo />,
    image: "/programs/mmp.png",
    topics: ["Graphic Design", "Video Editing", "Branding"]
  },
  {
    title: "Electronics & Telecommunications (ETE)",
    icon: <FaMicrochip />,
    image: "/programs/ete.png",
    topics: ["Circuits", "Signals", "Communication"]
  },
  {
    title: "Electrical Technology (ELT)",
    icon: <FaBolt />,
    image: "/programs/elt.png",
    topics: ["Wiring", "Safety", "Installations"]
  },
  {
    title: "Teacher Training Program",
    icon: <FaChalkboardTeacher />,
    image: "/programs/tt.png",
    topics: ["ICT Pedagogy", "Digital Tools", "Curriculum"]
  },
  {
    title: "Holiday Program",
    icon: <FaUmbrellaBeach />,
    image: "/programs/holiday.png",
    topics: ["Basic Coding", "Creativity", "Tech Exposure"]
  },
  {
    title: "Technical Support & ICT Supply",
    icon: <FaTools />,
    image: "/programs/ict.png",
    topics: ["Maintenance", "Troubleshooting", "ICT Equipment"]
  }
];

const Home = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="d-flex align-items-center"
        style={{
          minHeight: "90vh",
          background: "linear-gradient(135deg, #1E3A8A, #10B981)",
          color: "white",
          paddingTop: "70px"
        }}
      >
        <Container>
          <Row className="align-items-center flex-column-reverse flex-md-row">
            <Col md={6}>
              <h1 className="fw-bold display-5">
                Learn, Grow, and Succeed with Ed Tech Solutions
              </h1>
              <p className="lead mt-4">
                Hands-on IT training and internships for real-world careers.
              </p>
              <div className="d-flex gap-3 mt-3">
                <Button
                  as={Link}
                  to="/programs"
                  size="lg"
                  className="rounded-pill"
                  style={{ backgroundColor: "#14B8A6", border: "none" }}
                >
                  Explore Programs
                </Button>
                <Button
                  as={Link}
                  to="/apply"
                  size="lg"
                  className="rounded-pill"
                  style={{ backgroundColor: "#10B981", border: "none" }}
                >
                  Apply Now
                </Button>
              </div>
            </Col>

            <Col md={6}>
              <img
                src="/homepage.png"
                alt="Training Center"
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* PROGRAMS SLIDER */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #4F46E5, #9333EA)",
          color: "white"
        }}
      >
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">Available Trainings & Programs</h2>
            <Button as={Link} to="/programs" variant="light">
              Explore More →
            </Button>
          </div>

          <div className="position-relative">
            <Button
              className="position-absolute start-0 top-50 translate-middle-y z-3"
              variant="light"
              onClick={() => scroll("left")}
            >
              <FaArrowLeft />
            </Button>

            <div
  ref={scrollRef}
  className="d-flex gap-4 overflow-auto px-5 py-2"
  style={{ scrollBehavior: "smooth" }}
>
  {programs.map((p, i) => (
    <Card
      key={i}
      style={{ minWidth: "280px", borderRadius: "15px" }}
      className="shadow-lg text-white"
    >
      <Card.Img
        src={p.image}
        style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px", height: "160px", objectFit: "cover" }}
      />
      <Card.Body style={{ background: "linear-gradient(to bottom, #1E3A8A, #3B82F6)" }}>
        <h5 className="fw-bold">
          {p.icon} {p.title}
        </h5>
        <ul className="small">
          {p.topics.map((t, idx) => (
            <li key={idx}>{t}</li>
          ))}
        </ul>
        <p className="small fw-semibold">Duration: 1 Month</p>
        <Button
          as={Link}
          to="/apply"
          size="sm"
          className="rounded-pill"
          style={{ backgroundColor: "#10B981", border: "none" }}
        >
          Apply Now
        </Button>
      </Card.Body>
    </Card>
  ))}
</div>


            <Button
              className="position-absolute end-0 top-50 translate-middle-y z-3"
              variant="light"
              onClick={() => scroll("right")}
            >
              <FaArrowRight />
            </Button>
          </div>
        </Container>
      </section>

      {/* INVEST IN CAREER */}
      <section className="py-5 bg-white">
        <Container>
          <h3 className="fw-bold mb-4">Invest in your career</h3>
          <Row>
            <Col md={4}>
              <Card className="border-0">
                <Card.Body>
                  <FaBullseye size={30} className="text-primary" />
                  <h5 className="mt-3">Explore new skills</h5>
                  <p className="text-muted">
                    Gain in-demand technology skills.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="border-0">
                <Card.Body>
                  <FaCertificate size={30} className="text-primary" />
                  <h5 className="mt-3">Earn Certificates</h5>
                  <p className="text-muted">
                    Get recognized for every completed program.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="border-0">
                <Card.Body>
                  <FaUserGraduate size={30} className="text-primary" />
                  <h5 className="mt-3">Learn from Experts</h5>
                  <p className="text-muted">
                    Practical training led by professionals.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>


        {/* Ready to Start Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center mt-5 py-5"
                style={{ backgroundColor: "#91d4c7", borderRadius: "12px" }}
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
      </section>
    </>
  );
};

export default Home;
