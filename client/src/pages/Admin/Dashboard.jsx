import { useEffect, useState } from "react";
import { Card, Row, Col, Spinner, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsClipboardCheck, BsClockHistory, BsEnvelope, BsEnvelopeExclamation, BsList } from "react-icons/bs";
import api from "../../services/api";
import AdminSidebar from "./AdminSidebar"; // Make sure this exists

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/admin/dashboard")
      .then(res => setStats(res.data))
      .catch(() => {});
  }, []);

  const cards = [
    {
      title: "Total Applications",
      value: stats?.totalApplications,
      icon: <BsClipboardCheck size={28} />,
      bg: "primary",
      link: "/admin/applications"
    },
    {
      title: "Pending Applications",
      value: stats?.pendingApplications,
      icon: <BsClockHistory size={28} />,
      bg: "warning",
      link: "/admin/applications"
    },
    {
      title: "Total Messages",
      value: stats?.totalMessages,
      icon: <BsEnvelope size={28} />,
      bg: "success",
      link: "/admin/messages"
    },
    {
      title: "Unread Messages",
      value: stats?.unreadMessages,
      icon: <BsEnvelopeExclamation size={28} />,
      bg: "danger",
      link: "/admin/messages"
    }
  ];

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <AdminSidebar isOpen={sidebarOpen} />

      {/* Main content */}
      <div className="flex-grow-1">
        {/* Top bar for mobile */}
        <div className="d-lg-none bg-light shadow-sm p-2 d-flex justify-content-between align-items-center">
          <Button 
            variant="outline-secondary" 
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <BsList size={24} />
          </Button>
          <h5 className="mb-0">Dashboard</h5>
        </div>

        <div style={{ marginTop: "80px", padding: "20px" }}>
          <div className="mb-4">
            <h3 className="fw-bold">Welcome back 👋</h3>
            <p className="text-muted mb-0">
              Here’s what’s happening in your EdTech platform today
            </p>
          </div>

          {!stats ? (
            <div className="text-center py-5">
              <Spinner animation="border" />
            </div>
          ) : (
            <Row className="g-3">
              {cards.map((c, i) => (
                <Col xs={12} sm={6} md={6} lg={3} key={i}>
                  <Card
                    className="h-100 shadow-sm border-0 dashboard-card"
                    role="button"
                    onClick={() => navigate(c.link)}
                  >
                    <Card.Body className="d-flex align-items-center gap-3">
                      <div
                        className={`bg-${c.bg} text-white rounded-circle d-flex align-items-center justify-content-center`}
                        style={{ width: 55, height: 55 }}
                      >
                        {c.icon}
                      </div>

                      <div>
                        <h6 className="text-muted mb-1">{c.title}</h6>
                        <h3 className="fw-bold mb-0">{c.value ?? 0}</h3>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
