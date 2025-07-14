import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

export default function About_me() {
  return (
    <div className="about-me-page">
      <section className="about-me-section">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skills-column">
            <h3>Coding</h3>
            <ul>
              <li>Python</li>
              <li>C++</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>C</li>
              <li>C#</li>
              <li>Java</li>
              <li>HTML</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skills-column">
            <h3>Computer</h3>
            <ul>
              <li>Microsoft Office Suite</li>
              <li>ROS</li>
              <li>Ardupilot</li>
              <li>Mavlink</li>
              <li>Docker</li>
              <li>Ubuntu</li>
              <li>VirtualBox</li>
              <li>Power BI</li>
              <li>Visual Studio</li>
              <li>MATLAB</li>
              <li>Git</li>
              <li>Jetson Nano</li>
              <li>RTMaps</li>
              <li>Gazebo</li>
              <li>Unity</li>
            </ul>
          </div>
          <div className="skills-column">
            <h3>Soft</h3>
            <ul>
              <li>Agile Development</li>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Problem Solving</li>
              <li>Adaptability</li>
              <li>Time Management</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-me-section">
        <h2>About Me</h2>
        <p> I am a rising senior pursuing a Bachelor's of Science in Computer Science 
      at the University of Alabama. I grew up in Carterville, Illinois all my life. I have one 
      brother, two dogs, and four cats. Some things I like to do for fun include playing video 
      games, watching/going to sporting events, watching tv shows, hiking, fishing, the outdoors in 
      general, and traveling. I also have a love for technology and a deep hunger for knowledge. Ever 
      since High School I have always been an overachiever, which is shown by me being my class's 
      Valedictorian, as well as still having a 4.0 gpa in college. </p>

      <p>I have always strived for 
        perfection in everything I do, which is perfect for being a Computer Science major. Not only 
        do I put an immense amount of effort towards my grades, but I also am very involved in my 
        school's community as well. I am in a club called the EcoCAR EV Challenge, as well as in the 
        Sigma Alpha Mu Tau Chapter Fraternity. Being actively involved in both of these organizations 
        shows that I am searching to put myself in both leadership and collaborative positions, 
        further reflecting my ambitious character. </p>
      </section>

      <section className="about-me-section">
        <h2>Personal Mission Statement</h2>
        <p>
          To change the lives of those around me for the better, supporting those who I know, and using my technical skills for those I do not
        </p>
      </section>

      <section className="about-me-section">
        <h2>Important Values to Me</h2>
          <p className="text">Compassion </p>
          <p className="text">Hard Work </p>
          <p className="text">Honesty </p>
          <p className="text">Perseverance </p>
          <p className="text">Responsibility </p>
          <p className="text">Hope </p>
          <p className="text">Communication </p>
          <p className="text">Gratitude </p>
          <p className="text">Faith </p>
      </section>

      <section className="about-me-section">
        <h2>Clifton Strengths</h2>
        <Link to="/about_me/clifton_strengths" className="btn">
          View Report
        </Link>
      </section>

      <section className="about-me-section">
        <h2>My Personal Life</h2>
        <Link to="/about_me/personal_life" className="btn">
          Learn More
        </Link>
      </section>
    </div>
  );
}
