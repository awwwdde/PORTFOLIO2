import React from 'react'
import './Main.scss'

function main() {
  const options = ['About', 'Education', 'Work', 'Projects', 'Contact']

  return (
    <div className="main">
      <div className="main-text">
        <div className="main-text_first">
          <div className="main-text_first__title">Welcome to my portfolio site.</div>
          <div className="main-text_first__subtitle">I am very happy to see you here!</div>
        </div>
        <div className="main-text_second">
          <div className="main-text_second__title">Please select the answer option you are interested in<span className="blink" style={{ fontSize: 16 }}>|</span></div>
        </div>
        <div className="main-text_third">
          {options.map((option, index) => (
            <span key={index} className="main-text_third__option">
              <span className="arrow"> > </span>
              {option}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default main