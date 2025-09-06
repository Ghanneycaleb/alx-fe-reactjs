// App.jsx - Main Application Component
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

// function App() {
//   return (
//     <BrowserRouter>
//       <div style={{ 
//         fontFamily: 'Arial, sans-serif', 
//         margin: '0', 
//         padding: '0', 
//         minWidth: '100vw',
//         minHeight: '100vh',
//         overflowX: 'hidden',
//         boxSizing: 'border-box',
//         display: 'flex',
//         flexDirection: 'column'
//       }}>
//         <Navbar />
//         <main style={{ flex: '1' }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <div style={{ 
        fontFamily: 'Arial, sans-serif', 
        margin: '0', 
        padding: '0', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        //
        minWidth: '100vw',
        overflowX: 'hidden',
        boxSizing: 'border-box'
      }}>
        <Navbar />
        <main style={{ 
          flex: '1',
          width: '100%',
          maxWidth: '100vw',
          overflowX: 'hidden'
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;