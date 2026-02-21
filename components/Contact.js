import { useState } from "react";
import styles from "../styles/Contact.module.css";
import { useRouter } from "next/router";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", number: "", });
  const [sent, setSent] = useState(false);

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
    <div className={styles.global}>
      <section className={styles.main}>
        <h1 className={styles.title}>Contact</h1>

        {sent && <p className={styles.success}>Message envoyé !</p>}

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
          <button className={styles.btnHome} onClick={() => router.push("/")}>Retour à l'accueil</button>
        </form>
        <div className={styles.footer}>
      <p>№ SIRET: 92148663500029</p>
      

    </div>
        
      </section>
    </div>
  );
}