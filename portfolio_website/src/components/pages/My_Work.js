import React from 'react';
import '../../App.css';

export default function My_Work() {

  return (
  <div className="about_me">
    <div className="presentation-grid">
      <div className="presentation-card">
        <h2>Unity Game Development</h2>
        <img src="./images/img-1.jpeg" alt="Unity Game Development" />
      </div>
      <div className="presentation-card">
        <h2>EcoCAR</h2>
        <img src="/images/img-2.jpeg" alt="EcoCAR" />
      </div>
      <div className="presentation-card">
        <h2>3</h2>
        <img src="/images/img-3.jpeg" alt="3" />
      </div>
    </div>
  </div>
  );
}
