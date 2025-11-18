import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faUser,faLocationDot, faBagShopping, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'



function Home() {

  const menu = <FontAwesomeIcon icon={faBars} />;
  const loggin = <FontAwesomeIcon icon={faUser} />;
  const position = <FontAwesomeIcon icon={faLocationDot} />
  const panier = <FontAwesomeIcon icon={faPhotoFilm} />
  return (
    
    <div>
      <header className= {styles.header}>
        <div className= {styles.tete}>
          <p className ={styles.menu}></p>
        <h1 className={styles.title}>HUGO DIVING</h1>
        <div className ={styles.btntete}>
          <p className ={styles.menu}>{menu} menu</p>
          <p className={styles.btnPosition}>{position} maps</p>
          <p className={styles.btnPanier}>{panier} photos</p>
        </div>
        </div>
        <div className={styles.bas}>
          <div className={styles.titles}>
          <span className={styles.title4}>BEYOND</span> 
          <span className ={styles.titlebtm}>OCEANS</span>
          </div>
          <div className={styles.btn_bas}>
            <button className={styles.discover}>TARIFS</button>
            <button className={styles.buy}>RESERVATIONS</button>
            </div>
        </div>
      </header>
      {/* <body className={styles.product}>
        <div className={styles.soundbar}>
        <span className={styles.banner1}>LASTEST LAUNCH</span>
        <span className={styles.banner2}>DIONE SOUNDBAR</span>
        <img className= {styles.imgbar} src='../soundbar.png'/>
         <button className={styles.discovbar}>DISCOVER</button>
        </div>

      </body> */}
    </div>
  );
}

export default Home;
