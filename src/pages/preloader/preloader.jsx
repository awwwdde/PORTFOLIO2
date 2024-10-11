import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Preloader.scss';

function Preloader() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(intervalId);
        navigate('/start', { replace: true }); // Redirect to start.jsx page
      }
    }, 50);
    return () => clearInterval(intervalId); // Add this cleanup function
  }, [progress, navigate]);

  return (
    <div className="preloader">
      <div className="preloader-text">
        <div className="preloader-text_first">
          <div className="preloader-text_first__title">VLADISLAV SOIMA. <span style={{ fontWeight: 100 }}>VERSION: 1 / 0 / 01</span></div>
          <div className="preloader-text_first__subtitle">AWWWDDE INC. <span style={{ fontWeight: 100 }}>YEAR: 2024</span></div>
        </div>
        <div className="preloader-text_second">
          <div className="preloader-text_second__title" style={{ fontWeight: 100 }}>DOWNLOADING FONTS <span className="blink">|</span></div>
          <div className="preloader-text_second__title" style={{ fontWeight: 100 }}>DOWNLOADING ASSETS <span className="blink">|</span></div>
          <div className="preloader-text_second__title" style={{ fontWeight: 100 }}>CHECKING ERRORS <span className="blink">|</span></div>
        </div>
        <div className="preloader-text_third">
          <div className="preloader-text_third__title">COMPLETED: <span style={{ fontWeight: 100 }}>{progress} / 100</span></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;