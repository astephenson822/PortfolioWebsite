import React from 'react';
import '../../App.css';
import BackButton from '../BackButton';
import Footer from '../Footer';

export default function EcoCAR() {
  return (
    <>
      <div className="about-me-page">
        <BackButton />
        <section className="about-me-section">
          <h2>My Work in EcoCAR!</h2>
          <ul>
            <li>Assignments with a Gitlab task board to complete tasks in a timely manner</li>
            <li>Development using MATLAB and Simulink to create a working sensor fusion algorithm</li>
            <li>Simulation with driving scenario designer and unreal engine through MATLAB</li>
            <li>Conversion of working sensor fusion algorithm to Python using RTMaps</li>
          </ul>
          <div className="ecocar-image-container">
          <img src={`${process.env.PUBLIC_URL}/images/EcoCAR.png`} alt="EcoCAR team vehicle" className="ecocar-image" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
