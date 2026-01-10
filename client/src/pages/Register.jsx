import { Container, Form, Button, Card } from "react-bootstrap";

const Register = () => {
  return (
    <Container className="pt-5 mt-5 d-flex justify-content-center">
      <Card style={{ maxWidth: 500 }} className="shadow">
        <Card.Body>
          <h3 className="text-center mb-4">Register</h3>
          <Form>
            <Form.Control className="mb-3" placeholder="Full Name" />
            <Form.Control className="mb-3" type="email" placeholder="Email" />
            <Form.Control className="mb-3" type="password" placeholder="Password" />
            <Button className="w-100">Create Account</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
