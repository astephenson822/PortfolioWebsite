import React from 'react';
import '../../App.css';
import BackButton from '../BackButton';
import Footer from '../Footer';

export default function Personal_Life() {
  return (
    <>
    <div className="about-me-page">
      <BackButton />
      <section className="about-me-section">
        <h2>My Hobbies:</h2>
        <ul>
          <li>Traveling</li>
          <li>Hiking</li>
          <li>Video Games</li>
          <li>Watching Football</li>
          <li>Gym</li>
        </ul>
      </section>
    </div>
    <Footer />
    </>
  );
}
