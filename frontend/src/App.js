import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Links from './Links.js';
import Home from './Home.js';

import Wannatest from './Wannatest.js';

function History() {
  return <h2>This is the History page</h2>;
}

function About() {
  return <h2>This is the About Us page</h2>;
}

function App() {
  
  
  return (
    <Router>
      <div className="App">
      
        <Links />
        

        {/* ✅ Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Wannatest />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
