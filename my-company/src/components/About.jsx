// components/About.jsx

function About() {
  const containerStyle = {
  padding: '40px 20px',
  backgroundColor: '#ffffff',
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

  const contentStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#34495e'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>About Us</h1>
      <div style={contentStyle}>
        <p style={{ marginBottom: '20px' }}>
          Our company has been providing top-notch services since 1990. We specialize in 
          various fields including technology, marketing, and consultancy.
        </p>
        <p style={{ marginBottom: '20px' }}>
          With over three decades of experience, we have built a reputation for delivering 
          innovative solutions that drive business growth. Our team of experts is passionate 
          about helping our clients succeed in an ever-evolving marketplace.
        </p>
        <p>
          We believe in building long-term partnerships with our clients, understanding their 
          unique challenges, and providing customized solutions that exceed expectations.
        </p>
      </div>
    </div>
  );
}

export default About;