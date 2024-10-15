import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NotFound.scss'
import SphereBackground from '../../components/bg/SphereBackground'
function notFound() {
  return (
    <div className="notf">
      <div className="notf-text">
      <SphereBackground />
        <div className="notf-text__title">404</div>
        <div className="notf-text__subtitle">not found</div>
        <Link to="/start" className="notf-text__subtitle">Go back to homepage</Link>
      </div>
    </div>
  )
}

export default notFound
