import React from 'react';
import '../../App.css';

export default function CliftonStrengths() {
  return (
    <div className="resume-container">
      <div className="pdf-viewer">
        <iframe
          src={`${process.env.PUBLIC_URL}/CliftonStrengthsTop5Report.pdf`}
          title="Clifton Strengths Report"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
