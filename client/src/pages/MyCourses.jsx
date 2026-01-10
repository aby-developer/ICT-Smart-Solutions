import { Container, ListGroup } from "react-bootstrap";

const MyCourses = () => {
  return (
    <Container className="pt-5 mt-5">
      <h2 className="fw-bold">My Courses</h2>
      <ListGroup className="mt-3">
        <ListGroup.Item>Software Development</ListGroup.Item>
        <ListGroup.Item>Networking</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default MyCourses;
