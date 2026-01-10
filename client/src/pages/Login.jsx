import { Container, Form, Button, Card } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="pt-5 mt-5 d-flex justify-content-center">
      <Card style={{ maxWidth: 400 }} className="shadow">
        <Card.Body>
          <h3 className="text-center mb-4">Login</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button className="w-100">Login</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
