import React, { useState, useEffect } from 'react';
import './Main.scss';

function Main() {
  const options = [ 'Next', 'Back' ]; // swapped order
  const texts = [
    'I am very happy to see you here!',
    'Regarding my education I can say that I finished 9 grades of school in the direction of physics and mathematics, entered the college 26KADR on the course Software Developer. In parallel, I took additional courses related to web design.',
    'lox',
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
    if (activeIndex > 0 && !isDeleting) { // swapped condition
      setIsDeleting(true);
      setTimeout(() => {
        setActiveIndex(activeIndex - 1); // decrement index
      }, 500);
    }
  };

  const handleBack = () => {
    if (activeIndex < texts.length - 1 && !isDeleting) { // swapped condition
      setIsDeleting(true);
      setTimeout(() => {
        setActiveIndex(activeIndex + 1); // increment index
      }, 500);
    }
  };

  return (
    <div className="main">
      <div className="main-text">
        <div className="main-text_first">
          <div className="main-text_first__title">Oh , Hi! Welcome to my portfolio site!</div>
          <div className="main-text_first__subtitle">
            {displayedText}
            <span className="blink" style={{ fontSize: 16 }}>|</span>
          </div>
        </div>
        <div className="main-text_second">
          <div className="main-text_second__title">Choose the variant<span className="blink" style={{ fontSize: 16 }}>|</span></div>
        </div>
        <div className="main-text_third">
          {activeIndex < texts.length - 1 && ( // swapped condition
            <span className="main-text_third__option" onClick={handleBack}>
              <span className="arrow"> &gt; </span>
              {options[0]} {/* Next */}
            </span>
          )}
          {activeIndex > 0 && ( // swapped condition
            <span className="main-text_third__option" onClick={handleNext}>
              <span className="arrow"> &lt; </span>
              {options[1]} {/* Back */}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;