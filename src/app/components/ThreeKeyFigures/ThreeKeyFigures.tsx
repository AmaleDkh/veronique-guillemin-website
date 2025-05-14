// Style
import "./ThreeKeyFigures.scss";

function ThreeKeyFigures() {
  const metrics = [
    {
      number: "+ X",
      label: "Années d'expérience",
      description: "Dans l'accompagnement thérapeutique",
    },
    {
      number: "+ X",
      label: "Clients accompagnés",
      description: "Vers leur mieux-être",
    },
    {
      number: "8",
      label: "Approches thérapeutiques",
      description: "Pour un accompagnement sur-mesure",
    },
  ];

  return (
    <section className="three-key-figures">
      <div className="three-key-figures__container">
        <div className="three-key-figures__grid">
          {metrics.map((metric, index) => (
            <div key={index} className="three-key-figures__item">
              <span className="three-key-figures__number">{metric.number}</span>
              <h3 className="three-key-figures__label">{metric.label}</h3>
              <p className="three-key-figures__description">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ThreeKeyFigures;
