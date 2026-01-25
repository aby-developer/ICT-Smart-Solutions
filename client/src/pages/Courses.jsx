import { Container, Row, Col, Card, Button } from "react-bootstrap";

const courses = [
  
  "Software Development (SOD)",
  "Computer Systems & Architecture (CSA)",
  "Networking & Internet Technology (NIT)",
  "Multimedia Productions (MMP)",
  "Electronics & Telecommunications (ETE)"
];

const Courses = () => {
  return (
    <Container className="pt-5 mt-5">
      <h2 className="text-center fw-bold mb-4">Our Courses</h2>
      <Row>
        {courses.map((course, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{course}</Card.Title>
                <Card.Text>
                  Industry-focused training with hands-on projects.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
