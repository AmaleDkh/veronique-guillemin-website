// Style
import "./ThreeKeyFigures.scss";

function ThreeKeyFigures() {
  return (
    <section className="three-key-figures">
      <div className="three-key-figures__block">
        <span className="three-key-figures__block__number">+ 100</span>
        <p className="three-key-figures__block__text">personnes accompagnées</p>
      </div>

      <div className="three-key-figures__block">
        <span className="three-key-figures__block__number">+ 100</span>
        <p className="three-key-figures__block__text">années d'expérience</p>
      </div>

      <div className="three-key-figures__block">
        <span className="three-key-figures__block__number">+ 100</span>
        <p className="three-key-figures__block__text">note moyenne</p>
      </div>
    </section>
  );
}

export default ThreeKeyFigures;
