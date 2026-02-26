import styles from '../styles/Apnee.module.css';
import { useRouter } from "next/router";
import Head from "next/head";


function Apnee(){
     const router = useRouter();


    return (
        <><Head>
  <title>Apnée La Réunion – Initiation & Perfectionnement à Saint‑Gilles  Hug’O₂ Diving
</title>
  <meta name="description" content="Cours d’apnée pour débutants et confirmés à Saint‑Gilles-les-Bains. Respiration, relaxation, immersion libre. Encadrement professionnel et sécurisé." />
  <link rel="canonical" href="https://hugodiving.com/apnee" />
</Head>
<div className={styles.global}>


    <section className={styles.header}>
         <h1 className={styles.title}>Apnée</h1>
         <button onClick={() => router.push("/")}>Retour à l'accueil</button>
    </section>

    <section className={styles.main}>
        <div className={styles.intro}>
            <h2>Découvrez la Liberté de l'Apnée</h2>
            <p>
                L'apnée est une discipline unique qui vous permet d'explorer le monde sous-marin
                en toute liberté, sans équipement encombrant. Reconnectez-vous avec votre respiration
                et découvrez vos capacités insoupçonnées sous l'eau.
            </p>
        </div>

        <div className={styles.expertise}>
            <h2>Moniteur Apnée Certifié PFI</h2>
            <p>
                En tant que moniteur apnée PFI (Performance Freediving International), je vous accompagne
                dans la découverte et le perfectionnement de cette discipline fascinante. De part mon expérience dans l'enseignement, je vous transmets les techniques et la philosophie
                de l'apnée en toute sécurité.
            </p>
        </div>

        <div className={styles.benefits}>
            <h2>Pourquoi l'Apnée ?</h2>
            <div className={styles.benefitsGrid}>
                <div>
                    <h3>Liberté Totale</h3>
                    <p>Sans bouteille, évoluez en totale harmonie avec l'environnement marin</p>
                </div>
                <div>
                    <h3>Connexion Intérieure</h3>
                    <p>Développez votre maîtrise respiratoire et votre conscience corporelle</p>
                </div>
                <div>
                    <h3>Approche Douce</h3>
                    <p>Approchez la faune marine sans bulles, pour des rencontres authentiques</p>
                </div>
                <div>
                    <h3>Progression Rapide</h3>
                    <p>Découvrez rapidement vos capacités et progressez à votre rythme</p>
                </div>
            </div>
        </div>

        <div className={styles.program}>
            <h2>Initiation à l'Apnée</h2>
            <div className={styles.programContent}>
                <h3>Au Programme</h3>
                <ul>
                    <li>Techniques de respiration et de relaxation</li>
                    <li>Exercices de compensation et d'équilibrage</li>
                    <li>Apprentissage du canard et du palmage</li>
                    <li>Descentes progressives en toute sécurité</li>
                    <li>Règles de sécurité et gestion du binôme</li>
                    <li>Découverte de la pente récifale</li>
                </ul>

                <div className={styles.sessions}>
                    <h3>Déroulement des Sessions</h3>
                    <p>
                        Chaque session débute par une partie théorique à terre pour comprendre
                        les principes de l'apnée et les consignes de sécurité. Nous enchaînons
                        ensuite avec une mise en pratique progressive dans l'eau, adaptée à
                        votre niveau et vos capacités.
                    </p>
                </div>
            </div>
        </div>

        <div className={styles.sites}>
            <h2>Sites de Pratique</h2>
            <p>
                Les eaux cristallines de Saint-Gilles-les-Bains offrent un cadre idéal pour
                l'apprentissage de l'apnée. Récif corallien peu profond, tombants progressifs,
                et faune abondante vous permettront de vivre vos premières expériences en apnée
                dans des conditions exceptionnelles.
            </p>
        </div>

        <div className={styles.infos}>
            <h2>Informations Pratiques</h2>
            <div className={styles.infosGrid}>
                <div>
                    <h3>Lieu</h3>
                    <p>Club Escapade Plongée - Saint-Gilles-les-Bains</p>
                </div>
                <div>
                    <h3>Matériel</h3>
                    <p>Palmes, masque et tuba fournis</p>
                </div>
                <div>
                    <h3>Niveau Requis</h3>
                    <p>Aucun pré-requis - Savoir nager</p>
                </div>
                <div>
                    <h3>Groupe</h3>
                    <p>Cours en petit groupe pour un suivi personnalisé (4 personnes maximum)</p>
                </div>
                 <div>
                    <h3>Tarifs</h3>
                    <p>Sur devis</p>
                </div>
                <div>
                    <h3>Durée</h3>
                    <p>1h dans l'eau</p>
                </div>
            </div>
        </div>

        <div className={styles.cta}>
            <h2>Prêt à Découvrir l'Apnée ?</h2>
            <br></br>
            <button onClick={() => router.push("/contact")}>Me Contacter</button>
        </div>
        <div className={styles.footer}>
      <p>№ SIRET: 92148663500029</p>
      

    </div>
    </section>
</div>
</>


    )
}

export default Apnee
