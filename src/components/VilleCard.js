// MonumentCard.js
import React, { useState } from 'react';
import '../styles/VilleCard.css';

function MonumentCard({ name, image, description, location }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;

  return (
    <div className="card h-100 shadow-sm card-hover">
      <img
        src={image || "https://via.placeholder.com/400x250?text=Image+indisponible"}
        className="card-img-top"
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="text-muted">
          <i className="bi bi-geo-alt-fill"></i>{' '}
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            {location}
          </a>
        </p>
        {isDescriptionVisible && <p className="card-text">{description}</p>}
        <button className="btn btn-warning" onClick={toggleDescription}>
          {isDescriptionVisible ? 'Voir moins' : 'Détails'}
        </button>
      </div>
    </div>
  );
}

export default MonumentCard;
