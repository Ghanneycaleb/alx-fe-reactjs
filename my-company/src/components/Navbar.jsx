// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
   const navStyle = {
    backgroundColor: '#2c3e50',
    padding: '1rem',
    marginBottom: '0',
    width: '100%',
    boxSizing: 'border-box'
  };

  const ulStyle = {
    listStyle: 'none',
    margin: '0',
    padding: '0',
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  const linkStyle = {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '500',
    transition: 'color 0.3s ease'
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li>
          <Link 
            to="/" 
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.color = '#3498db'}
            onMouseLeave={(e) => e.target.style.color = '#ecf0f1'}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.color = '#3498db'}
            onMouseLeave={(e) => e.target.style.color = '#ecf0f1'}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/services" 
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.color = '#3498db'}
            onMouseLeave={(e) => e.target.style.color = '#ecf0f1'}
          >
            Services
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.color = '#3498db'}
            onMouseLeave={(e) => e.target.style.color = '#ecf0f1'}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;