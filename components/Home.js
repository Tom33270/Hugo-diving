import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLocationDot, faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import { useState } from 'react';
import Modal from 'react-modal';


function Home() {
  const [open, setOpen] = useState(false);

  const menu = <FontAwesomeIcon icon={faBars} />;
  const position = <FontAwesomeIcon icon={faLocationDot} />;
  const panier = <FontAwesomeIcon icon={faPhotoFilm} />;

  const modalContent = (
    <div className={styles.modalContent}>
      <div className={styles.plongee} onClick={() => console.log("Plongée cliquée !")}>Plongée</div>
      <div className={styles.snorkeling} onClick={() => console.log("Snorkeling cliquée !")}>Snorkeling</div>
      <div className={styles.cetaces} onClick={() => console.log("Cétacé cliquée !")}>Sortie cétacés</div>
    </div>
  );

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.tete}>
          <div className={styles.btntete}>
            <Button
              style={{ cursor: 'pointer' }}
              className={styles.menu}
              onClick={() => setOpen(true)}
            >
              {menu}Menu
            </Button>

            <Modal
              isOpen={open}
              onClick={() => setOpen(false)}
              shouldCloseOnOverlayClick={true}
              className={styles.customModal}
              overlayClassName={styles.customOverlay}
            

            >
              <h2 className={styles.activites}>Les différentes activités</h2>
              {modalContent}
              <button onClick={() => setOpen(false)} className={styles.closingButton}>Fermer</button>
              
            </Modal>

            <h1 className={styles.title}>HUGO DIVING</h1>
            <div className={styles.buttonsRight}>
              <p className={styles.btnPosition}>{position} maps</p>
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

      <div className={styles.presentation}>
        <h2>Intro personne Hugo</h2>
        <p>text text text text text text</p>
        <img alt="illustration" />
      </div>
    </div>
  );
}

export default Home;