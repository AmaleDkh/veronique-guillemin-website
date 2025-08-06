// Style
import "./FormationsSection.scss";

interface Formation {
  title: string;
  institution: string;
}

interface FormationsSectionProps {
  title: string;
  formations: Formation[];
}

function FormationsSection({ title, formations }: FormationsSectionProps) {
  const leftColumnFormations = formations.slice(
    0,
    Math.ceil(formations.length / 2)
  );
  const rightColumnFormations = formations.slice(
    Math.ceil(formations.length / 2)
  );

  return (
    <div className="formations-section only-bottom-margin-section">
      <div className="formations-section__header">
        {/* <div className="formations-section__header__decoration"></div> */}
        <h2 className="formations-section__header__title">{title}</h2>
      </div>
      <div className="formations-section__grid">
        <div className="formations-section__grid__column">
          {leftColumnFormations.map((formation, index) => (
            <div key={index} className="formations-section__grid__column__item">
              <h3 className="formations-section__grid__column__item__title">
                {formation.title}
              </h3>
              <p className="formations-section__grid__column__item__institution">
                {formation.institution}
              </p>
            </div>
          ))}
        </div>
        <div className="formations-section__grid__column">
          {rightColumnFormations.map((formation, index) => (
            <div key={index} className="formations-section__grid__column__item">
              <h3 className="formations-section__grid__column__item__title">
                {formation.title}
              </h3>
              <p className="formations-section__grid__column__item__institution">
                {formation.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormationsSection;
