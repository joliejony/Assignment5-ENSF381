// Importing React and Link from react-router-dom
import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link component for navigation
import './styles.css'; // Importing CSS file for styling

// Header component renders the header section of the website
const Header = () => {
  return (
      <header className="header"> {/* Header section with the class name "header" */}
          <div>
              <div className="logo"> {/* Logo section */}
                  <img src="../images/logo.png" alt="" height="60" width="55" /> {/* Company logo */}
              </div>
              <p className="company-name">Company Name</p> {/* Company name */}
          </div>
          <nav>
              <div className="links"> {/* Navigation links */}
                  <div><Link to="/">Home</Link></div> {/* Link to the home page */}
                  <div><Link to="/products">Products</Link></div> {/* Link to the products page */}
                  <div><Link to="/login">Login</Link></div> {/* Link to the login page */}
              </div>
          </nav>
      </header>
  );
};

export default Header; // Export the Header component as the default export
