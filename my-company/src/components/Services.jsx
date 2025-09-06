// components/Services.jsx
import React from 'react';

function Services() {
  const containerStyle = {
  padding: '40px 20px',
  backgroundColor: '#f8f9fa',
  minHeight: '500px',
  width: '100%',
  maxWidth: '100vw',
  boxSizing: 'border-box'
};

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '30px',
    textAlign: 'center'
  };

  const serviceStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    margin: '15px auto',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    maxWidth: '600px'
  };

  const serviceTitle = {
    fontSize: '1.3rem',
    color: '#3498db',
    marginBottom: '10px'
  };

  const serviceDescription = {
    color: '#34495e',
    lineHeight: '1.6'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Our Services</h1>
      
      <div style={serviceStyle}>
        <h3 style={serviceTitle}>Technology Consulting</h3>
        <p style={serviceDescription}>
          We provide expert technology consulting to help your business leverage 
          the latest innovations and stay ahead of the competition.
        </p>
      </div>

      <div style={serviceStyle}>
        <h3 style={serviceTitle}>Market Analysis</h3>
        <p style={serviceDescription}>
          Our comprehensive market analysis services help you understand your target 
          audience and make informed business decisions.
        </p>
      </div>

      <div style={serviceStyle}>
        <h3 style={serviceTitle}>Product Development</h3>
        <p style={serviceDescription}>
          From concept to launch, we guide you through every stage of product 
          development to ensure market success.
        </p>
      </div>
    </div>
  );
}

export default Services;