import { useState } from "react";
import styles from "../styles/Contact.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faPhone} from '@fortawesome/free-solid-svg-icons';


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", number: "", });
  const [sent, setSent] = useState(false);
  const instagram = <FontAwesomeIcon icon={faInstagram} />;
  const mail = <FontAwesomeIcon icon={faMailBulk} />;
  const mobile = <FontAwesomeIcon icon={faPhone} />;

    const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSent(true);
      setForm({ name: "", email: "", message: "", number: "",});
    }
  };

  return (
    <><Head>
  <title>Contact – Hug’O₂ Diving  Plongée à Saint‑Gilles-les-Bains
</title>
  <meta name="description" content="Réservez votre plongée, sortie cétacés ou initiation apnée à Saint‑Gilles. Contactez Hug’O₂ Diving : email, Instagram, localisation et horaires." />
  <link rel="canonical" href="https://hugodiving.com/contact" />
</Head>
    <div className={styles.global}>


      <section className={styles.header}>
         <h1 className={styles.title}>Contact</h1>
    </section>
      <section className={styles.main}>
        <div className={styles.contactInfo}>
          <img className={styles.imageProfil} src="/image/photoProfil.jpeg" alt="Photo de moi"></img>
  <h2>Mes coordonnées</h2>
    <p>{mobile} (+33)06 95 48 20 16</p>
    <p>{mail} hugodiving974@gmail.com</p>
    <p>{instagram} <a 
            href="https://www.instagram.com/hug_o2_diving" 
            target="_blank" 
            rel="noopener noreferrer"
          >
           @hug_o2_diving
          </a></p>
</div>

        
       

        {sent && <p className={styles.success}>Message envoyé !</p>}
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Votre nom"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            placeholder="Votre numéro"
            value={form.number}
            onChange={(e) => setForm({ ...form, number: e.target.value })}
            required
          />
            <input
            type="email"
            placeholder="Votre email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <textarea
            placeholder="Votre message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />

          <button type="submit">Envoyer</button>
         
        </form>
        
        </div>
        <div> <button className={styles.btnHome} onClick={() => router.push("/")}>Retour à l'accueil</button></div>
        
      </section>
    </div>
    </>
  );
}