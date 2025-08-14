// Next element
import Image from "next/image";

// Style
import "./ConsultationSteps.scss";

function ConsultationSteps() {
  const steps = [
    {
      number: "Étape 1",
      title: "Nous faisons connaissance",
      description:
        "Le premier rendez-vous, au cabinet ou en distanciel, permet de poser votre demande, de faire le point sur ce qui vous amène, et se termine souvent par une courte relaxation.",
    },
    {
      number: "Étape 2",
      title: "Nous prenons le temps de choisir",
      description:
        "Après cette première séance, vous pourrez prendre un temps de réflexion pour sentir si je suis la bonne personne pour vous accompagner. Il est essentiel que vous vous sentiez à l'aise.",
    },
    {
      number: "Étape 3",
      title: "Nous trouvons votre rythme",
      description:
        "Si nous décidons d&apos;avancer ensemble, un rythme régulier est proposé : en général une fois par semaine au début, puis tous les 15 jours, selon vos besoins.",
    },
  ];

  return (
    <section className="consultation-steps margin-section">
      <div className="consultation-steps__container">
        <div className="consultation-steps__content">
          <Image
            className="consultation-steps__content__photo"
            alt="Portrait professionnel"
            src="/image---2025-03-10t100146-793-1.png"
            width={600}
            height={800}
          />
          {/* <div className="consultation-steps__image">
            <img
              src=""
              className="consultation-steps__image__photo"
              alt="Consultation"
            />
          </div> */}
          <div className="consultation-steps__info">
            <h2 className="consultation-steps__info__title">
              Les étapes d&apos;une consultation
            </h2>
            <div className="consultation-steps__info__steps">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="consultation-steps__info__steps__item"
                >
                  <span className="consultation-steps__info__steps__item__number">
                    {step.number}
                  </span>
                  <div className="consultation-steps__info__steps__item__content">
                    <h3 className="consultation-steps__info__steps__item__content__title">
                      {step.title}
                    </h3>
                    <p className="consultation-steps__info__steps__item__content__description">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultationSteps;
