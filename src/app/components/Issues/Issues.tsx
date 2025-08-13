// Style
import "./Issues.scss";

function Issues() {
  return (
    <section className="issues only-bottom-margin-section">
      <h2 className="issues__title">Ces freins qui vous empêchent d'avancer</h2>
      <p className="issues__paragraph">
        <span className="bold-word">
          Stress, anxiété, peurs envahissent votre quotidien
        </span>
        .
        <br />
        Le poids des émotions vous submerge.
        <br />
        <br />
        <span className="bold-word">
          Vous vous sentez perdu(e), tiraillé(e)
        </span>{" "}
        entre les attentes des autres et votre vraie nature.
        <br />
        <br />
        Votre corps réagit :{" "}
        <span className="bold-word">
          sommeil perturbé, tensions musculaires, fatigue persistante
        </span>
        .
      </p>
    </section>
  );
}

export default Issues;
