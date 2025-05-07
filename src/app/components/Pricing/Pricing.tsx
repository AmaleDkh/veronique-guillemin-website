// Component
import SectionTitle from "../SectionTitle/SectionTitle";

// Style
import "./Pricing.scss";

function Pricing() {
  return (
    <section className="pricing">
      <SectionTitle title="Tarifs des séances" textAlignVersion="center" />
      <div className="pricing__grid">
        <div className="pricing__card">
          <h3>Séance individuelle</h3>
          <p className="pricing__amount">X €</p>
          <p className="pricing__duration">Durée : X heure</p>
        </div>
        <div className="pricing__card">
          <h3>Forfait X séances</h3>
          <p className="pricing__amount">X €</p>
          <p className="pricing__duration">Durée : X heure</p>
        </div>
        <div className="pricing__card">
          <h3>Première consultation</h3>
          <p className="pricing__amount">X €</p>
          <p className="pricing__duration">Durée : X heure</p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
