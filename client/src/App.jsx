import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import LocationNotification from "./components/LocationNotification";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <AppNavbar />
      <LocationNotification /> {/* Location notification visible on all pages */}
      <WhatsAppButton />
      <ScrollToTopButton />
      <main style={{ marginTop: "80px" }}> {/* Add margin to avoid navbar overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer /> {/* Footer visible on all pages */}
    </Router>
  );
}

export default App;
