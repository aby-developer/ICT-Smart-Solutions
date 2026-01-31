import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaExclamationTriangle } from "react-icons/fa";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        {/* Decorative Background Elements */}
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
        
        {/* Main Error Display */}
        <div className="error-header">
          <div className="error-icon">
            <FaExclamationTriangle />
          </div>
          <h1 className="error-code">404</h1>
        </div>
        
        <h2 className="error-title">Page Not Found</h2>
        
        <p className="error-description">
          The page you're looking for seems to have wandered off into the digital void. 
          It might have been moved, deleted, or never existed in the first place.
        </p>
        
        {/* Search Suggestion */}
        <div className="search-suggestion">
          <FaSearch className="search-icon" />
          <span>Try searching or check the URL for typos</span>
        </div>
        
        {/* Main Action Button */}
        <div className="action-button-container">
          <Link to="/" className="primary-btn">
            <FaHome className="btn-icon" />
            Back to Homepage
          </Link>
        </div>
        
        {/* Quick Links */}
        <div className="quick-links">
          <p className="quick-links-title">Explore Our Site:</p>
          <div className="links-grid">
            <Link to="/" className="quick-link">Home</Link>
            <Link to="/apply" className="quick-link">Apply</Link>
            <Link to="/about" className="quick-link">About</Link>
            <Link to="/contact" className="quick-link">Contact</Link>
            <Link to="/programs" className="quick-link">Programs</Link>
          </div>
        </div>
        
        {/* Error Details */}
        <details className="error-details">
          <summary>Technical Details</summary>
          <div className="details-content">
            <p><strong>Error Code:</strong> 404 - Resource Not Found</p>
            <p><strong>Possible Reasons:</strong></p>
            <ul>
              <li>The page has been moved or renamed</li>
              <li>You typed the URL incorrectly</li>
              <li>The page is temporarily unavailable</li>
              <li>The link you followed is broken</li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
};

export default NotFound;