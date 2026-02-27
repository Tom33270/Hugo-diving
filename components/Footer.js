import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faPhone} from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
    const instagram = <FontAwesomeIcon icon={faInstagram} />;
    const mail = <FontAwesomeIcon icon={faMailBulk} />;
    const mobile = <FontAwesomeIcon icon={faPhone} />;
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.brand}>© {new Date().getFullYear()} Hug’O₂ Diving</p>

        <nav className={styles.links}>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-confidentialite">Politique de confidentialité</Link>
          <Link href="/cgu">CGU</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/">Accueil</Link>
         
        </nav>
        <nav className={styles.links}>
         <p><a 
            href="https://www.instagram.com/hug_o2_diving" 
            target="_blank" 
            rel="noopener noreferrer"
          >
           {instagram}@hug_o2_diving
          </a></p>
          <p>{mail} hugodiving974@gmail.com</p>
          <p>{mobile} (+33)06 95 48 20 16</p>
</nav>  
        <p className={styles.siret}>SIRET : 921 486 635 00029</p>
      </div>
    </footer>
  );
}