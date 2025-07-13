import React from 'react';
import '../../App.css';

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="download-link">
        Download Resume{' '}
        <a href={`${process.env.PUBLIC_URL}/Resume.pdf`} download>
          here
        </a>
      </div>
      <div className="pdf-viewer">
        <iframe
          src={`${process.env.PUBLIC_URL}/Resume.pdf`}
          title="Resume"
          width="100%"
          height="800px"
        />
      </div>
    </div>
  );
}
