import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faUser,faLocationDot, faBagShopping, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
import { Popover, Button } from 'antd';


function Home() {

  const menu = <FontAwesomeIcon icon={faBars} />;
  const loggin = <FontAwesomeIcon icon={faUser} />;
  const position = <FontAwesomeIcon icon={faLocationDot} />
  const panier = <FontAwesomeIcon icon={faPhotoFilm} />
 const popoverContent = (
    <div className={styles.popoverContent}>
      <span>La Plongée</span><br>
      </br>
      <span>______________</span><br></br>
      <span>Le Snorkling</span><br>
      </br>
      <span>______________</span><br></br>
      <span>Les Sorties Cétacés </span>
      
    
    </div>
);
  return (
    
    <div>
      <header className= {styles.header}>
        <div className= {styles.tete}>
          <p className ={styles.menu}></p>
        <h1 className={styles.title}>HUGO DIVING</h1>
        <div className ={styles.btntete}>
          <Popover title="MENU" content={popoverContent} className={styles.menu} trigger="click" >
          <Button style={{cursor: 'pointer'}}>{menu}Menu</Button>
          </Popover>
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
    </div>
  );
}

export default Home;
