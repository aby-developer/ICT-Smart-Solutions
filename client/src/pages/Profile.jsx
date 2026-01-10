import { Container, Form, Button } from "react-bootstrap";

const Profile = () => {
  return (
    <Container className="pt-5 mt-5">
      <h2 className="fw-bold mb-3">My Profile</h2>
      <Form>
        <Form.Control className="mb-3" placeholder="Name" />
        <Form.Control className="mb-3" type="email" placeholder="Email" />
        <Button>Update Profile</Button>
      </Form>
    </Container>
  );
};

export default Profile;
