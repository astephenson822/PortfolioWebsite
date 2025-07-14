import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Home from './components/pages/Home';
import About_Me from './components/pages/About_Me';
import Education from './components/pages/Education';
import My_Work from './components/pages/My_Work';
import Resume from './components/pages/Resume';
import Personal_life from './components/pages/Personal_Life';
import CliftonStrengths from './components/pages/CliftonStrengths';

function App() {
  return (
    <BrowserRouter basename="/PortfolioWebsite">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about_me" element={<About_Me />} />
        <Route path="/education" element={<Education />} />
        <Route path="/my_work" element={<My_Work />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about_me/personal_life" element={<Personal_life />} />
        <Route path="/about_me/clifton_strengths" element={<CliftonStrengths />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
