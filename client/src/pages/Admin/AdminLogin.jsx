// src/pages/Admin/AdminLogin.jsx
import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { 
  FaLock, 
  FaEnvelope, 
  FaSignInAlt, 
  FaShieldAlt, 
  FaEye, 
  FaEyeSlash,
  FaLightbulb,
  FaKey
} from "react-icons/fa";

import AppNavbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

// Use the same color scheme
const colors = {
  primary: "#1A56DB",     // Modern Blue
  secondary: "#F59E0B",   // Amber/Orange
  accent: "#7C3AED",      // Purple for highlights
  dark: "#1E3A8A",        // Dark Blue
  light: "#F0F9FF",       // Light Blue background
  success: "#10B981",     // Emerald Green
  warning: "#FBBF24",     // Yellow
  info: "#3B82F6",        // Light Blue
  gray: "#6B7280",        // Gray
  lightGray: "#F9FAFB",   // Light Gray
  darkGray: "#374151",    // Dark Gray
  teal: "#0D9488"         // Teal for variety
};

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:5000/api/admin/login",
        { email, password }
      );

      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminInfo", JSON.stringify(data.admin));

      toast.success("Login successful! Redirecting...");
      
      // Add a small delay before navigation
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1500);
      
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Invalid email or password";
      toast.error(errorMessage);
      
      // Set specific error for form
      if (errorMessage.includes("email") || errorMessage.includes("Email")) {
        setErrors({ ...errors, email: errorMessage });
      } else if (errorMessage.includes("password") || errorMessage.includes("Password")) {
        setErrors({ ...errors, password: errorMessage });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Navbar included */}
      <AppNavbar />

      {/* Main Login Section */}
      <section
        className="d-flex align-items-center min-vh-100"
        style={{
          background: `linear-gradient(135deg, ${colors.light} 0%, white 100%)`,
          paddingTop: "80px",
          paddingBottom: "60px"
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} xl={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-5">
                  <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
                    <div style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "15px",
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 10px 25px ${colors.primary}40`
                    }}>
                      <FaLightbulb size={28} color="white" />
                    </div>
                    <div className="text-start">
                      <h1 className="fw-bold mb-0" style={{ color: colors.dark }}>
                        ICT Smart
                      </h1>
                      <h1 className="fw-bold" style={{ color: colors.primary }}>
                        Solutions
                      </h1>
                    </div>
                  </div>
                  <h2 className="fw-bold mb-3" style={{ color: colors.dark }}>
                    Admin Portal
                  </h2>
                  <p className="lead mb-0" style={{ color: colors.gray }}>
                    Secure access to manage applications, programs, and system settings
                  </p>
                </div>

                <Card className="border-0 shadow-lg overflow-hidden" style={{ borderRadius: "20px" }}>
                  <Row className="g-0">
                    {/* Left Side - Login Form */}
                    <Col lg={7}>
                      <Card.Body className="p-4 p-md-5">
                        <div className="d-flex align-items-center gap-3 mb-4">
                          <div style={{ 
                            width: "50px", 
                            height: "50px", 
                            backgroundColor: `${colors.primary}15`,
                            borderRadius: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.5rem",
                            color: colors.primary
                          }}>
                            <FaSignInAlt />
                          </div>
                          <div>
                            <h3 className="fw-bold mb-1" style={{ color: colors.dark }}>
                              Administrator Login
                            </h3>
                            <p className="text-muted mb-0">
                              Enter your credentials to access the dashboard
                            </p>
                          </div>
                        </div>

                        <Alert variant="info" className="mb-4">
                          <FaShieldAlt className="me-2" />
                          <strong>Security Notice:</strong> This portal is restricted to authorized personnel only.
                        </Alert>

                        <Form onSubmit={handleSubmit}>
                          {/* Email Field */}
                          <Form.Group className="mb-4">
                            <Form.Label className="fw-semibold d-flex align-items-center">
                              <FaEnvelope className="me-2" style={{ color: colors.primary }} />
                              Email Address
                            </Form.Label>
                            <div className="position-relative">
                              <Form.Control
                                type="email"
                                placeholder="admin@ictsmartsolutions.com"
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                  setErrors({ ...errors, email: "" });
                                }}
                                required
                                className="py-3 rounded-3"
                                style={{ 
                                  border: `2px solid ${errors.email ? colors.accent : colors.lightGray}`,
                                  transition: "all 0.3s ease",
                                  paddingLeft: "45px"
                                }}
                                onFocus={(e) => e.target.style.borderColor = colors.primary}
                                onBlur={(e) => e.target.style.borderColor = errors.email ? colors.accent : colors.lightGray}
                              />
                              <div style={{
                                position: "absolute",
                                left: "15px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: errors.email ? colors.accent : colors.gray
                              }}>
                                <FaEnvelope />
                              </div>
                            </div>
                            {errors.email && (
                              <Form.Text className="text-danger small d-flex align-items-center mt-1">
                                {errors.email}
                              </Form.Text>
                            )}
                          </Form.Group>

                          {/* Password Field */}
                          <Form.Group className="mb-4">
                            <Form.Label className="fw-semibold d-flex align-items-center">
                              <FaLock className="me-2" style={{ color: colors.primary }} />
                              Password
                            </Form.Label>
                            <div className="position-relative">
                              <Form.Control
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                  setErrors({ ...errors, password: "" });
                                }}
                                required
                                className="py-3 rounded-3"
                                style={{ 
                                  border: `2px solid ${errors.password ? colors.accent : colors.lightGray}`,
                                  transition: "all 0.3s ease",
                                  paddingLeft: "45px",
                                  paddingRight: "50px"
                                }}
                                onFocus={(e) => e.target.style.borderColor = colors.primary}
                                onBlur={(e) => e.target.style.borderColor = errors.password ? colors.accent : colors.lightGray}
                              />
                              <div style={{
                                position: "absolute",
                                left: "15px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: errors.password ? colors.accent : colors.gray
                              }}>
                                <FaKey />
                              </div>
                              <Button
                                variant="link"
                                className="position-absolute end-0 top-50 translate-middle-y"
                                style={{ color: colors.gray }}
                                onClick={() => setShowPassword(!showPassword)}
                                type="button"
                              >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                              </Button>
                            </div>
                            {errors.password && (
                              <Form.Text className="text-danger small d-flex align-items-center mt-1">
                                {errors.password}
                              </Form.Text>
                            )}
                          </Form.Group>

                          {/* Submit Button */}
                          <Button
                            type="submit"
                            disabled={loading}
                            className="w-100 py-3 rounded-pill shadow"
                            style={{ 
                              background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                              border: "none",
                              fontWeight: "600",
                              fontSize: "1.1rem"
                            }}
                          >
                            {loading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                Authenticating...
                              </>
                            ) : (
                              <>
                                <FaSignInAlt className="me-2" />
                                Login to Dashboard
                              </>
                            )}
                          </Button>

                          {/* Security Tips */}
                          <div className="mt-4 pt-3 border-top">
                            <h6 className="fw-semibold mb-2" style={{ color: colors.dark }}>
                              <FaShieldAlt className="me-2" style={{ color: colors.success }} />
                              Security Tips:
                            </h6>
                            <ul className="list-unstyled mb-0">
                              <li className="mb-1">
                                <small className="text-muted">
                                  • Use a strong, unique password
                                </small>
                              </li>
                              <li className="mb-1">
                                <small className="text-muted">
                                  • Don't share your login credentials
                                </small>
                              </li>
                              <li>
                                <small className="text-muted">
                                  • Always logout after your session
                                </small>
                              </li>
                            </ul>
                          </div>
                        </Form>
                      </Card.Body>
                    </Col>

                    {/* Right Side - Admin Info */}
                    <Col lg={5} className="d-none d-lg-block">
                      <div 
                        className="h-100 d-flex flex-column justify-content-center p-4 p-md-5 text-white"
                        style={{ 
                          background: `linear-gradient(135deg, ${colors.dark}, ${colors.primary})`
                        }}
                      >
                        <div className="text-center mb-4">
                          <div style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(255,255,255,0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "2rem",
                            margin: "0 auto 20px"
                          }}>
                            <FaShieldAlt />
                          </div>
                          <h3 className="fw-bold mb-3">Admin Access Only</h3>
                          <p className="opacity-90">
                            This portal is strictly for authorized ICT Smart Solutions administrators
                          </p>
                        </div>

                        <div className="mt-4">
                          <h5 className="fw-bold mb-3">Admin Privileges:</h5>
                          <ul className="list-unstyled">
                            <li className="mb-3 d-flex align-items-center">
                              <div className="me-3">
                                <div style={{
                                  width: "30px",
                                  height: "30px",
                                  borderRadius: "8px",
                                  backgroundColor: "rgba(255,255,255,0.2)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center"
                                }}>
                                  <span className="text-warning">✓</span>
                                </div>
                              </div>
                              <span>Manage student applications</span>
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                              <div className="me-3">
                                <div style={{
                                  width: "30px",
                                  height: "30px",
                                  borderRadius: "8px",
                                  backgroundColor: "rgba(255,255,255,0.2)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center"
                                }}>
                                  <span className="text-warning">✓</span>
                                </div>
                              </div>
                              <span>View program statistics</span>
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                              <div className="me-3">
                                <div style={{
                                  width: "30px",
                                  height: "30px",
                                  borderRadius: "8px",
                                  backgroundColor: "rgba(255,255,255,0.2)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center"
                                }}>
                                  <span className="text-warning">✓</span>
                                </div>
                              </div>
                              <span>Generate reports</span>
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                              <div className="me-3">
                                <div style={{
                                  width: "30px",
                                  height: "30px",
                                  borderRadius: "8px",
                                  backgroundColor: "rgba(255,255,255,0.2)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center"
                                }}>
                                  <span className="text-warning">✓</span>
                                </div>
                              </div>
                              <span>Update website content</span>
                            </li>
                            <li className="d-flex align-items-center">
                              <div className="me-3">
                                <div style={{
                                  width: "30px",
                                  height: "30px",
                                  borderRadius: "8px",
                                  backgroundColor: "rgba(255,255,255,0.2)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center"
                                }}>
                                  <span className="text-warning">✓</span>
                                </div>
                              </div>
                              <span>System configuration</span>
                            </li>
                          </ul>
                        </div>

                        {/* Emergency Contact */}
                        <div className="mt-4 pt-3 border-top border-white-10">
                          <small className="opacity-75 d-block mb-1">⚠️ Unauthorized access is prohibited</small>
                          <small className="opacity-75">
                            Contact system administrator for assistance
                          </small>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card>

                {/* Mobile Admin Info */}
                <div className="d-lg-none mt-4">
                  <Card className="border-0 shadow-sm" style={{ borderRadius: "16px" }}>
                    <Card.Body className="p-4">
                      <div className="text-center mb-3">
                        <h5 className="fw-bold mb-2" style={{ color: colors.dark }}>
                          Admin Access Only
                        </h5>
                        <p className="text-muted small">
                          This portal is for authorized ICT Smart Solutions administrators only
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>

                {/* Copyright */}
                <div className="text-center mt-4">
                  <p className="text-muted small mb-0">
                    © {new Date().getFullYear()} ICT Smart Solutions. All rights reserved.
                  </p>
                  <p className="text-muted small">
                    <a 
                      href="/" 
                      style={{ 
                        color: colors.primary, 
                        textDecoration: "none" 
                      }}
                    >
                      Return to Homepage
                    </a>
                  </p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer included */}
      <Footer />

      {/* Toast notifications */}
      <ToastContainer 
        position="top-right" 
        className="p-3" 
        autoClose={3000}
        theme="colored"
        style={{ marginTop: "70px" }}
      />
    </>
  );
};

export default AdminLogin;