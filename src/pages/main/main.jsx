import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Main.scss';

function Main() {
  const navigate = useNavigate(); 
  const options = ['Next', 'Back', 'More']; 
  const texts = [
    'I am very happy to see you here!',
    'Hi 👋, Im Vladislav or awwwdde, a Frontend Developer with a passion for creating attractive and functional interfaces. In my spare time, I am passionate about creating designs for apps and websites, as well as developing game modifications.',
    'Take a look around to see my projects and skills in action, and lets create something amazing together. 🧡',
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPrinting, setIsPrinting] = useState(true);

  useEffect(() => {
    if (isPrinting) {
      const timer = setTimeout(() => {
        setDisplayedText(texts[activeIndex].slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === texts[activeIndex].length) {
          setIsPrinting(false);
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [displayedText, isPrinting, activeIndex]);

  useEffect(() => {
    if (isDeleting) {
      if (displayedText.length === 0) {
        setIsDeleting(false);
        setIsPrinting(true);
      } else {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      }
    }
  }, [isDeleting, displayedText]);

  const handleNext = () => {
    if (activeIndex < texts.length - 1 && !isDeleting) {
      setIsDeleting(true);
      setTimeout(() => {
        setActiveIndex(activeIndex + 1);
      }, 500);
    }
  };

  const handleBack = () => {
    if (activeIndex > 0 && !isDeleting) {
      setIsDeleting(true);
      setTimeout(() => {
        setActiveIndex(activeIndex - 1);
      }, 500);
    }
  };

  const handleMore = () => {
    navigate('/portfolio/me'); 
  };

  return (
    <div className="main">
      <div className="main-text">
        <div className="main-text_first">
          <div className="main-text_first__title"> Welcome to my portfolio site!</div>
          <div className="main-text_first__subtitle">
            {displayedText}
            <span className="blink" style={{ fontSize: 16 }}>|</span>
          </div>
        </div>
        <div className="main-text_second">
          <div className="main-text_second__title">Choose the variant</div>
        </div>
        <div className="main-text_third">
          {activeIndex > 0 && (
            <span className="main-text_third__option" onClick={handleBack}>
              <span className="arrow"> &lt; </span>
              {options[1]} {/* Back */}
            </span>
          )}
          {activeIndex < texts.length - 1 && (
            <span className="main-text_third__option" onClick={handleNext}>
              <span className="arrow"> &gt; </span>
              {options[0]} {/* Next */}
            </span>
          )}
          {activeIndex === texts.length - 1 && (
            <span className="main-text_third__option" onClick={handleMore}>
              <span className="arrow"> &gt; </span>
              {options[2]} {/* More */}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;