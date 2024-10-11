import React from 'react'
import { Link } from 'react-router-dom'
import './Start.scss'
function start() {
  return (
    <div className="start">
        <div className="start-area">
            <div className="start-area_title">Awwwdde Portfolio Website 2024</div>
            <div className="start-area_subtitle">Click start to begin <span className="blink">|</span></div>
            <Link to="/portfolio"><button className="start-area_button">start</button></Link>
                
        </div>
    </div>
  )
}

export default start
