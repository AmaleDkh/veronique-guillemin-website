// React elements
import { Heart, Brain, Smile } from "lucide-react";

// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

// Style
import "./Benefits.scss";

function Benefits() {
  const benefits = [
    {
      icon: <Heart className="benefits__icon" />,
      title: "Bien-être émotionnel",
      description: "Retrouvez équilibre et sérénité dans votre vie quotidienne",
    },
    {
      icon: <Brain className="benefits__icon" />,
      title: "Développement personnel",
      description: "Découvrez vos ressources et renforcez votre potentiel",
    },
    {
      icon: <Smile className="benefits__icon" />,
      title: "Harmonie corps-esprit",
      description:
        "Alignez vos dimensions physique et mentale pour un mieux-être global",
    },
  ];

  return (
    <section className="benefits">
      <div className="benefits__container">
        <SectionTitle
          title="Les bienfaits de la thérapie"
          textAlignVersion="center"
        />

        <div className="benefits__grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefits__card">
              <div className="benefits__icon-wrapper">{benefit.icon}</div>
              <h3 className="benefits__card-title">{benefit.title}</h3>
              <p className="benefits__description">{benefit.description}</p>
            </div>
          ))}
        </div>

        <SecondaryButton
          text="Découvrir les approches"
          link="/therapeutic-approaches"
        />
      </div>
    </section>
  );
}

export default Benefits;
