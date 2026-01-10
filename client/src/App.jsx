import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";

function App() {
  return (
    <Router>
      <AppNavbar />
      
      <main style={{ marginTop: "80px" }}> {/* Add margin to avoid navbar overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </main>

      <Footer /> {/* Footer visible on all pages */}
    </Router>
  );
}

export default App;
