

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import Form from './components/Form';
import About from './components/About';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Form" element={<Form />} />
        
        </Routes>
      </>
    </Router>
  );
}

export default App;
