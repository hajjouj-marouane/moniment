import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-globe2 me-2"></i>View Maroc
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav me-3">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${location.pathname === '/' ? 'active text-light' : 'text-white'}`}
              >
                <i className="bi bi-house-door-fill me-1"></i>Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/apropos"
                className={`nav-link ${location.pathname === '/apropos' ? 'active text-light' : 'text-white'}`}
              >
                <i className="bi bi-info-circle-fill me-1"></i>À propos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${location.pathname === '/contact' ? 'active text-light' : 'text-white'}`}
              >
                <i className="bi bi-envelope-fill me-1"></i>Contact
              </Link>
            </li>
          </ul>
          <Link className="btn btn-outline-light" to="#">
            <i className="bi bi-person-plus-fill me-1"></i>S'inscrire
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
