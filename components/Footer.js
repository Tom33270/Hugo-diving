import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
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

        <p className={styles.siret}>SIRET : 921 486 635 00029</p>
      </div>
    </footer>
  );
}