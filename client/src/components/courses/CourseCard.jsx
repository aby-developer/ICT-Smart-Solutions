import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const CourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="h-100"
    >
      <Card className="shadow-sm h-100">
        <Card.Body>
          <span className="badge bg-primary mb-2">
            {course.code}
          </span>

          <Card.Title className="mt-2">
            {course.title}
          </Card.Title>

          <Card.Text className="text-muted">
            {course.description}
          </Card.Text>

          <p className="fw-semibold">
            Duration: {course.duration}
          </p>

          <Button variant="outline-primary">
            Apply Now
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
