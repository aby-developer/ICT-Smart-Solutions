import { FaWhatsapp } from "react-icons/fa";
import "./FloatingButtons.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/250789402303"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
