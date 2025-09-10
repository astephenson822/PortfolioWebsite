import React from 'react';
import '../../App.css';
import BackButton from '../BackButton';
import Footer from '../Footer';

export default function Colsa_Internship() {
  return (
    <>
    <div className="about-me-page">
        <BackButton />
      <section className="about-me-section">
        <h2>COLSA Corporation - Huntsville, AL</h2>

        <div className="internship-block">
          <h3>Data Scientist (Remote)</h3>
          <p className="internship-location">August 2025 – Present</p>
          <ul>
            <li>Working on HAAST contract to construct TAK plugins</li>
          </ul>
        </div>

        <div className="internship-block">
          <h3>Data Science Intern</h3>
          <p className="internship-location">June 2025 – August 2025</p>
          <ul>
            <li>Developed an ATAK server and corresponding clients to send and receive data</li>
            <li>Utilized Docker and Meshroom to reconstruct bridge models using photogrammetry</li>
            <li>Implemented a full stack website with React.js, Node.js, and a MySQL database</li>
          </ul>
        </div>

        <div className="internship-block">
          <h3>Data Science Intern</h3>
          <p className="internship-location">June 2024 – August 2024</p>
          <ul>
            <li>Briefed daily on project progress and blockers using agile methodologies</li>
            <li>Set up a drone simulation environment with Gazebo, Ardupilot, ROS, and Mavlink software</li>
            <li>Developed Gazebo worlds and ROS packages from scratch</li>
            <li>Implemented Python algorithms, including A* for navigation and neural networks for autonomous movement using positional and lidar data</li>
            <li>Formatted extensive bash scripts to reconfigure simulations</li>
            <li>Utilized Docker and VirtualBox to streamline testing and development processes</li>
          </ul>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
