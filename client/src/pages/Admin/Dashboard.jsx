import { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import api from "../../services/api";

const Dashboard = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    api.get("/admin/dashboard")
      .then(res => setStats(res.data))
      .catch(() => {});
  }, []);

  const cards = [
    { title: "Total Applications", value: stats.totalApplications },
    { title: "Pending Applications", value: stats.pendingApplications },
    { title: "Total Messages", value: stats.totalMessages },
    { title: "Unread Messages", value: stats.unreadMessages },
  ];

  return (
    <>
      <h3 className="mb-4">Dashboard</h3>
      <Row>
        {cards.map((c, i) => (
          <Col md={3} key={i}>
            <Card className="shadow-sm mb-3">
              <Card.Body>
                <h6>{c.title}</h6>
                <h3>{c.value ?? 0}</h3>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Dashboard;
