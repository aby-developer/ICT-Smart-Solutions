import { FaWhatsapp, FaComment } from "react-icons/fa";
import { motion } from "framer-motion";
import "./FloatingButtons.css";
import { useState } from "react";

const WhatsAppButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      href="https://wa.me/250789402303"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{ rotate: hover ? 360 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {hover ? <FaComment /> : <FaWhatsapp />}
      </motion.div>
      
      {/* Unread badge */}
      <motion.span 
        className="whatsapp-badge"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        3
      </motion.span>
      
      {/* Tooltip */}
      <motion.div 
        className="floating-tooltip"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: hover ? 1 : 0, x: hover ? 0 : 10 }}
        transition={{ duration: 0.2 }}
      >
        Chat with us!
      </motion.div>
      
      {/* Ping animation */}
      <motion.div 
        className="whatsapp-ping"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.6, 0, 0.6]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.a>
  );
};

export default WhatsAppButton;