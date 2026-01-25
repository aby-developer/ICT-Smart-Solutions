import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ===== Public Components ===== */
import AppNavbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import LocationNotification from "./components/LocationNotification";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton";

/* ===== Public Pages ===== */
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";

/* ===== Admin ===== */
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./pages/Admin/AdminLayout";

import AdminLogin from "./pages/Admin/AdminLogin";
import Dashboard from "./pages/Admin/Dashboard";
import Applications from "./pages/Admin/Applications";
import Messages from "./pages/Admin/Messages";
import Profile from "./pages/Admin/Profile";
import Settings from "./pages/Admin/Settings";

/* ===== Styles ===== */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/admin.css";

function App() {
  return (
    <Router>
      <Routes>

        {/* ================= PUBLIC WEBSITE ================= */}
        <Route
          path="/*"
          element={
            <>
              <AppNavbar />
              <LocationNotification />
              <WhatsAppButton />
              <ScrollToTopButton />

              <main style={{ marginTop: "80px" }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/programs" element={<Programs />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/apply" element={<Apply />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>

              <Footer />
            </>
          }
        />

        {/* ================= ADMIN AUTH ================= */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ================= ADMIN PANEL ================= */}
        <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute>
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    </ProtectedRoute>
  }
/>


  

        <Route
          path="/admin/applications"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Applications />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/messages"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Messages />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/profile"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Profile />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Settings />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
