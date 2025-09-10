import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import BackButton from '../BackButton';
import Footer from '../Footer';

export default function My_Work() {
  return (
    <>
    <div className="about-me-page">
      <BackButton />
      {/* Work/Internships Section */}
      <section className="about-me-section">
        <h2>Work / Internships</h2>
        {/* Example entry – add more as needed */}
        <div className="project-item">
          <h3>Work at COLSA Corporation</h3>
          <Link to="/my_work/colsa_internship" className="btn">
            Learn More
          </Link>
        </div>
      </section>

      {/* Other Projects/Experience Section */}
      <section className="about-me-section">
        <h2>Other Projects / Experience</h2>

        <div className="project-list">
          <div className="project-item">
            <h3>Data Structure Library</h3>
            <Link to="/my_work/dsa_library" className="btn">
              Learn More
            </Link>
          </div>

          <div className="project-item">
            <h3>Data Science Paper</h3>
            <Link to="/my_work/ds_paper" className="btn">
              Learn More
            </Link>
          </div>

          <div className="project-item">
            <h3>Unity Game Development</h3>
            <Link to="/my_work/unity_game_development" className="btn">
              Learn More
            </Link>
          </div>

          <div className="project-item">
            <h3>EcoCAR Club</h3>
            <Link to="/my_work/ecocar" className="btn">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
