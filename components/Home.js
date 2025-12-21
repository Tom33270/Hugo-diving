import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLocationDot, faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { useRouter } from "next/router";


import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

const Leaflet = dynamic(() => import('leaflet'), { ssr: false });

function Home() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [openMap, setOpenMap] = useState(false);
  const mapRef = useRef(null);
  const tarifsRef = useRef(null);

  const menu = <FontAwesomeIcon icon={faBars} />;
  const position = <FontAwesomeIcon icon={faLocationDot} />;
  const panier = <FontAwesomeIcon icon={faPhotoFilm} />;

  const galleryImages = [
  "/image/surface.jpeg",
  "/image/bubbles.jpeg",
  "/image/dauphin.jpeg",
  "/image/baleine.jpg",
  "/image/tortue.jpg",
  "/image/raie.jpg",
];

const randomImages = [...galleryImages]
  .sort(() => Math.random() - 0.5)
  .slice(0, 3);



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

    const saintGilles = [-21.05574853081549, 55.22350096660605];

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
      .bindPopup("Hugo Diving - Local 3A, Avant Port, Port de Plaisance, 97434, La Réunion🐋");


    marker.on('click', () => {
      mapRef.current.flyTo(saintGilles, 15, { duration: 2 });
      marker.openPopup();
    });
  };

  initMap();
}, [openMap]);

  const modalContent = (
    <div className={styles.modalContent}>
      <div className={styles.plongee} onClick={() => router.push("/plongee")}>Plongée</div>
      <div className={styles.snorkeling} onClick={() => router.push("/snorkeling")}>Snorkeling</div>
      <div className={styles.cetaces } onClick={() => router.push("/cetaces")}>Sortie cétacés</div>
      <div className={styles.apnee} onClick={() => router.push("/apnee")}>Apnée</div>
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
              bodyOpenClassName="no-scroll"
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
              <h1 className={styles.title}> DIVING</h1>
              <p>Saint-Gilles-les-Bains</p>
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
            <button className={styles.discover} onClick={() => tarifsRef.current?.scrollIntoView({ behavior: 'smooth' })}>TARIFS</button>
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
      Moniteur de plongée depuis 8 ans, j'ai travaillé en métropole à Banyuls-sur-Mer,
      en Thaïlande et à La Réunion. Avec environ 4000 plongées entre 0 et 60 mètres,
      je vous accompagne dans des expériences uniques sous-marines dans les eaux
      exceptionnelles de La Réunion.
    </p>
    <button className={styles.moreBtn} onClick={() => router.push("/profile")}>En savoir plus</button>
  </div>
</section>

<section className={styles.why}>
  <h2>Pourquoi choisir Hugo Diving?</h2>
  <div className={styles.whyGrid}>
    <div>
      <h3>Certifications multiples</h3>
      <p>DEJEPS E4, PADI, SDI/TDI, FFESSM, ANMP, PFI Apnée</p>
    </div>
    <div>
      <h3>Matériel Scubapro</h3>
      <p>Équipement de qualité professionnelle, régulièrement entretenu</p>
    </div>
    <div>
      <h3>Expérience internationale</h3>
      <p>8 ans d'enseignement, 4000+ plongées dans le monde entier</p>
    </div>
    <div>
      <h3>Approche personnalisée</h3>
      <p>Petits groupes, encadrement adapté à votre niveau</p>
    </div>
  </div>
</section>

<section className={styles.gallery}>
  <h2 className={styles.underWater}>Moments sous l'eau</h2>
 <div className={styles.galleryGrid}>
  {randomImages.map((src, index) => (
    <img
      key={index}
      src={src}
      onClick={() => router.push("/gallery")}
    />
  ))}
</div>

  <button className={styles.otherBtn} onClick={() => router.push("/gallery")}>Voir la galerie</button>
</section>

<section className={styles.prices} ref={tarifsRef}>
  <h2>Tarifs</h2>
  <ul>
    <li>Baptême de Plongée — 80€</li>
    <li>Initiation — 110€</li>
    <li>Plongée Exploration (0-20m) — 60€</li>
    <li>Plongées Profondes (jusqu'à 60m) — 60€</li>
    <li>Option Nitrox — +15€</li>
  </ul>
  <button className={styles.otherBtn} onClick={() => router.push("/plongee")}>Voir toutes les formules</button>
</section>

<section className={styles.species}>
  <h2>Rencontrez les espèces</h2>
  <div className={styles.speciesGrid}>
    <div><img src="/image/dauphin.jpg" onClick={() => router.push("/wikipage")}/><p>poisson 1</p></div>
    <div><img src="/image/baleine.jpg"onClick={() => router.push("/wikipage")} /><p>poisson 2</p></div>
    <div><img src="/image/tortue.jpg" onClick={() => router.push("/wikipage")}/><p>poisson 3</p></div>
    <div><img src="/image/raie.jpg" onClick={() => router.push("/wikipage")}/><p>poisson 4</p></div>
  </div>
</section>

<section className={styles.contact}>
  <h2>Contact</h2>
  <p>📍 Club Escapade Plongée</p>
  <p ><span onClick={() => setOpenMap(true)} className={styles.location}>Saint-Gilles-les-Bains, La Réunion</span></p>
  <div className={styles.socials}>
    <a>Réservations</a>
    <a>Me contacter</a>
  </div>
</section>
    </div>
  </div>
  );
}

export default Home;