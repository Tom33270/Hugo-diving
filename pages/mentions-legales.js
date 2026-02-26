export default function MentionsLegales() {
  return (
      <div style={{ padding: "50px", maxWidth: "100%", margin: "auto", backgroundColor:"#506F81", color:"#F0DFCD", alignItems:"center", textAlign:"justify"}}>
      <h1>Mentions légales</h1>
      <p>Dernière mise à jour : {new Date().getFullYear()}</p>

      <h2>1. Éditeur du site</h2>
      <p>
        Le présent site est édité par <strong>Hug’O₂ Diving</strong>, entreprise
        individuelle enregistrée sous le numéro SIRET :
        <strong> 921 486 635 00029</strong>.
      </p>
      <p>
        Adresse : Saint‑Gilles‑les‑Bains, La Réunion  
        <br />
        Email : contact@hugodiving.com  
      </p>
      <p>Directeur de la publication : Hugo Fontaine</p>

      <h2>2. Hébergement du site</h2>
      <p>
        Le site est hébergé par :  
        <br />
        <strong>Vercel Inc.</strong>  
        440 N Barranca Ave #4133  
        Covina, CA 91723  
        États‑Unis  
        <br />
        Site : https://vercel.com
      </p>

      <h2>3. Propriété intellectuelle</h2>
      <p>
        L’ensemble du contenu du site (textes, images, logos, vidéos, éléments
        graphiques, structure, code) est protégé par le droit d’auteur et reste
        la propriété exclusive de Hug’O₂ Diving, sauf mention contraire.
      </p>
      <p>
        Toute reproduction, modification, distribution ou exploitation, totale
        ou partielle, sans autorisation préalable est strictement interdite.
      </p>

      <h2>4. Responsabilité</h2>
      <p>
        Hug’O₂ Diving s’efforce de fournir des informations exactes et à jour.
        Toutefois, aucune garantie n’est apportée quant à l’exactitude,
        l’exhaustivité ou l’actualité des contenus.
      </p>
      <p>
        L’éditeur ne pourra être tenu responsable en cas d’erreur, d’omission,
        d’indisponibilité du site ou de dommages résultant de l’utilisation du
        site.
      </p>

      <h2>5. Données personnelles</h2>
      <p>
        Les données collectées via le formulaire de contact sont utilisées
        uniquement pour répondre aux demandes des utilisateurs.  
        Aucune donnée n’est vendue ou transmise à des tiers.
      </p>
      <p>
        Pour plus d’informations, consultez notre{" "}
        <a href="/politique-confidentialite">
          Politique de confidentialité (RGPD)
        </a>.
      </p>

      <h2>6. Liens externes</h2>
      <p>
        Le site peut contenir des liens vers des sites tiers. Hug’O₂ Diving
        n’exerce aucun contrôle sur ces sites et décline toute responsabilité
        quant à leur contenu.
      </p>

      <h2>7. Contact</h2>
      <p>
        Pour toute question concernant ces mentions légales, vous pouvez nous
        contacter à :  
        <br />
        <strong>contact@hugodiving.com</strong>
      </p>
    </div>
  );
}