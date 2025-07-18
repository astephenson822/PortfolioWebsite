import React from 'react';
import '../../App.css';
import BackButton from '../BackButton';

export default function Resume() {
  return (
    <div className="resume-container">
      <BackButton />
      <div className="pdf-viewer">
        <iframe
          src={`${process.env.PUBLIC_URL}/Resume.pdf`}
          title="Resume"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
