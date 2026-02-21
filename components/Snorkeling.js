import styles from '../styles/Snorkeling.module.css';
import { useRouter } from "next/router";

function Snorkeling(){
     const router = useRouter();


    return (
<div className={styles.global}>
    <section className={styles.header}>
         <h1 className={styles.title}>Randonnée Palmée</h1>
         <button onClick={() => router.push("/")}>Retour à l'accueil</button>
    </section>

    <section className={styles.main}>
        <div className={styles.intro}>
            <h2>Explorez le Récif en Surface</h2>
            <p>
                La randonnée palmée, ou snorkeling, est l'activité idéale pour découvrir les merveilles
                du lagon réunionnais sans avoir besoin de certification. Accessible à tous, elle vous permet
                d'observer la vie sous-marine dans des conditions optimales de sécurité et de confort.
            </p>
        </div>

        <div className={styles.experience}>
            <h2>Une Expérience Guidée et Sécurisée</h2>
            <p>
                En tant que guide expérimenté, je vous accompagne sur les plus beaux spots de Saint-Gilles-les-Bains.
                Avec plusieurs années d'expérience et une connaissance approfondie des sites, je vous emmène à la
                rencontre de la faune et de la flore locale tout en vous transmettant les bonnes pratiques
                d'observation et de respect de l'environnement.
            </p>
        </div>

        <div className={styles.discover}>
            <h2>Que Découvrir ?</h2>
            <div className={styles.discoverGrid}>
                <div>
                    <h3>Récif Corallien</h3>
                    <p>Explorez les formations coralliennes colorées et leur écosystème unique</p>
                </div>
                <div>
                    <h3>Poissons Tropicaux</h3>
                    <p>Poissons-papillons, chirurgiens, perroquets et bien d'autres espèces</p>
                </div>
                <div>
                    <h3>Tortues Marines</h3>
                    <p>Observez les tortues vertes dans leur habitat naturel</p>
                </div>
                <div>
                    <h3>Raies et Murènes</h3>
                    <p>Rencontrez raies pastenagues, raies aigles et murènes paisibles</p>
                </div>
            </div>
        </div>

        <div className={styles.spots}>
            <h2>Nos Sites de Randonnée Palmée</h2>
            <div className={styles.spotsContent}>
                <p>
                    Les eaux cristallines de Saint-Gilles-les-Bains abritent plusieurs spots
                    exceptionnels pour la randonnée palmée :
                </p>
                <ul>
                    
                    <li><strong>Cap L'Houssaye </strong>: plongée au cœur d’un relief volcanique spectaculaire, entre arches, failles et poissons tropicaux.</li>
                    <li><strong>Canyon</strong> :  exploration d’un véritable labyrinthe naturel, avec descentes entre les parois rocheuses et bancs de poissons colorés.</li>
                    <li><strong>Pain De Sucre </strong> : un jardin corallien lumineux, idéal pour observer une grande diversité de poissons et de coraux.</li>
                    <li><strong>Boucan Canot </strong>: observations de tortues.</li>
                </ul>
            </div>
        </div>

        <div className={styles.included}>
            <h2>La Formule Comprend</h2>
            <div className={styles.includedGrid}>
                <div>
                    <h3>Équipement Complet</h3>
                    <p>Palmes, masque, tuba de qualité professionnelle fournis</p>
                </div>
                <div>
                    <h3>Combinaison</h3>
                    <p>Combinaison néoprène pour votre confort et protection</p>
                </div>
                <div>
                    <h3>Guide Expert</h3>
                    <p>Accompagnement personnalisé et explications sur la faune/flore</p>
                </div>
                <div>
                    <h3>Photos Souvenir</h3>
                    <p>Photos sous-marines de votre sortie (selon disponibilité)</p>
                </div>
            </div>
        </div>

        <div className={styles.ideal}>
            <h2>Idéal Pour</h2>
            <ul>
                <li>Les familles avec enfants (à partir de 8 ans)</li>
                <li>Les personnes souhaitant découvrir le monde sous-marin</li>
                <li>Les groupes d'amis en quête d'activités nature</li>
                <li>Ceux qui veulent observer sans plonger profond</li>
                <li>Les amateurs de photographie sous-marine</li>
            </ul>
        </div>

        <div className={styles.tips}>
            <h2>Conseils Pratiques</h2>
            <div className={styles.tipsContent}>
                <p>Avant la sortie :</p>
                <ul>
                    <li>Appliquer de la crème solaire bio (respectueuse du corail)</li>
                    <li>Prévoir une serviette et des vêtements de rechange</li>
                    <li>Apporter de l'eau pour s'hydrater</li>
                </ul>

                <p>Pendant la randonnée :</p>
                <ul>
                    <li>Ne jamais toucher le corail ou les animaux marins</li>
                    <li>Maintenir une distance respectueuse avec la faune</li>
                    <li>Suivre les consignes du guide pour votre sécurité</li>
                    <li>Profiter et observer en toute tranquillité</li>
                </ul>

                <p>À savoir :</p>
                <ul>
                    <li>Durée moyenne : 2h30 (incluant briefing, temps dans l'eau et équipement)</li>
                    <li>Temps dans l'eau : environ 1h</li>
                    <li>Niveau requis : savoir nager</li>
                    <li>Accessible dès 8 ans accompagné d'un adulte</li>
                </ul>
            </div>
        </div>

        <div className={styles.infos}>
            <h2>Informations Pratiques</h2>
            <div className={styles.infosGrid}>
                <div>
                    <h3>Lieu de Rendez-vous</h3>
                    <p>Club de plongée Escapade sur le port de Saint Gilles </p>
                </div>
                <div>
                    <h3>Horaires</h3>
                    <p>Sorties matin (9h) et après-midi (14h)</p>
                </div>
                <div>
                    <h3>Groupe</h3>
                    <p>Minimum 4 personne / Maximum 8 personnes</p>
                </div>
                <div>
                    <h3>Tarif</h3>
                    <p>À partir de 55€/personne</p>
                </div>
            </div>
        </div>

        <div className={styles.cta}>
            <h2>Prêt pour l'Aventure ?</h2>
            <p>Réservez votre randonnée palmée dès maintenant</p>
            <button onClick={() => router.push("/contact")}>Me Contacter</button>
        </div>
        <div className={styles.footer}>
      <p>№ SIRET: 92148663500029</p>
      

    </div>
    </section>
</div>


    )
}

export default Snorkeling
