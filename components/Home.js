import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCreditCard, faLocationDot, faMailBulk, faMailReply, faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
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
  const photos = <FontAwesomeIcon icon={faPhotoFilm} />;
  const tarifs = <FontAwesomeIcon icon={faCreditCard} />;
  const contact = <FontAwesomeIcon icon={faMailBulk} />;

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
      .bindPopup("Hugo Diving - Local 3A, Avant Port, Port de Plaisance, 97434, La Réunion");


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

           

           
              <p className={styles.btnPosition} onClick={() => setOpenMap(true)}>
                {position} maps
              </p>
              <p className={styles.btnPhotos}>{photos} photos</p>
              <p className={styles.btnTarifs} onClick={() => tarifsRef.current?.scrollIntoView({ behavior: 'smooth' })}>{tarifs} Tarifs</p>
              <p className={styles.btnContact} onClick={() => router.push("/contact")}>{contact} Contact</p>
           
          </div>
        </div>

         <div className={styles.mainTitle}>
              <h1 className={styles.title}>HUG'Ô DIVING</h1>
              <p>Saint-Gilles-les-Bains, La Réunion</p>
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
      Dans l’enseignement depuis plus de 20 ans, comme professeur de tennis dans un premier temps, Mon parcours m’a mené de la Réunion à la Thaïlande, en passant par Banyuls-sur-Mer, pour vivre et enseigner ma passion de la plongée. Depuis 2017, je suis présent sur cette île magnifique et toujours avec la même envie de faire découvrir cette face peu connue qui grouille de vie ! 
      Moniteur de plongée sous-marine professionnel,  je travaille en tant qu’indépendant sur le  Port de Saint-Gilles les Bains. 
      Ce que j’aime le plus dans la plongée : Être dans l’instant présent, totalement connecté à l’environnement sous-marin, et me laisser surprendre par ses merveilles ! 
    </p>
    <button className={styles.moreBtn} onClick={() => router.push("/contact")}>Allez viens, on est bien ! </button>
  </div>
</section>

<section className={styles.why}>
  <h2>Pourquoi Hug'ô Diving?</h2>
  <div className={styles.whyGrid}>
    <div>
      <h3>Certifications multiples</h3>
      <p>- Diplôme d'état E4,<br></br>- Moniteur fédéral 1er degré<br></br>PADI, SDI/TDI, FFESSM, ANMP<br></br>- Moniteur d'apnée PFI<br></br>- Formateur permis bateau</p>
    </div>
    <div>
      <h3>Matériel Scubapro</h3>
      <p>- Équipement de qualité,<br></br> régulièrement entretenu,<br></br>en excellent état.<br></br>
      - Large choix.<br></br>- Locaux et bateaux<br></br> professionnels,<br></br>- douches et toilettes </p>
    </div>
    <div>
      <h3>Expérience internationale</h3>
      <p>-  + 4000  plongées dans le<br></br> monde entier<br></br>Enseigne en français et en anglais<br></br>20 années d'expériences dans l'enseignement à temps plein (je me fais vieux...)</p>
    </div>
    <div>
      <h3>Approche personnalisée</h3>
      <p>Petits groupes,<br>
      </br> encadrement adapté à votre niveau</p>
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
    <li className={styles.pricesList}>Randonnée Palmée (4 personnes mini / 1h) — 55 euros</li>
    <li className={styles.pricesList}>Baptême (environ 25min) — 90 euros</li>
    <li className={styles.pricesList}>PacPack découverte : un Baptême + une exploration (12m max) — 180 euros</li>
    <li className={styles.pricesList}>Exploration (à partir du pe12) — 65 euros </li>
    <li className={styles.pricesList}>Réadaptation (+ 1 an sans plonger) — 80 euros </li>
    <li className={styles.pricesList}>Pack 3 plongées — 185 euros</li>
    <li className={styles.pricesList}>Pack 6 plongées — 350 euros</li>
    <li className={styles.pricesList}>Pack 10 plongées — 550 euros </li>
    <li className={styles.pricesList}>Niveau 1 / Open water SDI (5plongées) — 490 euros </li>
    <li className={styles.pricesList}>Formation Nitrox simple (2plongées) — 180 euros</li>
    <li className={styles.pricesList}>Formation Nitrox confirmé (4 plongées) — 310 euros</li>
    <li className={styles.pricesList}>Formation N2, N3, preparation monitorat, etc. — Sur devis</li>
    <li className={styles.pricesList}>Sortie cétacés — Sur devis</li>
    <li className={styles.pricesList}>Initiation apnée — Sur devis </li>
    <li className={styles.pricesList}> Suppléments plongée de nuit— 15 euros</li>
    <li className={styles.pricesList}>Supplément Nitrox — 10 euros</li>
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