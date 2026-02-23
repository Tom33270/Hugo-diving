import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCreditCard, faFish, faLocationDot, faMailBulk, faPhotoFilm, faWater} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
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

  const menu = <FontAwesomeIcon icon={faWater} />;
  const position = <FontAwesomeIcon icon={faLocationDot} />;
  const photos = <FontAwesomeIcon icon={faPhotoFilm} />;
  const tarifs = <FontAwesomeIcon icon={faCreditCard} />;
  const contact = <FontAwesomeIcon icon={faMailBulk} />;
  const instagram = <FontAwesomeIcon icon={faInstagram} />;
   const wiki = <FontAwesomeIcon icon={faFish} />;
   
const [Images, setImages] = useState([]);
const [randomImages, setRandomImages] = useState([]);

 const [randomSpecies, setRandomSpecies] = useState([]);

 const [scrolled, setScrolled] = useState(false);

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

  const modalContent = (
    <div className={styles.modalContent}>
      <div className={styles.plongee} onClick={() => router.push("/plongee")}>Plongée</div>
      <div className={styles.snorkeling} onClick={() => router.push("/snorkeling")}>Snorkeling</div>
      <div className={styles.cetaces } onClick={() => router.push("/cetaces")}>Sortie cétacés</div>
      <div className={styles.apnee} onClick={() => router.push("/apnee")}>Apnée</div>
      <p className={`${styles.cardButton} ${styles.btnPosition}`} onClick={() => setOpenMap(true)}>
  {position} Maps
</p>


    </div>
  );

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.tete}>
          <div className={ `${styles.btntete} ${scrolled ? styles.scrolled : ""}`}>
           
            <p className={ `${styles.menu} ${scrolled ? styles.scrolled : ""}`} onClick={() => setOpen(true)}>
              {menu} Activitées</p>
            <p className={`${styles.menu} ${scrolled ? styles.scrolled : ""}`} onClick={() => router.push("/gallery")}>
  {photos} Galerie
</p>

<p className={`${styles.menu} ${scrolled ? styles.scrolled : ""}`} onClick={() => router.push("/wikipage")}>
  {wiki} WikiFish
</p>

<p className={`${styles.menu} ${scrolled ? styles.scrolled : ""}`} onClick={() => router.push("/contact")}>
  {contact} Contact
</p>
            
          

          
            <Modal
              isOpen={open}
              bodyOpenClassName="no-scroll"
              onRequestClose={() => setOpen(false)}
              shouldCloseOnOverlayClick={true}
              className={styles.customModal}
              overlayClassName={styles.customOverlay}
              
            >
              <h2 className={styles.activities}>Les différentes activitées</h2>
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
  <h2>Pourquoi choisir Hug'O₂ Diving?</h2>
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
 {randomImages.map((img, index) => (
  <img
    key={index}
    src={img.secure_url}
    alt=""
    onClick={() => router.push("/gallery")}
  />
))}

</div>

  <button className={styles.otherBtn} onClick={() => router.push("/gallery")}>Voir la galerie</button>
</section>

<section className={styles.prices} ref={tarifsRef}>
  <h2>Tarifs</h2>
<ul class="prices">
  <li><span>Randonnée Palmée (4 personnes mini / 1h)</span><strong>55 euros</strong></li>
  <li><span>Baptême (environ 25min)</span><strong>85 euros</strong></li>
  <li><span>Initiation (45min à 1h)</span><strong>110 euros</strong></li>
  <li><span>Pack découverte : un Baptême + une Initiation (12m max)</span><strong>180 euros</strong></li>
  <li><span>Exploration (à partir du pe12)</span><strong>65 euros</strong></li>
  <li><span>Réadaptation (+ 1 an sans plonger)</span><strong>80 euros</strong></li>
  <li><span>Pack 3 plongées</span><strong>185 euros</strong></li>
  <li><span>Pack 6 plongées</span><strong>350 euros</strong></li>
  <li><span>Pack 10 plongées</span><strong>550 euros</strong></li>
  <li><span>Niveau 1 / Open water SDI (5 plongées)</span><strong>490 euros</strong></li>
  <li><span>Formation Nitrox simple (2 plongées)</span><strong>180 euros</strong></li>
  <li><span>Formation Nitrox confirmé (4 plongées)</span><strong>310 euros</strong></li>
  <li><span>Formation N2, N3, préparation monitorat, etc.</span><strong>Sur devis</strong></li>
  <li><span>Sortie cétacés</span><strong>Sur devis</strong></li>
  <li><span>Initiation apnée</span><strong>Sur devis</strong></li>
  <li><span>Supplément plongée de nuit</span><strong>15 euros</strong></li>
  <li><span>Supplément Nitrox</span><strong>10 euros</strong></li>
</ul>
  <button className={styles.otherBtn} onClick={() => router.push("/plongee")}>Voir toutes les formules</button>
</section>

<section className={styles.species}>
  <h2>Rencontrez les espèces</h2>
  <div className={styles.speciesGrid}>
  {randomSpecies.map((sp) => (
    <div key={sp.id}>
      <img
        src={sp.image}
        alt={sp.nom_commun}
        onClick={() => router.push(`/wikipage?id=${sp.id}`)}
      />
      <p>{sp.nom_commun}</p>
    </div>
  ))}
</div>
  
</section>
<button className={styles.otherBtn} onClick={() => router.push("/wikipage")}>Wikipage</button>
  <h2 className={styles.titleContact}>Contact</h2>
<section className={styles.contact}>
  
  <p className={styles.location} onClick={() =>
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=Escapade+Plong%C3%A9e,+2+Rue+du+Port,+Saint-Gilles+les+Bains,+La+R%C3%A9union",
      "_blank"
    )
  }
> {position} Club Escapade Plongée - Saint-Gilles-les-Bains</p>
<br></br>
<p className={styles.location} onClick={() =>
    window.open(
      "https://www.instagram.com/hug_o2_diving/"
    )
  }>{instagram}hug_o2_diving</p>
  <br></br>
  <p>hugodiving974@gmail.com</p>
  <div className={styles.socials}>
   
    
  </div>
</section>
<div className={styles.footer}>
      <p>№ SIRET: 92148663500029</p>
      

    </div>
    </div>
    
  </div>
  );
}

export default Home;