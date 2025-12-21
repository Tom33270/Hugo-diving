import styles from '../styles/Cetaces.module.css';
import { useRouter } from "next/router";

function Cetaces(){
     const router = useRouter();


    return (
<div className={styles.global}>
    <section className={styles.header}>
         <h1 className={styles.title}>Observation des Cétacés</h1>
         <button onClick={() => router.push("/")}>Retour à l'accueil</button>
    </section>

    <section className={styles.main}>
        <div className={styles.intro}>
            <h2>À la Rencontre des Géants des Mers</h2>
            <p>
                La Réunion est un sanctuaire pour les cétacés. De juin à octobre, baleines à bosse,
                dauphins long-bec, grands dauphins et dauphins tachetés évoluent dans les eaux de l'île.
                Partez pour une expérience respectueuse et émouvante d'observation de ces mammifères marins
                dans leur habitat naturel.
            </p>
        </div>

        <div className={styles.experience}>
            <h2>Une Approche Responsable et Respectueuse</h2>
            <p>
                En tant que guide certifié et passionné par la conservation marine, j'applique strictement
                la charte d'approche des cétacés à La Réunion. L'observation se fait dans le respect total
                des animaux : distances de sécurité, limitation du temps d'observation, approche douce et
                non intrusive. Votre émerveillement ne doit jamais se faire au détriment du bien-être des cétacés.
            </p>
        </div>

        <div className={styles.species}>
            <h2>Qui Peut-on Observer ?</h2>
            <div className={styles.speciesGrid}>
                <div>
                    <h3>Baleines à Bosse</h3>
                    <p>De juin à octobre, pendant leur migration. Spectacle majestueux de sauts et de chants</p>
                </div>
                <div>
                    <h3>Dauphins Long-Bec</h3>
                    <p>Présents toute l'année, connus pour leurs acrobaties spectaculaires</p>
                </div>
                <div>
                    <h3>Grands Dauphins</h3>
                    <p>Résidents permanents, souvent curieux et joueurs</p>
                </div>
                <div>
                    <h3>Dauphins Tachetés</h3>
                    <p>Groupes familiaux impressionnants, comportements sociaux fascinants</p>
                </div>
            </div>
        </div>

        <div className={styles.activity}>
            <h2>Déroulement de la Sortie</h2>
            <div className={styles.activityContent}>
                <div className={styles.step}>
                    <h3>1. Briefing Sécurité et Pédagogique</h3>
                    <p>
                        Présentation des espèces observables, charte d'approche, consignes de sécurité
                        et comportements à adopter pour une observation respectueuse.
                    </p>
                </div>

                <div className={styles.step}>
                    <h3>2. Navigation et Recherche</h3>
                    <p>
                        Départ en bateau vers les zones fréquentées par les cétacés. Observation depuis
                        le bateau avec jumelles. Explication des comportements observés.
                    </p>
                </div>

                <div className={styles.step}>
                    <h3>3. Observation Respectueuse</h3>
                    <p>
                        Approche progressive et douce. Maintien des distances règlementaires. Moteurs au
                        ralenti ou coupés. Observation passive privilégiée.
                    </p>
                </div>

                <div className={styles.step}>
                    <h3>4. Mise à l'Eau (Selon Conditions)</h3>
                    <p>
                        Si les conditions et le comportement des animaux le permettent, mise à l'eau
                        en petit groupe pour une observation en snorkeling. Approche uniquement si les
                        dauphins manifestent de la curiosité.
                    </p>
                </div>
            </div>
        </div>

        <div className={styles.charter}>
            <h2>Notre Engagement pour la Protection</h2>
            <div className={styles.charterContent}>
                <p>
                    Nous respectons scrupuleusement la charte d'approche des mammifères marins :
                </p>
                <ul>
                    <li>Distance minimale de 100m avec les baleines, 50m avec les dauphins</li>
                    <li>Approche latérale uniquement, jamais frontale ou par l'arrière</li>
                    <li>Temps d'observation limité pour ne pas déranger</li>
                    <li>Pas de poursuite si les animaux s'éloignent</li>
                    <li>Mise à l'eau uniquement si les dauphins sont réceptifs</li>
                    <li>Observation passive, pas de nage active vers les animaux</li>
                    <li>Groupes limités pour minimiser l'impact</li>
                    <li>Sensibilisation continue à la conservation marine</li>
                </ul>
            </div>
        </div>

        <div className={styles.season}>
            <h2>Meilleures Périodes d'Observation</h2>
            <div className={styles.seasonGrid}>
                <div>
                    <h3>Baleines à Bosse</h3>
                    <p><strong>Juin à Octobre</strong></p>
                    <p>Pic d'observation en juillet-août. Migration annuelle pour la reproduction.</p>
                </div>
                <div>
                    <h3>Dauphins</h3>
                    <p><strong>Toute l'Année</strong></p>
                    <p>Résidents permanents. Meilleures chances tôt le matin (départ 7h).</p>
                </div>
            </div>
        </div>

        <div className={styles.important}>
            <h2>À Savoir Avant de Réserver</h2>
            <div className={styles.importantContent}>
                <p><strong>L'observation ne peut jamais être garantie à 100%</strong></p>
                <p>
                    Nous partons à la rencontre d'animaux sauvages en liberté dans leur milieu naturel.
                    Bien que les taux d'observation soient très élevés à La Réunion (environ 90% de réussite),
                    il arrive que les conditions météo, la mer ou le comportement des animaux ne permettent
                    pas d'observation ce jour-là. C'est la magie et le respect de la vie sauvage.
                </p>

                <p><strong>Conditions physiques requises :</strong></p>
                <ul>
                    <li>Savoir nager pour la mise à l'eau (optionnelle)</li>
                    <li>Pas de contre-indication médicale à la navigation</li>
                    <li>Bonne condition physique générale</li>
                    <li>Les enfants sont acceptés à partir de 8 ans</li>
                </ul>
            </div>
        </div>

        <div className={styles.infos}>
            <h2>Informations Pratiques</h2>
            <div className={styles.infosGrid}>
                <div>
                    <h3>Durée</h3>
                    <p>3 à 4 heures en mer (selon observations)</p>
                </div>
                <div>
                    <h3>Départ</h3>
                    <p>Port de Saint-Gilles - Départ 7h (recommandé)</p>
                </div>
                <div>
                    <h3>Groupe</h3>
                    <p>12 personnes maximum par sortie</p>
                </div>
                <div>
                    <h3>Matériel Fourni</h3>
                    <p>Palmes, masque, tuba, combinaison si mise à l'eau</p>
                </div>
                <div>
                    <h3>À Apporter</h3>
                    <p>Crème solaire bio, casquette, eau, appareil photo</p>
                </div>
                <div>
                    <h3>Tarif</h3>
                    <p>85€/personne - Réduction famille disponible</p>
                </div>
            </div>
        </div>

        <div className={styles.cta}>
            <h2>Prêt pour cette Expérience Unique ?</h2>
            <p>Réservez votre sortie d'observation des cétacés</p>
            <button onClick={() => router.push("/")}>Me Contacter</button>
        </div>
    </section>
</div>


    )
}

export default Cetaces
