import React from 'react';
import '../../App.css';
import BackButton from '../BackButton';
import Footer from '../Footer';

export default function Data_Science_Paper() {
  return (
    <>
      <div className="resume-container">
        <BackButton />
        <div className="pdf-viewer" style={{ height: '80vh', margin: '2rem' }}>
          <iframe
            src={`${process.env.PUBLIC_URL}/CS451Paper.pdf`}
            title="CS 451 Paper"
            width="100%"
            height="100%"
            style={{ border: '1px solid #ccc', borderRadius: '8px' }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
