import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import "./LocationNotification.css";

const LocationNotification = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showInterval = setInterval(() => {
      setVisible(true);

      // auto-close after 7 seconds
      setTimeout(() => {
        setVisible(false);
      }, 7000);

    }, 10000); // show every 10 seconds

    return () => clearInterval(showInterval);
  }, []);

  if (!visible) return null;

  return (
    <div className="location-notification">
      <FaMapMarkerAlt className="location-icon" />

      <span>
        Kigali - Kicukiro Sonatube -{" "}
        <strong>Inindi House (Former UTB University)</strong>
      </span>

      <button
        className="close-btn"
        onClick={() => setVisible(false)}
        aria-label="Close"
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default LocationNotification;
