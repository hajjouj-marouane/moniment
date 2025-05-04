import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer text-white py-4 mt-5">
      <div className="container text-center">
        <h5 className="mb-3">Visite Maroc</h5>
        <p className="mb-2">
          Découvrez les plus belles villes du Maroc à travers des photos, des infos touristiques et des lieux à ne pas manquer.
        </p>
        <p className="mb-3">
          Ce site a été créé dans le cadre d'un projet React éducatif, avec l'intégration de Bootstrap, JSON et des animations.
        </p>
        <div className="mb-3">
          <a href="https://linkedin.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin fs-4"></i>
          </a>
          <a href="https://github.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github fs-4"></i>
          </a>
          <a href="https://twitter.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter fs-4"></i>
          </a>
          <a href="mailto:contact@visitemaroc.com" className="text-white">
            <i className="bi bi-envelope-fill fs-4"></i>
          </a>
        </div>
        <small>© 2025 Visite Maroc — Tous droits réservés.</small>
      </div>
    </footer>
  )
}

export default Footer
