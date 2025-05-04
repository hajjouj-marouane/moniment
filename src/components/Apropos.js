import React, { useEffect, useState } from 'react';
import '../styles/Apropos.css'
export default function Apropos() {
  const images = [
    "https://th.bing.com/th/id/R.15880a520c4dc097ee53d0f87140a79f?rik=tGHPbvSH342nSQ&pid=ImgRaw&r=0",
    // "https://th.bing.com/th/id/R.16769b77acd31a820d9dd74c606146a0?rik=DXsJUk9ensp%2ffA&riu=http%3a%2f%2ftrevorstravels.com%2fwp-content%2fuploads%2f2013%2f02%2fIMG_2412-1600x1200.jpg&ehk=L5glI6MPTf6a6PZCdZFi59ydtuxiVZB08PzQ%2fOmKLmM%3d&risl=&pid=ImgRaw&r=0",
    // "https://th.bing.com/th/id/OIP.qAdUaHeN86WwNMKClsF7ngHaEK?cb=iwc1&rs=1&pid=ImgDetMain",
    // "https://th.bing.com/th/id/OIP.z00p3e0I8AnuuqI6kS1dGQHaE8?cb=iwc1&rs=1&pid=ImgDetMain"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="immersion-section">
      <div className="container">
        <h4>Notre passion commune</h4>
        <h2>À la découverte des trésors historiques du Maroc</h2>

        <div className="immersion-container">
          <img
            className="animated-image"
            src={images[current]}
            alt="Monument historique marocain"
          />

          <div className="immersion-text">
            <h3>
              Explorez le patrimoine <span>marocain</span> !
            </h3>
            <p>
              Le Maroc est un pays riche en histoire et en culture. De la grandeur des kasbahs
              aux mystères des médinas, chaque monument raconte une partie de l’âme marocaine.
              Découvrez ces trésors préservés qui témoignent d’un passé fascinant et d’une identité unique.
            </p>
            <a href="#">Explorez les monuments emblématiques →</a>
          </div>
        </div>

        <div className="immersion-boxes">
          <div className="box">
            <div className="box-header">
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="Icône Kasbah"
              />
              <h4>Un patrimoine riche</h4>
            </div>
            <h5>Des sites classés et méconnus</h5>
            <p>
              Le Maroc abrite des monuments classés au patrimoine mondial de l’UNESCO,
              mais aussi des joyaux cachés à découvrir dans chaque région.
              Laissez-vous guider à travers des siècles d’histoire.
            </p>
            <a href="#">Voir les monuments →</a>
          </div>

          <div className="box">
            <div className="box-header">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2933/2933188.png"
                alt="Icône carte"
              />
              <h4>Partez en voyage culturel</h4>
            </div>
            <h5>Visitez les villes et leurs trésors historiques</h5>
            <p>
              De Fès à Marrakech, en passant par Meknès, Rabat ou Essaouira,
              chaque ville est un musée à ciel ouvert. Découvrez nos itinéraires culturels
              pour un voyage inoubliable à travers le Maroc.
            </p>
            <a href="#">En savoir plus →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
