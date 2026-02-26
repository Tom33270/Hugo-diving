import { useEffect, useState } from "react";
import styles from "../styles/Wikipage.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

export default function WikiPage() {
  const router = useRouter();
  const { id } = router.query;

  const [speciesList, setSpeciesList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filtres
  const [searchName, setSearchName] = useState("");
  const [habitat, setHabitat] = useState("");
  const [profondeur, setProfondeur] = useState("");
  const [frequence, setFrequence] = useState("");

  function getMaxDepth(depthString) {
    if (!depthString) return null;
    const nums = depthString.match(/\d+/g);
    if (!nums || nums.length === 0) return null;
    return Number(nums[nums.length - 1]);
  }

  useEffect(() => {
    fetch("/data/poissons-reunion.json")
      .then((res) => res.json())
      .then((data) => {
        setSpeciesList(data);
        setFilteredList(data);

        // 👉 Mode fiche individuelle
        if (id) {
          const found = data.find((sp) => sp.id === Number(id));
          setSelectedSpecies(found || null);
        }
      });
  }, [id]);

  // Fonction de filtrage (uniquement si pas en mode individuel)
  useEffect(() => {
    if (id) return; // 👉 On ne filtre pas en mode fiche individuelle

    let result = speciesList;

    if (searchName.trim() !== "") {
      result = result.filter((sp) =>
        sp.nom_commun.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    if (habitat !== "") {
      result = result.filter((sp) => sp.habitat === habitat);
    }

    if (profondeur !== "") {
      const maxFilter = Number(profondeur);

      result = result.filter((sp) => {
        const maxDepth = getMaxDepth(sp.profondeur);
        if (maxDepth === null) return false;
        return maxDepth <= maxFilter;
      });
    }

    if (frequence !== "") {
      result = result.filter((sp) => sp.frequence === frequence);
    }

    setFilteredList(result);
  }, [searchName, habitat, profondeur, frequence, speciesList, id]);
  
// 👉 MODE FICHE INDIVIDUELLE
if (id && selectedSpecies) {
  return (
    <div className={styles.pageBackground}>

      <Head>
        <title>{selectedSpecies.nom_commun} – Poisson de La Réunion | Fiche & Photo</title>

        <meta
          name="description"
          content={`Informations sur ${selectedSpecies.nom_commun} : habitat, comportement, alimentation et observation à La Réunion. Photo et fiche complète.`}
        />

        <link
          rel="canonical"
          href={`https://hugodiving.com/wikipage?id=${selectedSpecies.id}`}
        />

        <meta property="og:title" content={`${selectedSpecies.nom_commun} – Poisson de La Réunion`} />
        <meta property="og:description" content={`Fiche complète sur ${selectedSpecies.nom_commun}.`} />
        <meta property="og:image" content={selectedSpecies.image} />
        <meta property="og:type" content="article" />
      </Head>

      <div className={styles.detailWrapper}>
        <h1 className={styles.detailTitle}>{selectedSpecies.nom_commun}</h1>

        <button
          className={styles.backBtn}
          onClick={() => router.push("/wikipage")}
        >
          Retour à la liste
        </button>

        <div className={styles.detailCard}>
          <Image
            src={selectedSpecies.image}
            alt={selectedSpecies.nom_commun}
            width={900}
            height={500}
            unoptimized
            className={styles.detailImage}
          />

          <div className={styles.detailInfo}>
            <p><strong>Nom scientifique :</strong> {selectedSpecies.nom_scientifique}</p>
            <p><strong>Famille :</strong> {selectedSpecies.famille}</p>
            <p><strong>Habitat :</strong> {selectedSpecies.habitat}</p>
            <p><strong>Profondeur :</strong> {selectedSpecies.profondeur}</p>
            <p><strong>Fréquence :</strong> {selectedSpecies.frequence}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

  // 👉 MODE LISTE COMPLÈTE
  return (
    <div className={styles.pageBackground}>
      

<Head>
  <title>Poissons de La Réunion – Fiches Espèces & Photos  Hug’O₂ Diving
</title>
  <meta name="description" content="Explorez les espèces marines de La Réunion : poissons tropicaux, tortues, raies, cétacés. Fiches complètes avec photos et informations utiles." />
  <link rel="canonical" href="https://hugodiving.com/wikipage" />
</Head>
      <div className={styles.main}>
        <h1>WikiFish</h1>

        <button className={styles.button} onClick={() => router.push("/")}>
          Retour à l'accueil
        </button>

        {/* 🔍 Zone de filtres */}
        <div className={styles.filters}>
          <input
            type="text"
            placeholder="Rechercher par nom..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />

          <select value={habitat} onChange={(e) => setHabitat(e.target.value)}>
            <option value="">Habitat</option>
            <option value="Récifs">Récifs</option>
            <option value="Récifs externes">Récifs externes</option>
            <option value="Lagons">Lagons</option>
            <option value="Pleine eau">Pleine eau</option>
          </select>

          <select value={profondeur} onChange={(e) => setProfondeur(e.target.value)}>
            <option value="">Profondeur</option>
            <option value="20">≤ 20 m</option>
            <option value="40">≤ 40 m</option>
            <option value="60">≤ 60 m</option>
            <option value="100">≤ 100 m</option>
          </select>

          <select value={frequence} onChange={(e) => setFrequence(e.target.value)}>
            <option value="">Fréquence</option>
            <option value="Fréquent">Fréquent</option>
            <option value="Occasionnel">Occasionnel</option>
            <option value="Rare">Rare</option>
          </select>
        </div>

        <p className={styles.count}>
          {filteredList.length} espèce{filteredList.length > 1 ? "s" : ""} trouvée{filteredList.length > 1 ? "s" : ""}
        </p>

        {/* 🐠 Grille des espèces */}
        <div className={styles.grid}>
          {filteredList.map((species) => (
            <div
              key={species.id}
              className={styles.card}
              onClick={() => router.push(`/wikipage?id=${species.id}`)}
            >
              <Image
                src={species.image}
                alt={species.nom_commun}
                width={600}
                height={400}
                unoptimized
              />

              <div className={styles.cardContent}>
                <h2>{species.nom_commun}</h2>
                <p><strong>Nom scientifique :</strong> {species.nom_scientifique}</p>
                <p><strong>Famille :</strong> {species.famille}</p>
                <p><strong>Habitat :</strong> {species.habitat}</p>
                <p><strong>Profondeur :</strong> {species.profondeur}</p>
                <p><strong>Fréquence :</strong> {species.frequence}</p>
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>

      {showScrollTop && (
        <button
          className={styles.scrollTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </div>
  );
}