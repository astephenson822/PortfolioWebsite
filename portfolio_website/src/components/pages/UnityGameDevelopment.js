import React from 'react';
import '../../App.css';
import BackButton from '../BackButton';
import Footer from '../Footer';

export default function Unity_Game_Development() {
  return (
    <>
    <div className="about-me-page">
      <BackButton />
      <section className="about-me-section">
        <h2>Specific Work in Unity Projects</h2>
        <ul>
          <li>Developed C# scripts for the character object to move based on user input</li>
          <li>Implemented an in-game pick-up feature via instance deletion and recreation</li>
          <li>Constructed an inventory management system where object instances are placed and removed from an array</li>
          <li>Set up game-over feature through chracter and world bounding boxes to allow game restart/exit</li>
        </ul>
      </section>
    </div>
    <Footer />
    </>
  );
}