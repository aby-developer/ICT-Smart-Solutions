import { Container, Button } from "react-bootstrap";

const CourseDetails = () => {
  return (
    <Container className="pt-5 mt-5">
      <h2 className="fw-bold">Course Details</h2>
      <p className="mt-3">
        This course provides in-depth knowledge and practical experience.
      </p>
      <ul>
        <li>Duration: 6 Months</li>
        <li>Mode: Physical / Online</li>
        <li>Certification Included</li>
      </ul>
      <Button className="mt-3">Apply Now</Button>
    </Container>
  );
};

export default CourseDetails;
