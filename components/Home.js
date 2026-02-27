import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish, faLocationDot, faMailBulk, faPhotoFilm, faWater} from '@fortawesome/free-solid-svg-icons';


import { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { useRouter } from "next/router";
import Head from "next/head";



import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

 dynamic(() => import('leaflet'), { ssr: false });

function Home() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [openMap, setOpenMap] = useState(false);
  const mapRef = useRef(null);
  const tarifsRef = useRef(null);
  const menu = <FontAwesomeIcon icon={faWater} />;
  const position = <FontAwesomeIcon icon={faLocationDot} />;
  const photos = <FontAwesomeIcon icon={faPhotoFilm} />;
  const contact = <FontAwesomeIcon icon={faMailBulk} />;
   const wiki = <FontAwesomeIcon icon={faFish} />;
   
const [Images, setImages] = useState([]);
const [randomImages, setRandomImages] = useState([]);

 const [randomSpecies, setRandomSpecies] = useState([]);

 const [scrolled, setScrolled] = useState(false);

   const [showScrollTop, setShowScrollTop] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setShowScrollTop(window.scrollY > 300);
     };
 
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  useEffect(() => {
    fetch("/data/poissons-reunion.json")
      .then((res) => res.json())
      .then((data) => {
        // Mélange le tableau
        const shuffled = data.sort(() => 0.5 - Math.random());
        // Garde 4 espèces
        setRandomSpecies(shuffled.slice(0, 4));
      });
  }, []);


useEffect(() => {
  fetch('/api/photos')
    .then(res => res.json())
    .then(data => {
      setImages(data);

      // Tirage initial
      const firstRandom = [...data]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      setRandomImages(firstRandom);
    });
}, []);

useEffect(() => {
  if (Images.length === 0) return;

  const interval = setInterval(() => {
    const newRandom = [...Images]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    setRandomImages(newRandom);
  }, 4000);

  return () => clearInterval(interval);
}, [Images]);





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
const navigate = (path) => router.push(path);

const modalContent = (
  <div className={styles.modalContent}>
    <button className={styles.plongee} onClick={() => navigate("/plongee")}>Plongée</button>
    <button className={styles.snorkeling} onClick={() => navigate("/snorkeling")}>Snorkeling</button>
    <button className={styles.cetaces} onClick={() => navigate("/cetaces")}>Sortie cétacés</button>
    <button className={styles.apnee} onClick={() => navigate("/apnee")}>Apnée</button>

    <button
      className={`${styles.cardButton} ${styles.btnPosition}`}
      onClick={() => setOpenMap(true)}
    >
      {position} Maps
    </button>
  </div>
);

return (
        <>
        <Head>
  <title>Plongée La Réunion – Baptême, Snorkeling & Cétacés  Hug’O₂ Diving
</title>
  <meta name="description" content="Centre de plongée à Saint‑Gilles : baptême, exploration, snorkeling, apnée et sorties cétacés. Encadrement pro et matériel premium." />
  <link rel="canonical" href="https://hugodiving.com/" />
</Head>
  
    <header className={styles.header}>
      <div className={styles.tete}>
        <div className={`${styles.btntete} ${scrolled ? styles.scrolled : ""}`}>

          <button
            className={`${styles.menu} ${scrolled ? styles.scrolled : ""}`}
            onClick={() => setOpen(true)}
          >
            {menu} Activités
          </button>

          <button
            className={`${styles.menu} ${scrolled ? styles.scrolled : ""}`}
            onClick={() => navigate("/gallery")}
          >
            {photos} Galerie
          </button>

          <button
            className={`${styles.menu} ${scrolled ? styles.scrolled : ""}`}
            onClick={() => navigate("/wikipage")}
          >
            {wiki} WikiFish
          </button>

          <button
            className={`${styles.menu} ${scrolled ? styles.scrolled : ""}`}
            onClick={() => navigate("/contact")}
          >
            {contact} Contact
          </button>

          <Modal
            isOpen={open}
            bodyOpenClassName="no-scroll"
            onRequestClose={() => setOpen(false)}
            shouldCloseOnOverlayClick
            className={styles.customModal}
            overlayClassName={styles.customOverlay}
          >
            <h2 className={styles.activities}>Les différentes activités</h2>
            {modalContent}

            <button onClick={() => setOpen(false)} className={styles.closingButton}>
              Fermer
            </button>
          </Modal>
        </div>
      </div>

      <div className={styles.mainTitle}>
        <h1>Hug'O₂ Diving</h1>
        <p>Saint-Gilles-les-Bains, La Réunion</p>
      </div>
    </header>

    {/* MODAL MAP */}
    <Modal
      isOpen={openMap}
      onRequestClose={() => setOpenMap(false)}
      shouldCloseOnOverlayClick
      className={styles.customModal}
      overlayClassName={styles.customOverlay}
    >
      <div id="mapModal" className={styles.mapContainer}></div>

      <button onClick={() => setOpenMap(false)} className={styles.closingButton}>
        Fermer
      </button>
    </Modal>

    {/* MAIN CONTENT */}
    <div className={styles.main}>

      {/* ABOUT */}
      <section className={styles.about}>
        <div className={styles.presentation}>
          <div className={styles.textContent}>
            <h2>Me, Myself and I</h2>
            <p>
               Dans l’enseignement depuis plus de 20 ans, comme professeur de tennis dans un premier temps, Mon parcours m’a mené de la Réunion à la Thaïlande, en passant par Banyuls-sur-Mer, pour vivre et enseigner ma passion de la plongée. Depuis 2017, je suis présent sur cette île magnifique et toujours avec la même envie de faire découvrir cette face peu connue qui grouille de vie ! 
      Moniteur de plongée sous-marine professionnel,  je travaille en tant qu’indépendant sur le  Port de Saint-Gilles les Bains. 
      Ce que j’aime le plus dans la plongée : Être dans l’instant présent, totalement connecté à l’environnement sous-marin, et me laisser surprendre par ses merveilles !
            </p>

            <button className={styles.moreBtn} onClick={() => navigate("/contact")}>
              Allez viens, on est bien !
            </button>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className={styles.why}>
        <h2>Pourquoi choisir Hug'O₂ Diving?</h2>
        <div className={styles.whyGrid}>
          <div>
            <h3>Certifications multiples</h3>
            <p><ul><li>Diplôme d'état E4</li><li>Moniteur fédéral 1er degré</li><li>PADI, SDI/TDI</li></ul></p>
          </div>

          <div>
            <h3>Matériel Scubapro</h3>
            <p><ul><li> Équipement de qualité,<br></br> régulièrement entretenu</li></ul></p>
          </div>

          <div>
            <h3>Expérience internationale</h3>
            <p><ul><li>+4000 plongées dans<br></br> le monde entier</li></ul></p>
          </div>

          <div>
            <h3>Approche personnalisée</h3>
            <p><ul><li>Petits groupes,<br></br> encadrement adapté <br></br>à votre niveau</li></ul></p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className={styles.gallery}>
        <h2 className={styles.underWater}>Moments sous l'eau</h2>

        <div className={styles.galleryGrid}>
          {randomImages.map((img, index) => (
            <img
              key={index}
              src={img.secure_url}
              alt=""
              onClick={() => navigate("/gallery")}
            />
          ))}
        </div>

        <button className={styles.otherBtn} onClick={() => navigate("/gallery")}>
          Voir la galerie
        </button>
      </section>

      {/* PRICES */}
      <section className={styles.prices} ref={tarifsRef}>
        <h2>Tarifs</h2>

        <ul className="prices">
          <li><span>Randonnée Palmée</span><strong>55 euros</strong></li>
          <li><span>Baptême</span><strong>85 euros</strong></li>
          <li><span>Initiation</span><strong>110 euros</strong></li>
          <li><span>Pack découverte</span><strong>180 euros</strong></li>
          <li><span>Exploration</span><strong>65 euros</strong></li>
          <li><span>Réadaptation</span><strong>80 euros</strong></li>
          <li><span>Pack 3 plongées</span><strong>185 euros</strong></li>
          <li><span>Pack 6 plongées</span><strong>350 euros</strong></li>
          <li><span>Pack 10 plongées</span><strong>550 euros</strong></li>
          <li><span>Niveau 1 / Open water SDI</span><strong>490 euros</strong></li>
          <li><span>Nitrox simple</span><strong>180 euros</strong></li>
          <li><span>Nitrox confirmé</span><strong>310 euros</strong></li>
          <li><span>Formations N2, N3...</span><strong>Sur devis</strong></li>
        </ul>

        <button className={styles.otherBtn} onClick={() => navigate("/plongee")}>
          Voir toutes les formules
        </button>
      </section>

      {/* SPECIES */}
      <section className={styles.species}>
        <h2>Rencontrez les espèces</h2>

        <div className={styles.speciesGrid}>
          {randomSpecies.map((sp) => (
            <div key={sp.id}>
              <img
                src={sp.image}
                alt={sp.nom_commun}
                onClick={() => navigate(`/wikipage?id=${sp.id}`)}
              />
              <p>{sp.nom_commun}</p>
            </div>
          ))}
        </div>
      </section>

      <button className={styles.otherBtn} onClick={() => navigate("/wikipage")}>
        Wikipage
      </button>
        {showScrollTop && (
              <button
                className={styles.scrollTop}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                ↑
              </button>
            )}
    </div>
  </>
);


}
export default Home;
