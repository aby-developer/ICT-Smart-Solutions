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
  FaKey,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaFileAlt,
  FaCog,
  FaCheckCircle
} from "react-icons/fa";

import AppNavbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const apiUrl = import.meta.env.VITE_API_URL;

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
        `${apiUrl}/api/admin/login`,
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
            <Col lg={10} xl={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Header Section */}
                <div className="text-center mb-5">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="d-flex align-items-center justify-content-center gap-3 mb-4"
                  >
                    <div style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "18px",
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 10px 30px ${colors.primary}40`,
                      border: `3px solid white`
                    }}>
                      <FaLightbulb size={32} color="white" />
                    </div>
                    <div className="text-start">
                      <h1 className="fw-bold mb-0" style={{ 
                        color: colors.dark,
                        fontSize: "clamp(1.5rem, 4vw, 2rem)"
                      }}>
                        ICT Smart
                      </h1>
                      <h1 className="fw-bold mb-2" style={{ 
                        color: colors.primary,
                        fontSize: "clamp(1.5rem, 4vw, 2rem)"
                      }}>
                        Solutions
                      </h1>
                      <div style={{
                        width: "100px",
                        height: "4px",
                        background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                        borderRadius: "2px"
                      }}></div>
                    </div>
                  </motion.div>
                  
                  <h2 className="fw-bold mb-3" style={{ 
                    color: colors.dark,
                    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
                  }}>
                    Admin Portal
                  </h2>
                  <p className="lead mb-0" style={{ 
                    color: colors.gray,
                    fontSize: "clamp(0.95rem, 2vw, 1.25rem)",
                    maxWidth: "600px",
                    margin: "0 auto"
                  }}>
                    Secure access to manage applications, programs, and system settings
                  </p>
                </div>

                <Card className="border-0 shadow-lg overflow-hidden" style={{ 
                  borderRadius: "20px",
                  border: `1px solid ${colors.primary}20`
                }}>
                  <Row className="g-0">
                    {/* Left Side - Login Form */}
                    <Col lg={7} xl={7}>
                      <Card.Body className="p-4 p-md-5">
                        <div className="d-flex align-items-center gap-3 mb-4">
                          <div style={{ 
                            width: "55px", 
                            height: "55px", 
                            backgroundColor: `${colors.primary}15`,
                            borderRadius: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.6rem",
                            color: colors.primary,
                            boxShadow: `0 5px 15px ${colors.primary}20`
                          }}>
                            <FaSignInAlt />
                          </div>
                          <div>
                            <h3 className="fw-bold mb-1" style={{ 
                              color: colors.dark,
                              fontSize: "clamp(1.25rem, 3vw, 1.75rem)"
                            }}>
                              Administrator Login
                            </h3>
                            <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                              Enter your credentials to access the admin dashboard
                            </p>
                          </div>
                        </div>

                        <Alert variant="info" className="mb-4 border-0" style={{ 
                          backgroundColor: `${colors.info}15`,
                          borderLeft: `4px solid ${colors.info}`,
                          color: colors.darkGray
                        }}>
                          <FaShieldAlt className="me-2" style={{ color: colors.info }} />
                          <strong>Security Notice:</strong> This portal is restricted to authorized personnel only. All activities are logged.
                        </Alert>

                        <Form onSubmit={handleSubmit}>
                          {/* Email Field */}
                          <Form.Group className="mb-4">
                            <Form.Label className="fw-semibold d-flex align-items-center mb-2">
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
                                  paddingLeft: "50px",
                                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                  backgroundColor: errors.email ? `${colors.accent}05` : "white"
                                }}
                                onFocus={(e) => e.target.style.borderColor = colors.primary}
                                onBlur={(e) => e.target.style.borderColor = errors.email ? colors.accent : colors.lightGray}
                              />
                              <div style={{
                                position: "absolute",
                                left: "18px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: errors.email ? colors.accent : colors.primary,
                                fontSize: "1.1rem"
                              }}>
                                <FaEnvelope />
                              </div>
                            </div>
                            {errors.email && (
                              <Form.Text className="text-danger small d-flex align-items-center mt-2">
                                <FaShieldAlt className="me-1" size={12} />
                                {errors.email}
                              </Form.Text>
                            )}
                          </Form.Group>

                          {/* Password Field */}
                          <Form.Group className="mb-4">
                            <Form.Label className="fw-semibold d-flex align-items-center mb-2">
                              <FaLock className="me-2" style={{ color: colors.primary }} />
                              Password
                            </Form.Label>
                            <div className="position-relative">
                              <Form.Control
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
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
                                  paddingLeft: "50px",
                                  paddingRight: "55px",
                                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                  backgroundColor: errors.password ? `${colors.accent}05` : "white"
                                }}
                                onFocus={(e) => e.target.style.borderColor = colors.primary}
                                onBlur={(e) => e.target.style.borderColor = errors.password ? colors.accent : colors.lightGray}
                              />
                              <div style={{
                                position: "absolute",
                                left: "18px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: errors.password ? colors.accent : colors.primary,
                                fontSize: "1.1rem"
                              }}>
                                <FaKey />
                              </div>
                              <Button
                                variant="link"
                                className="position-absolute end-0 top-50 translate-middle-y p-0"
                                style={{ 
                                  color: colors.gray,
                                  width: "50px",
                                  height: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center"
                                }}
                                onClick={() => setShowPassword(!showPassword)}
                                type="button"
                              >
                                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                              </Button>
                            </div>
                            {errors.password && (
                              <Form.Text className="text-danger small d-flex align-items-center mt-2">
                                <FaShieldAlt className="me-1" size={12} />
                                {errors.password}
                              </Form.Text>
                            )}
                          </Form.Group>

                          {/* Submit Button */}
                          <Button
                            type="submit"
                            disabled={loading}
                            className="w-100 py-3 rounded-pill shadow-lg"
                            style={{ 
                              background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                              border: "none",
                              fontWeight: "600",
                              fontSize: "clamp(0.875rem, 2vw, 1.1rem)",
                              transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                          >
                            {loading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                Authenticating...
                              </>
                            ) : (
                              <>
                                <FaRocket className="me-2" />
                                Login to Dashboard
                              </>
                            )}
                          </Button>

                          {/* Security Tips */}
                          <div className="mt-4 pt-3 border-top">
                            <h6 className="fw-semibold mb-3 d-flex align-items-center" style={{ color: colors.dark }}>
                              <FaShieldAlt className="me-2" style={{ color: colors.success }} />
                              Security Tips:
                            </h6>
                            <div className="row g-2">
                              <div className="col-12">
                                <div className="d-flex align-items-center p-2 rounded-2" style={{ backgroundColor: `${colors.success}08` }}>
                                  <FaCheckCircle className="me-2" size={14} style={{ color: colors.success }} />
                                  <small className="text-muted">Use a strong, unique password</small>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="d-flex align-items-center p-2 rounded-2" style={{ backgroundColor: `${colors.warning}08` }}>
                                  <FaCheckCircle className="me-2" size={14} style={{ color: colors.warning }} />
                                  <small className="text-muted">Don't share your login credentials</small>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="d-flex align-items-center p-2 rounded-2" style={{ backgroundColor: `${colors.accent}08` }}>
                                  <FaCheckCircle className="me-2" size={14} style={{ color: colors.accent }} />
                                  <small className="text-muted">Always logout after your session</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </Card.Body>
                    </Col>

                    {/* Right Side - Admin Info */}
                    <Col lg={5} xl={5} className="d-none d-lg-block">
                      <div 
                        className="h-100 d-flex flex-column justify-content-center p-4 p-md-5 text-white"
                        style={{ 
                          background: `linear-gradient(135deg, ${colors.dark}, ${colors.primary})`,
                          position: "relative",
                          overflow: "hidden"
                        }}
                      >
                        {/* Background Pattern */}
                        <div className="position-absolute top-0 start-0 w-100 h-100"
                          style={{
                            backgroundImage: `radial-gradient(circle at 20% 50%, ${colors.secondary}15 0%, transparent 50%),
                                             radial-gradient(circle at 80% 20%, ${colors.accent}10 0%, transparent 50%)`,
                            opacity: 0.3
                          }}
                        />
                        
                        <div className="position-relative z-1 text-center mb-4">
                          <div style={{
                            width: "90px",
                            height: "90px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(255,255,255,0.15)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "2.5rem",
                            margin: "0 auto 25px",
                            border: `3px solid rgba(255,255,255,0.3)`,
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                          }}>
                            <FaShieldAlt />
                          </div>
                          <h3 className="fw-bold mb-3" style={{ fontSize: "1.8rem" }}>Admin Access Only</h3>
                          <p className="opacity-90 mb-0" style={{ fontSize: "0.95rem" }}>
                            This portal is strictly for authorized ICT Smart Solutions administrators
                          </p>
                        </div>

                        <div className="position-relative z-1 mt-4">
                          <h5 className="fw-bold mb-3 text-center" style={{ color: colors.secondary }}>Admin Privileges:</h5>
                          <div className="row g-3">
                            {[
                              { icon: <FaUsers />, text: "Manage student applications", color: colors.success },
                              { icon: <FaChartLine />, text: "View program statistics", color: colors.secondary },
                              { icon: <FaFileAlt />, text: "Generate reports", color: colors.accent },
                              { icon: <FaCog />, text: "System configuration", color: colors.info }
                            ].map((item, index) => (
                              <div key={index} className="col-12">
                                <motion.div
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                  className="d-flex align-items-center p-3 rounded-3"
                                  style={{ 
                                    backgroundColor: "rgba(255,255,255,0.08)",
                                    backdropFilter: "blur(10px)",
                                    border: `1px solid rgba(255,255,255,0.1)`
                                  }}
                                >
                                  <div className="me-3">
                                    <div style={{
                                      width: "40px",
                                      height: "40px",
                                      borderRadius: "10px",
                                      backgroundColor: `${item.color}30`,
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      fontSize: "1.2rem",
                                      color: item.color
                                    }}>
                                      {item.icon}
                                    </div>
                                  </div>
                                  <span style={{ fontSize: "0.9rem" }}>{item.text}</span>
                                </motion.div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Emergency Contact */}
                        <div className="position-relative z-1 mt-4 pt-4 border-top border-white-10">
                          <div className="d-flex align-items-center justify-content-center p-3 rounded-3" style={{ 
                            backgroundColor: "rgba(255,255,255,0.08)",
                            border: `1px solid ${colors.secondary}30`
                          }}>
                            <div style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              backgroundColor: colors.secondary,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: "15px",
                              flexShrink: 0
                            }}>
                              <FaShieldAlt size={18} />
                            </div>
                            <div className="text-start">
                              <small className="opacity-90 d-block mb-1 fw-semibold">⚠️ Unauthorized access is prohibited</small>
                              <small className="opacity-75">Contact system administrator for assistance</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card>

                {/* Mobile Admin Info */}
                <div className="d-lg-none mt-4">
                  <Card className="border-0 shadow-lg" style={{ 
                    borderRadius: "16px",
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.dark})`,
                    color: "white"
                  }}>
                    <Card.Body className="p-4">
                      <div className="text-center mb-3">
                        <div style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(255,255,255,0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.8rem",
                          margin: "0 auto 15px",
                          border: `2px solid rgba(255,255,255,0.3)`
                        }}>
                          <FaShieldAlt />
                        </div>
                        <h5 className="fw-bold mb-2">Admin Access Only</h5>
                        <p className="opacity-90 small mb-0">
                          This portal is for authorized ICT Smart Solutions administrators only
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>

                {/* Copyright & Links */}
                <div className="text-center mt-4">
                  <p className="text-muted small mb-2">
                    © {new Date().getFullYear()} ICT Smart Solutions. All rights reserved.
                  </p>
                  <p className="mb-0">
                    <a 
                      href="/" 
                      className="fw-semibold"
                      style={{ 
                        color: colors.primary, 
                        textDecoration: "none",
                        fontSize: "0.95rem"
                      }}
                    >
                      ← Return to Homepage
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