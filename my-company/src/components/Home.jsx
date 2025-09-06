// components/Home.jsx
import React from 'react';

function Home() {
  const containerStyle = {
  padding: '40px 20px',
  backgroundColor: '#f8f9fa',
  minHeight: '500px',
  textAlign: 'center',
  width: '100%',
  maxWidth: '100vw',
  boxSizing: 'border-box'
};

  const titleStyle = {
    fontSize: '3rem',
    color: '#2c3e50',
    marginBottom: '20px',
    fontWeight: 'bold'
  };

  const paragraphStyle = {
    fontSize: '1.3rem',
    color: '#34495e',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const buttonStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    fontSize: '1.1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '40px',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Welcome to Our Company</h1>
      <p style={paragraphStyle}>
        We are dedicated to delivering excellence in all our services. 
        With years of experience and a commitment to innovation, we help 
        businesses achieve their goals and reach new heights.
      </p>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
      >
        Explore Our Services
      </button>
    </div>
  );
}

export default Home;