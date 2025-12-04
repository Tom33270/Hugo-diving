import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLocationDot, faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';

import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

const Leaflet = dynamic(() => import('leaflet'), { ssr: false });

function Home() {
  const [open, setOpen] = useState(false);     
  const [openMap, setOpenMap] = useState(false); 
  const mapRef = useRef(null);

  const menu = <FontAwesomeIcon icon={faBars} />;
  const position = <FontAwesomeIcon icon={faLocationDot} />;
  const panier = <FontAwesomeIcon icon={faPhotoFilm} />;



useEffect(() => {
  if (!openMap) return;

  const initMap = async () => {
    const L = await import('leaflet');

    const container = document.getElementById("mapModal");
    if (!container) return;

    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    const saintGilles = [-21.063, 55.229];

    const baleineIcon = L.icon({
      iconUrl: '/image/baleine.png',
      iconSize: [50, 50],
      iconAnchor: [25, 25],
      popupAnchor: [0, -25],
    });

    mapRef.current = L.map('mapModal', {
      zoomControl: true,
      scrollWheelZoom: true,
      touchZoom: true,
      dragging: true,
      attributionControl: false,
    }).setView([-21.055, 55.222], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(mapRef.current);

    const marker = L.marker(saintGilles, { icon: baleineIcon })
      .addTo(mapRef.current)
      .bindPopup("Hugo Diving - Saint-Gilles-les-Bains 🐋");


    marker.on('click', () => {
      mapRef.current.flyTo(saintGilles, 15, { duration: 2 });
      marker.openPopup();
    });
  };

  initMap();
}, [openMap]);

  const modalContent = (
    <div className={styles.modalContent}>
      <div className={styles.plongee} cursor>Plongée</div>
      <div className={styles.snorkeling}>Snorkeling</div>
      <div className={styles.cetaces}>Sortie cétacés</div>
      <div className={styles.apnee}>Apnée</div>
    </div>
  );

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.tete}>
          <div className={styles.btntete}>
            <Button className={styles.menu} onClick={() => setOpen(true)}>
              {menu}Menu
            </Button>

          
            <Modal
              isOpen={open}
              onRequestClose={() => setOpen(false)}
              shouldCloseOnOverlayClick={true}
              className={styles.customModal}
              overlayClassName={styles.customOverlay}
            >
              <h2 className={styles.activites}>Les différentes activitées</h2>
              {modalContent}
              <button onClick={() => setOpen(false)} className={styles.closingButton}>
                Fermer
              </button>
            </Modal>

            <div className={styles.mainTitle}>
              <h1 className={styles.title}>HUGO DIVING</h1>
              <p>Saint-Gilles-les-Bains, la Réunion</p>
            </div>

            <div className={styles.buttonsRight}>
              <p className={styles.btnPosition} onClick={() => setOpenMap(true)}>
                {position} maps
              </p>
              <p className={styles.btnPanier}>{panier} photos</p>
            </div>
          </div>
        </div>

        <div className={styles.bas}>
          <div className={styles.titles}>
            <span className={styles.title4}>BEYOND</span>
            <span className={styles.titlebtm}>OCEANS</span>
          </div>
          <div className={styles.btn_bas}>
            <button className={styles.discover}>TARIFS</button>
            <button className={styles.buy}>RESERVATIONS</button>
          </div>
        </div>
      </header>
    
      <Modal
        isOpen={openMap}
        onRequestClose={() => setOpenMap(false)}
        shouldCloseOnOverlayClick={true}
        className={styles.customModal}
        overlayClassName={styles.customOverlay}
      >
        <div id="mapModal" className={styles.mapContainer}></div>

        <button onClick={() => setOpenMap(false)} className={styles.closingButton}>
          Fermer
        </button>
      </Modal>
    <div main className={styles.main}>
     <section className={styles.about}>
  {/* <img src="/image/hugo.jpg"  className={styles.portrait} /> */}
  <div className={styles.presentation}>
    <h2>Me, Myself and I</h2>
    <p>
      Moniteur passionné depuis plus de 10 ans, je vous accompagne dans des 
      expériences uniques : plongée, apnée et rencontres avec les cétacés 
      dans les eaux de la Réunion.
    </p>
    <button className={styles.moreBtn}>En savoir plus</button>
  </div>
</section>

<section className={styles.why}>
  <h2>Pourquoi moi?</h2>
  <div className={styles.whyGrid}>
    <div> blabla certifs (jsuis bon au tennis aussi)</div>
    <div> blabla matos utilisé</div>
    <div> blabla connaissances</div>
    <div> blabla blabla j'aime la nature tmtc</div>
  </div>
</section>

<section className={styles.gallery}>
  <h2 className={styles.underWater}>Moments sous l'eau</h2>
  <div className={styles.galleryGrid}>
    <img src="/image/surface.jpeg" alt="" />
    <img src="/image/bubbles.jpeg" alt="" />
    <img src="/image/dauphin.jpeg" alt="" />
  </div>
  <button className={styles.otherBtn}>Voir la galerie</button>
</section>

<section className={styles.prices}>
  <h2>Planning & Tarifs</h2>
  <ul>
    <li>Sortie cétacés — 60€</li>
    <li>Plongée bouteille — 55€</li>
    <li>Snorkeling — 35€</li>
    <li>Initiation apnée — 45€</li>
  </ul>
  <button className={styles.otherBtn}>Réserver</button>
</section>

<section className={styles.species}>
  <h2>Rencontrez les espèces</h2>
  <div className={styles.speciesGrid}>
    <div><img src="/image/dauphin.jpg" /><p>poisson 1</p></div>
    <div><img src="/image/baleine.jpg" /><p>poisson 2</p></div>
    <div><img src="/image/tortue.jpg" /><p>poisson 3</p></div>
    <div><img src="/image/raie.jpg" /><p>poisson 4</p></div>
  </div>
</section>

<section className={styles.contact}>
  <h2>Contact</h2>
  <p>📞 ton 06 bébé</p>
  <p>📍 Saint-Gilles-les-Bains</p>
  <div className={styles.socials}>
    <a>Instagram ?</a>
    <a>Facebook ?</a>
    <a>WhatsApp ?</a>
  </div>
</section>
    </div>
  </div>
  );
}

export default Home;