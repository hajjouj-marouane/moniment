import React, { useEffect, useState } from 'react';
import '../styles/acceuil.css';
import MonumentCard from '../components/VilleCard';

function Accueil() {
  const [villes, setVilles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/villes.json')
      .then(res => res.json())
      .then(data => setVilles(data))
      .catch(err => console.error("Erreur chargement villes :", err));
  }, []);

  const handleVoirPlus = () => {
    setVisibleCount(prev => prev + 3);
  };

  const handleRetourHaut = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setVisibleCount(6); // réinitialise l'affichage à 6 lors de la recherche
  };

  const filteredVilles = villes.filter((ville) =>
    ville.location
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .startsWith(
        searchTerm
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
      )
  );
  

  return (
    <>
      <section className="section-travel-guide">
        <div className="content">
          <h1>monuments marocains</h1>
          <p>Découvrez les meilleurs monuments marocains</p>
          <button className="btn-custom" href="container my-5">
            voir des monument 
          </button>
        </div>
      </section>

      <div className="container my-5">
        <h2 className="mb-4 text-danger text-center">Découvrez les meilleurs monuments marocains</h2>

        {/* Barre de recherche */}
        <div className="row mb-4 justify-content-center">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Rechercher une ville..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Affichage des cartes */}
        <div className="row cartes">
  {filteredVilles.slice(0, visibleCount).map((ville, index) => (
    <div className="col-md-6 mb-4 mx-auto" key={index}>
      <MonumentCard
        name={ville.name}
        image={ville.image}
        description={ville.description}
        location={ville.location}
      />
    </div>
  ))}
</div>


        {/* Bouton Voir plus */}
        {visibleCount < filteredVilles.length && (
          <div className="text-center my-3">
            <button className="btn btn-outline-danger me-2" onClick={handleVoirPlus}>
              Voir plus
            </button>
          </div>
        )}

        {/* Bouton retour en haut */}
        {visibleCount > 6 && (
          <button
            className="btn1 btn position-fixed"
            onClick={handleRetourHaut}
            style={{ bottom: '20px', right: '20px', zIndex: 999 }}
          >
            <i className="bi bi-arrow-up"></i>
          </button>
        )}
      </div>
      <section class="monuments-marocains">
  <div class="contenu-avec-image">
    <img src="https://png.pngtree.com/png-clipart/20221228/original/pngtree-flag-of-morocco-png-image_8818109.png" alt="Monument marocain" class="image-monument" />
    <div class="texte-monuments">
      <h2>À la découverte des monuments marocains</h2>
      <p>
        Le Maroc, pays de contrastes et de richesses culturelles, abrite un patrimoine architectural exceptionnel qui témoigne de son histoire millénaire.
        Des montagnes de l’Atlas aux dunes du Sahara, chaque région du royaume regorge de monuments emblématiques, reflets des civilisations qui s’y sont succédé.
      </p>
      <p>
        Parmi les joyaux les plus connus figure la <strong>Koutoubia de Marrakech</strong>, symbole de l’art almohade avec son minaret élancé visible à des kilomètres.
        À Fès, la <strong>médersa Bou Inania</strong> illustre le raffinement de l’architecture mérinide, alliant zelliges, stucs et bois sculpté.
        À Meknès, le <strong>Bab Mansour</strong>, majestueuse porte décorée de mosaïques, incarne la puissance de l’époque du sultan Moulay Ismaïl.
      </p>
      <p>
        Le sud du pays n’est pas en reste avec les <strong>kasbahs</strong> en pisé, comme la célèbre <strong>Kasbah Aït Ben Haddou</strong>, classée au patrimoine mondial de l’UNESCO,
        qui servit de décor à de nombreux films. Plus au nord, les vestiges romains de <strong>Volubilis</strong> rappellent le passé antique du Maroc,
        avec ses colonnes, mosaïques et temples en ruine.
      </p>
      <p>
        Ces monuments, véritables témoins du passé, ne sont pas seulement des merveilles architecturales ; ils sont le cœur battant de la culture marocaine,
        attirant chaque année des millions de visiteurs fascinés par leur beauté et leur histoire.
      </p>
    </div>
  </div>
</section>
{/* Bouton retour en haut – toujours visible */}
<button
  className="btn-retour-haut"
  onClick={handleRetourHaut}
>
⬆️
</button>
    </>
  );
}

export default Accueil;
