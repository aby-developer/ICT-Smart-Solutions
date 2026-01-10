import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const courses = [
  "Electrical Technology (ELT)",
  "Software Development (SOD)",
  "Computer Systems & Architecture (CSA)",
  "Networking & Internet Technology (NIT)",
  "Multimedia Productions (MMP)",
  "Electronics & Telecommunications (ETE)"
];

const Home = () => {
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
            {/* LEFT: TEXT + BUTTONS */}
            <Col md={6} className="text-center text-md-start mt-4 mt-md-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="fw-bold display-5">
                  Learn, Grow, and Succeed with Ed Tech Solutions
                </h1>
                <p className="lead mt-4">
                  Hands-on training in technology fields for real-world careers.
                  Build your future with practical courses in software development,
                  networking, electronics, and more.
                </p>

                {/* BUTTONS */}
                <div className="mt-3 d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
                  <Button
                    size="lg"
                    style={{ backgroundColor: "#14B8A6", border: "none" }}
                    className="rounded-pill"
                  >
                    Explore Programs
                  </Button>

                  <Button
                    size="lg"
                    style={{ backgroundColor: "#10B981", border: "none" }}
                    className="rounded-pill"
                  >
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            </Col>

            {/* RIGHT: HERO IMAGE */}
            <Col md={6}>
              <motion.img
                src="/homepage.png"  // <-- your image here in public folder
                alt="IT Training Center"
                className="img-fluid rounded shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-5" style={{ backgroundColor: "#F9FAFB" }}>
        <Container>
          <h2 className="text-center fw-bold mb-5" style={{ color: "#1E3A8A" }}>
            Our Training Programs
          </h2>

          <Row>
            {courses.map((program, index) => (
              <Col xs={12} sm={6} md={4} className="mb-4" key={index}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Body>
                      <Card.Title className="fw-bold" style={{ color: "#1E3A8A" }}>
                        {program}
                      </Card.Title>
                      <Card.Text className="text-muted mt-2">
                        Industry-relevant skills with practical projects and certification.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section className="py-5 text-center">
        <Container>
          <h2 className="fw-bold" style={{ color: "#1E3A8A" }}>
            Start Your Career Today
          </h2>
          <p className="text-muted mt-3">
            Join hundreds of students building successful careers in technology.
          </p>
          <Button
            size="lg"
            style={{ backgroundColor: "#10B981", border: "none" }}
            className="mt-3 px-5 rounded-pill"
          >
            Apply Now
          </Button>
        </Container>
      </section>
    </>
  );
};

export default Home;
