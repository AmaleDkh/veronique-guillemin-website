// Component
import Button from "../Button/Button";

// Style
import "./TherapeuticApproachesDetail.scss";

function TherapeuticApproachesDetail() {
  const approaches = [
    {
      title: "Thérapie psychocorporelle",
      titleClass: "blue",
      whyTitle: "Pourquoi cette approche",
      whyDescription:
        "Vous pourrez retrouver un sentiment d'unité entre corps et esprit, et avancez plus sereinement dans votre vie émotionnelle.",
      whyDetails:
        "Cette approche engage le corps dans le processus thérapeutique à travers des exercices de respiration, de relaxation ou de mouvement, pour libérer les tensions inscrites dans la mémoire corporelle.",
      benefitsTitle: "Les bienfaits",
      benefits: [
        "Apaisement des blocages émotionnels profonds",
        "Meilleure conscience de soi et de ses ressentis",
        "Ancrage corporel et équilibre global",
      ],
    },
    {
      title: "EFT (Emotional Freedom Techniques)",
      titleClass: "ochre",
      whyTitle: "Pourquoi cette approche",
      whyDescription:
        "Vous pourrez parvenir à apaiser rapidement vos émotions, reprendre confiance et vous sentir plus libre face à ce qui vous pesait.",
      whyDetails:
        "Grâce à des stimulations douces sur des points d'acupuncture associés à des mots ciblés, l'EFT aide à désactiver les réactions émotionnelles négatives.",
      benefitsTitle: "Les bienfaits",
      benefits: [
        "Soulagement du stress et de l'anxiété",
        "Libération de schémas émotionnels répétitifs",
        "Reconnexion à ses ressources",
      ],
    },
    {
      title: "Reiki",
      titleClass: "blue",
      whyTitle: "Pourquoi cette approche",
      whyDescription:
        "Vous pourrez retrouver calme intérieur, vitalité et mieux-être global, comme si votre énergie circulait à nouveau librement.",
      whyDetails:
        "Par imposition des mains, l'énergie vitale est canalisée pour harmoniser les centres énergétiques et soutenir vos capacités d'auto-guérison.",
      benefitsTitle: "Les bienfaits",
      benefits: [
        "Détente profonde du corps et de l'esprit",
        "Réduction du stress et des tensions",
        "Régulation énergétique durable",
      ],
    },
    {
      title: "Méditation",
      titleClass: "blue",
      whyTitle: "Pourquoi cette approche",
      whyDescription:
        "Vous pourrez vivre chaque moment avec plus de présence, de recul et de sérénité face aux hauts et bas du quotidien.",
      whyDetails:
        "Par des exercices guidés de pleine conscience, vous apprenez à observer pensées et émotions sans vous y identifier, en développant une attention stable et bienveillante.",
      benefitsTitle: "Les bienfaits",
      benefits: [
        "Clarté mentale et recentrage",
        "Meilleure gestion du stress et des ruminations",
        "Présence à soi et au monde",
      ],
    },
    {
      title: "Cohérence cardiaque",
      titleClass: "blue",
      whyTitle: "Pourquoi cette approche",
      whyDescription:
        "Votre respiration pourra devenir un véritable outil d'ancrage pour retrouver calme, stabilité et énergie.",
      whyDetails:
        "À travers des exercices de respiration simples, vous apprenez à synchroniser votre rythme cardiaque et apaiser le système nerveux.",
      benefitsTitle: "Les bienfaits",
      benefits: [
        "Apaisement des blocages émotionnels profonds",
        "Amélioration de la concentration et du sommeil",
        "Renforcement du système nerveux autonome",
      ],
    },
    {
      title: "Parcours personnalisé",
      titleClass: "blue",
      whyTitle: "Pourquoi cette approche",
      whyDescription:
        "Vous pourrez cultiver une relation plus douce et soutenante avec vous-même, même dans les moments de difficulté.",
      whyDetails: "Toutes les approches peuvent être personnalisés ou combinés",
      benefitsTitle: "Les bienfaits",
      benefits: ["Estime de soi renforcée", "Réduction de l’auto-jugement"],
    },
  ];

  const rows = [];
  for (let i = 0; i < approaches.length; i += 2) {
    rows.push(approaches.slice(i, i + 2));
  }

  return (
    <section className="therapeutic-approaches-detail padding-section">
      <div className="therapeutic-approaches-detail__content">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="therapeutic-approaches-detail__content__row"
          >
            {row.map((approach, index) => (
              <div
                key={index}
                className="therapeutic-approaches-detail__content__row__card"
              >
                <h3
                  className={`therapeutic-approaches-detail__content__row__card__title therapeutic-approaches-detail__content__row__card__title--${approach.titleClass}`}
                >
                  {approach.title}
                </h3>
                <div className="therapeutic-approaches-detail__content__row__card__details">
                  <div className="therapeutic-approaches-detail__content__row__card__details__section">
                    <span className="therapeutic-approaches-detail__content__row__card__details__section__title">
                      {approach.whyTitle}
                    </span>
                    <span className="therapeutic-approaches-detail__content__row__card__details__section__highlight">
                      {approach.whyDescription}
                    </span>
                    <span className="therapeutic-approaches-detail__content__row__card__details__section__text">
                      {approach.whyDetails}
                    </span>
                  </div>
                  <div className="therapeutic-approaches-detail__content__row__card__details__section">
                    <span className="therapeutic-approaches-detail__content__row__card__details__section__title">
                      {approach.benefitsTitle}
                    </span>
                    {approach.benefits.map((benefit, benefitIndex) => (
                      <span
                        key={benefitIndex}
                        className="therapeutic-approaches-detail__content__row__card__details__section__highlight"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* <Button text="Prendre rendez-vous" link="/contact" /> */}
    </section>
  );
}

export default TherapeuticApproachesDetail;
