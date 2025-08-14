// Component
// import Button from "../Button/Button";

// Style
import "./Methodology.scss";

function Methodology() {
  const steps = [
    {
      number: "1",
      title: "Accueillir",
      description:
        "Créer un espace sécurisant pour explorer vos schémas et blocages",
    },
    {
      number: "2",
      title: "Libérer",
      description:
        "Dénouer tensions et émotions bloquées par les techniques psychocorporelles et énergétiques",
    },
    {
      number: "3",
      title: "Autonomiser",
      description:
        "Vous transmettre les clés pour maintenir votre liberté d'être",
    },
  ];

  return (
    <section className="methodology only-top-margin-section">
      <h2 className="methodology__title">Une démarche unique en 3 étapes</h2>
      <div className="methodology__steps">
        {steps.map((step, index) => (
          <div key={index} className="methodology__steps__item">
            <span
              className={`methodology__steps__item__number methodology__steps__item__number--${step.number}`}
            >
              {step.number}
            </span>
            <div className="methodology__steps__item__content">
              <h3 className="methodology__steps__item__content__title">
                {step.title}
              </h3>
              <span className="methodology__steps__item__content__description">
                {step.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Methodology;
