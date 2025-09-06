// components/Footer.jsx
import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#34495e',
    color: '#ecf0f1',
    textAlign: 'center',
    padding: '20px',
    marginTop: 'auto'
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Our Company. All rights reserved.</p>
      <p>Excellence in Technology, Marketing & Consultancy</p>
    </footer>
  );
}

export default Footer;