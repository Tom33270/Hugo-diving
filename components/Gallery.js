import styles from '../styles/Gallery.module.css';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

function Gallery() {
  const router = useRouter();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div className={styles.global}>
      
      <section className={styles.header}>
        <h1 className={styles.title}>Moments sous L'eau</h1>
         <button onClick={() => router.push("/")}>Retour à l'accueil</button>
      </section>

      <section className={styles.main}>
        <div className={styles.grid}>
          {images.map(img => (
            <img key={img.public_id} src={img.secure_url} alt="" />
          ))}
        </div>
        <button className={styles.btnHome} onClick={() => router.push("/")}>Retour à l'accueil</button>
        <div className={styles.footer}>
      <p>№ SIRET: 92148663500029</p>
      

    </div>
      </section>
      

    </div>
  );
}

export default Gallery;