import styles from '../styles/Plongee.module.css';
import { useRouter } from "next/router";

function Plongee(){
     const router = useRouter();


    return (
<div className={styles.global}>
    <div className={styles.header}>
         <h1 className={styles.title}>Plongée Bouteille </h1>
         <button onClick={() => router.push("/")}>Retour à l'accueil</button>
    </div>

    <section className={styles.main}>
        <div className={styles.intro}>
            <h2>Explorez les fonds marins de La Réunion</h2>
            <p>
                Que vous soyez débutant ou plongeur confirmé, je vous accompagne dans la découverte
                des sites exceptionnels de Saint-Gilles-les-Bains. Du baptême aux plongées profondes
                jusqu'à 60 mètres, vivez une expérience inoubliable dans les eaux cristallines de l'océan Indien.
            </p>
        </div>

        <div className={styles.formules}>
            <h2 className={styles.h2title}>Nos Formules de Plongée</h2>
             <p className={styles.subTitle}>à partir de 8 ans</p>

            <div className={styles.formulesGrid}>
                <div className={styles.formuleCard}>
                    <h3>Baptême de Plongée</h3>
                    <p className={styles.price}>85€ / personne</p>
                    <ul>
                        <li>Durée : environ 25 minutes sous l'eau</li>
                        <li>1 personne à la fois (2 personnes max par session)</li>
                        <li>Aucun pré-requis nécessaire</li>
                        <li>Tout le matériel fourni</li>
                        <li>Encadrement personnalisé</li>
                    </ul>
                    <p className={styles.description}>
                        Première expérience sous-marine dans un cadre sécurisé.
                        Découvrez les sensations de la plongée et l'émerveillement du monde sous-marin.
                    </p>
                </div>

                <div className={styles.formuleCard}>
                    <h3>Initiation</h3>
                    <p className={styles.price}>110€ / personne</p>
                    <ul>
                        <li>Durée : 45 minutes à 1 heure</li>
                        <li>2 à 4 personnes en même temps</li>
                        <li>Pré-requis : baptême récent et être à l'aise</li>
                        <li>Approfondissement des techniques</li>
                        <li>Exploration plus longue</li>
                    </ul>
                    <p className={styles.description}>
                        Poursuivez votre découverte de la plongée avec plus d'autonomie et
                        commencez à maîtriser les bases techniques.
                    </p>
                </div>

                <div className={styles.formuleCard}>
                    <h3>Plongée Exploration</h3>
                    <p className={styles.price}>65€ / personne</p>
                    <ul>
                        <li>Durée : 1 heure</li>
                        <li>1 à 4 personnes maximum</li>
                        <li>Profondeur : 0 à 20 mètres</li>
                        <li>Niveau requis : PE12 minimum</li>
                        <li>Pente externe du récif</li>
                    </ul>
                    <p className={styles.description}>
                        Découvrez la richesse de la pente externe du récif corallien,
                        habitat de nombreuses espèces tropicales.
                    </p>
                </div>

               
                 <div className={styles.formuleCard}>
                    <h3>Pack plongées</h3>
                    <p className={styles.price}>à partir de 185€/ personne</p>
                    <ul>
                        <li>Pack 3 plongées - 185€/personne</li>
                        <li>Pack 6 plongées - 350€/personne</li>
                        <li>Pack 10 plongées - 550€/personne</li>
                        <li>Niveau requis : tout niveau</li>
                        <li>Tout le matériel fourni</li>
                        <li>Encadrement personnalisé</li>
                    </ul>
                    <p className={styles.description}>
                        Fait pour les adeptes et plongeurs souhaitant parfaire leurs compétences au vu de passage de niveau de plongée.
                    </p>
                </div>
                 
            </div>

            <div className={styles.option}>
                <h3>Supplément Nitrox</h3>
                <p>Supplément de 10€ - Pour des plongées plus longues et plus sûres</p>
            </div>
             <div className={styles.option}>
                <h3>Supplément plongée de nuit</h3>
                <p>Supplément de 15€ - Pour des plongées qui diffèrent de l'ordinaire</p>
            </div>
        </div>

        <div className={styles.infos}>
            <h2>Informations Pratiques</h2>
            <div className={styles.infosGrid}>
                <div>
                    <h3>Lieu de Départ</h3>
                    <p className={styles.location} onClick={() =>
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=Escapade+Plong%C3%A9e,+2+Rue+du+Port,+Saint-Gilles+les+Bains,+La+R%C3%A9union",
      "_blank"
    )
  }
> Club Escapade Plongée - Saint-Gilles-les-Bains</p>
                </div>
                <div>
                    <h3>Sites de Plongée</h3>
                    <p>Entre 2 et 15 minutes de navigation</p>
                </div>
                <div>
                    <h3>Matériel</h3>
                    <p>Équipement Scubapro en excellent état, tout fourni</p>
                </div>
                <div>
                    <h3>Confort</h3>
                    <p>Bateaux spacieux, douches, toilettes et café disponibles</p>
                </div>
            </div>
        </div>

        <div className={styles.cta}>
            <h2>Prêt à plonger ?</h2>
            <p>Contactez-moi pour réserver votre plongée</p>
            <button onClick={() => router.push("/contact")}>Réserver maintenant</button>
        </div>
    </section>
    <div className={styles.footer}>
      <p>№ SIRET: 92148663500029</p>

    </div>
</div>


    )
}

export default Plongee
