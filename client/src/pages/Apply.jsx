import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const Apply = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1E3A8A, #10B981)",
        paddingTop: "100px",
        paddingBottom: "60px",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} md={9}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg border-0 rounded-4">
                <Card.Body className="p-4 p-md-5">
                  <h2
                    className="fw-bold text-center mb-3"
                    style={{ color: "#1E3A8A" }}
                  >
                    Apply Now
                  </h2>

                  <p className="text-center text-muted mb-4">
                    Start your journey with <strong>Ed Tech Solutions</strong>.
                    Fill in the form below to apply.
                  </p>

                  <Form>
                    {/* Full Name */}
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                        required
                      />
                    </Form.Group>

                    {/* Email */}
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="example@email.com"
                        required
                      />
                    </Form.Group>

                    {/* Phone */}
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="+250 7XX XXX XXX"
                        required
                      />
                    </Form.Group>

                    {/* Program */}
                    <Form.Group className="mb-3">
                      <Form.Label>Select Program</Form.Label>
                      <Form.Select required>
                        <option value="">-- Choose a program --</option>
                        <option>Software Development</option>
                        <option>Computer Systems & Architecture</option>
                        <option>Networking & Internet Technology</option>
                        <option>Multimedia Productions</option>
                        <option>Electronics & Telecommunications</option>
                        <option>Electrical Technology</option>
                        <option>Teacher Training Program</option>
                        <option>Holiday Program</option>
                        <option>Technical Support & ICT Supply</option>
                      </Form.Select>
                    </Form.Group>

                    {/* Message */}
                    <Form.Group className="mb-4">
                      <Form.Label>Additional Message (Optional)</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Tell us more about your interest..."
                      />
                    </Form.Group>

                    {/* Submit */}
                    <div className="d-grid">
                      <Button
                        size="lg"
                        style={{
                          backgroundColor: "#10B981",
                          border: "none",
                        }}
                        className="rounded-pill"
                      >
                        Submit Application
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Apply;
