import { Container, Form, Button } from "react-bootstrap";

const Apply = () => {
  return (
    <Container className="pt-5 mt-5">
      <h2 className="fw-bold mb-4">Apply for a Course</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Course</Form.Label>
          <Form.Select>
            <option>Select course</option>
            <option>Software Development</option>
            <option>Networking</option>
            <option>Electrical Technology</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit">Submit Application</Button>
      </Form>
    </Container>
  );
};

export default Apply;
