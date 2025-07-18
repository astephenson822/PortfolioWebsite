import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BackButton.css';

export default function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === '/') return null;

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1); // go back if we have something in history
    } else {
      navigate('/'); // fallback to homepage
    }
  };

  return (
    <div className="back-button-container">
      <button className="back-button" onClick={handleBack}>
        ← Back
      </button>
    </div>
  );
}
