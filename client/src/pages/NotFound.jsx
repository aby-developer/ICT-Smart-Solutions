import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "90vh", background: "#F3F4F6" }}
    >
      <h1 style={{ fontSize: "8rem", color: "#3B82F6" }}>404</h1>
      <h2 className="fw-bold mt-3">Oops! Page Not Found</h2>
      <p className="text-muted mt-2 mb-4">
        The page you are looking for does not exist.
      </p>
      <Button
        as={Link}
        to="/"
        style={{ backgroundColor: "#10B981", border: "none" }}
        size="lg"
        className="rounded-pill"
      >
        Go Back Home
      </Button>
    </section>
  );
};

export default NotFound;
