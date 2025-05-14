// import { ArrowRight } from "lucide-react";

// Style
import "./ApproachesSummary.scss";

// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

function ApproachesSummary() {
  const approaches = [
    {
      title: "Thérapie Psychocorporelle",
      description: "Une approche globale unissant corps et esprit",
      image:
        "https://images.pexels.com/photos/3759658/pexels-photo-3759658.jpeg",
    },
    {
      title: "Relaxologie",
      description: "Techniques de relaxation et gestion du stress",
      image:
        "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
    },
    {
      title: "Cohérence Cardiaque",
      description: "Harmonisation du rythme cardiaque et respiratoire",
      image:
        "https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg",
    },
  ];

  return (
    <section className="approaches-summary">
      <div className="approaches-summary__container">
        <SectionTitle
          title="Les approches thérapeutiques"
          textAlignVersion="center"
        />
        <div className="approaches-summary__grid">
          {approaches.map((approach, index) => (
            <div key={index} className="approaches-summary__card">
              <div className="approaches-summary__image-wrapper">
                <img
                  src={approach.image}
                  alt={approach.title}
                  className="approaches-summary__image"
                />
              </div>
              <h3 className="approaches-summary__card-title">
                {approach.title}
              </h3>
              <p className="approaches-summary__description">
                {approach.description}
              </p>
            </div>
          ))}
        </div>

        <SecondaryButton
          link="/therapeutic-approaches"
          label="Découvrir les approches"
          centerVersion="secondary-button--center-version"
        />
      </div>
    </section>
  );
}

export default ApproachesSummary;
