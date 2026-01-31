import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaTimes, FaBell, FaClock, FaExternalLinkAlt } from "react-icons/fa";
import "./LocationNotification.css";

const LocationNotification = () => {
  const [visible, setVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // Your Google Maps links
  const viewMapLink = "https://maps.app.goo.gl/4R9btrQNzBV1gWZU9";
  const getDirectionsLink = "https://www.google.com/maps/dir/?api=1&destination=-1.9475304,30.0593279";

  useEffect(() => {
    const showInterval = setInterval(() => {
      setVisible(true);
      setNotificationCount(prev => prev + 1);

      // Only auto-close if not hovered
      const autoCloseTimer = setTimeout(() => {
        if (!isHovered) {
          setVisible(false);
        }
      }, 8000);

      return () => clearTimeout(autoCloseTimer);
    }, 15000); // show every 15 seconds

    return () => clearInterval(showInterval);
  }, [isHovered]);

  if (!visible) return null;

  return (
    <div 
      className="location-notification"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="notification-header">
        <div className="notification-badge">
          <FaBell className="bell-icon" />
          {notificationCount > 1 && (
            <span className="count-badge">{notificationCount}</span>
          )}
        </div>
        <div className="header-text">
          <h4>Location Update</h4>
          <span className="time-indicator">
            <FaClock /> Just now
          </span>
        </div>
      </div>

      <div className="notification-body">
        <div className="location-container">
          <FaMapMarkerAlt className="location-icon" />
          <div className="location-details">
            <p className="location-title">Current Store Location</p>
            <p className="location-address">
              Kigali - Nyarugenge District
            </p>
            <p className="location-highlight">
              Near Bank Of Kigali Headquarters
            </p>
          </div>
        </div>

        <div className="action-buttons">
          <a 
            href={viewMapLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-btn"
          >
            View Map <FaExternalLinkAlt className="external-icon" />
          </a>
          <a 
            href={getDirectionsLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="directions-btn"
          >
            Get Directions <FaExternalLinkAlt className="external-icon" />
          </a>
        </div>
      </div>

      <button
        className="close-btn"
        onClick={() => setVisible(false)}
        aria-label="Close notification"
        onMouseEnter={(e) => e.stopPropagation()}
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default LocationNotification;