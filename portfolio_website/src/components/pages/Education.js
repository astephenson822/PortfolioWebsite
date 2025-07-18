import React from 'react';
import '../../App.css';
import BackButton from '../BackButton';
import Footer from '../Footer';

export default function Education() {
  return (
    <>
    <div className="education-page">
      <BackButton />
      <section className="education-section">
        <h2>College Education</h2>
        <p><strong>Degree:</strong> Bachelor of Science in Computer Science</p>
        <p><strong>Graduation Date:</strong> December 2025</p>
        <p><strong>Institution:</strong> The University of Alabama, Tuscaloosa, AL</p>
        <p><strong>Honors:</strong> Honors College</p>
        <p><strong>GPA:</strong> 4.00 / 4.00</p>

        <br />
        <h3>Courses</h3>
        <p>
          Data Science (CS 451) <br />
          Reinforcement Learning (CS 484) <br />
          Operating Systems (CS 300) <br />
          Database Management Systems (CS 301) <br />
          Data Structures and Algorithms (CS 201) <br />
          Introduction to Software Engineering (CS 200) <br />
          Microcomputers (ECE 383)
        </p>
      </section>

      <section className="education-section">
        <h2>Extra/In-progress Education</h2>
        <p>CompTIA Security+</p>
        <p>100 Days of Python</p>
      </section>

      <section className="education-section">
        <h2>High School</h2>
        <p><strong>Graduation Date:</strong> May 2022</p>
        <p><strong>Institution:</strong> Carterville High School, Carterville, IL</p>
        <p><strong>Honors:</strong> Valedictorian</p>
        <p><strong>GPA:</strong> 4.00 / 4.00</p>
      </section>
    </div>
    <Footer />
    </>
  );
}
