// Next element
import Image from "next/image";

// Component
// import SecondaryButton from "../SecondaryButton/SecondaryButton";

// Style
import "./WhyMe.scss";

function WhyMe() {
  return (
    <section className="why-me only-top-margin-section">
      {/* <div className="why-me__image">
        <img
          src=""
          className="why-me__image__photo"
          alt="Véronique Guillemin"
        />
      </div> */}

      <Image
        className="why-me__photo"
        alt="Portrait professionnel"
        src=""
        width={600}
        height={800}
      />

      <div className="why-me__content">
        <h2 className="why-me__content__title">
          Véronique Guillemin, Relaxologue-Psychopraticienne
        </h2>
        <p className="why-me__content__description">
          Après <span className="bold-word">30 ans en entreprise</span>, j’ai
          découvert ma véritable vocation : <br />
          <span className="bold-word">accompagner l’humain</span>.
          <br />
          <br />
          Mon parcours personnel (psychanalyse, Gestalt, approches
          transpersonnelles) m’a appris que{" "}
          <span className="bold-word">
            les blessures, les doutes, les blocages ne sont pas des faiblesses
          </span>
          .
          <br />
          <br />
          Ce sont des portes d’entrée vers plus de liberté intérieure.
          <br />
          <br />
          <span className="bold-word">Ma conviction ?</span> "Rien ne nous est
          donné pour nous écraser" - Christiane Singer
          <br />
          <br />
          <span className="bold-word">Mais pour nous révéler.</span>
        </p>

        {/* <SecondaryButton text="En savoir plus" link="/about" /> */}
      </div>
    </section>
  );
}

export default WhyMe;
