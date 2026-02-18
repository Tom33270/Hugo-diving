import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from '../styles/Wikipage.module.css';
import Image from "next/image";

export default function WikiPage() {
  const router = useRouter();
  const [species, setSpecies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;

    const { id } = router.query;

    fetch("/data/poissons-reunion.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((sp) => sp.id === Number(id));
        setSpecies(found || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur JSON :", err);
        setLoading(false);
      });
  }, [router.isReady, router.query]);

  if (loading) return <p>Chargement...</p>;
  if (!species) return <p>Aucune espèce trouvée</p>;

  return (
    <div className={styles.main}>
      <h1>{species.nom_commun}</h1>

   <Image
  src={species.image}
  alt={species.nom_commun}
  width={600}
  height={400}
  unoptimized
  style={{ borderRadius: "10px", objectFit: "cover" }}
/>



      <p><strong>Nom scientifique :</strong> {species.nom_scientifique}</p>
      <p><strong>Famille :</strong> {species.famille}</p>
      <p><strong>Habitat :</strong> {species.habitat}</p>
      <p><strong>Profondeur :</strong> {species.profondeur}</p>
      <p><strong>Fréquence :</strong> {species.frequence}</p>
    </div>
  );
}