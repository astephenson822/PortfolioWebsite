import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Home from './components/pages/Home';
import About_Me from './components/pages/AboutMe';
import Education from './components/pages/Education';
import My_Work from './components/pages/MyWork';
import Resume from './components/pages/Resume';
import Personal_life from './components/pages/Personal_Life';
import CliftonStrengths from './components/pages/CliftonStrengths';
import DataStructureLibrary from './components/pages/DataStructureLibrary';
import DataSciencePaper from './components/pages/DataSciencePaper';
import UnityGameDevelopment from './components/pages/UnityGameDevelopment';
import EcoCAR from './components/pages/EcoCAR';
import ColsaInternship from './components/pages/ColsaInternship';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter basename="/PortfolioWebsite">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about_me" element={<About_Me />} />
        <Route path="/education" element={<Education />} />
        <Route path="/my_work" element={<My_Work />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about_me/personal_life" element={<Personal_life />} />
        <Route path="/about_me/clifton_strengths" element={<CliftonStrengths />} />
        <Route path="/my_work/dsa_library" element={<DataStructureLibrary />} />
        <Route path="/my_work/ds_paper" element={<DataSciencePaper />} />
        <Route path="/my_work/unity_game_development" element={<UnityGameDevelopment />} />
        <Route path="/my_work/ecocar" element={<EcoCAR />} />
        <Route path="/my_work/colsa_internship" element={<ColsaInternship />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
