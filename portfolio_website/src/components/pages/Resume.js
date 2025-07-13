import React from 'react';
import '../../App.css';
import './Resume.css'; // Optional if you want to separate styles

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="download-link">
        Download Resume <a href="/Resume.pdf" download>here</a>
      </div>
      <div className="pdf-viewer">
        <iframe 
          src="/Resume.pdf" 
          title="Resume" 
          width="100%" 
          height="800px"
        />
      </div>
    </div>
  );
}
