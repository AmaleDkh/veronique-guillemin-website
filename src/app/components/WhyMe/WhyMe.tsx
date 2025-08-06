// Style
import "./WhyMe.scss";

function WhyMe() {
  return (
    <section className="why-me only-top-margin-section">
      <div className="why-me__image">
        <img
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X2sQiWzEvr/ur2ng46j_expires_30_days.png"
          className="why-me__image__photo"
          alt="Véronique Guillemin"
        />
      </div>

      <div className="why-me__content">
        <h2 className="why-me__content__title">
          Véronique Guillemin, Relaxologue-Psychopraticienne
        </h2>
        <span className="why-me__content__description">
          Après 30 ans d'expérience en entreprise, j'ai découvert ma véritable
          vocation : accompagner les autres vers la liberté intérieure.
          {"\n\n"}
          Mon expérience m'a révélé le potentiel immense de chaque être, souvent
          bridé par des croyances limitantes.
          {"\n\n"}
          Mon propre cheminement de résilience et mon exploration personnelle
          (psychanalyse, Gestalt, approches transpersonnelles) nourrissent
          aujourd'hui l'accompagnement que j'apporte à mes patients.
          {"\n\n"}
          Ma conviction ? "Rien ne nous est donné pour nous écraser" -
          Christiane Singer
        </span>
      </div>
    </section>
  );
}

export default WhyMe;
