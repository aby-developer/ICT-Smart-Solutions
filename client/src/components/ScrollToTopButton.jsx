import { useEffect, useState } from "react";
import { FaArrowUp, FaRocket } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./FloatingButtons.css";

// Use the same color scheme
const colors = {
  primary: "#1A56DB",     // Modern Blue
  secondary: "#F59E0B",   // Amber/Orange
  accent: "#7C3AED",      // Purple for highlights
  dark: "#1E3A8A",        // Dark Blue
  success: "#10B981",     // Emerald Green
};

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="scroll-top-float"
          onClick={scrollToTop}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: hover ? 360 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {hover ? <FaRocket /> : <FaArrowUp />}
          </motion.div>
          
          {/* Tooltip */}
          <motion.div 
            className="floating-tooltip"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: hover ? 1 : 0, x: hover ? 0 : 10 }}
            transition={{ duration: 0.2 }}
          >
            Scroll to Top
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;