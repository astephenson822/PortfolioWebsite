import React from 'react';
import '../../App.css';
import BackButton from '../BackButton';

export default function Personal_Life() {
  return (
    <div className="about-me-page">
      <BackButton />
      <section className="about-me-section">
        <h2>My Personal Life</h2>
        <p>
          This is where you can share more about your hobbies, family, interests, and what you enjoy outside of work or school.
        </p>
      </section>
    </div>
  );
}
