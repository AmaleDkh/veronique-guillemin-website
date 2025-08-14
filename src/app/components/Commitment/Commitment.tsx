// Style
import "./Commitment.scss";

function Commitment() {
  const commitments = [
    {
      title: "Un cadre légal et professionnel",
      description:
        "Je suis déclarée en tant que praticienne et assurée en responsabilité civile professionnelle.",
    },
    {
      title: "Un accompagnement éthique et responsable",
      description:
        "Mon rôle est de favoriser l'autonomie, le mieux-être et la sécurité de chacun. Je m'interdis tout abus, toute violence ou toute forme d'exploitation.",
    },
    {
      title: "Une pratique encadrée et supervisée",
      description:
        "Je bénéficie d'une supervision régulière pour garantir la qualité de mon accompagnement, et je suis transparente sur ma formation, mes méthodes et mon champ de compétences.",
    },
    {
      title: "Une relation claire et confidentielle",
      description:
        "Chaque accompagnement repose sur un cadre défini ensemble : objectifs, durée, modalités. Je garantis la confidentialité des échanges, dans le respect du secret professionnel et des lois en vigueur.",
    },
  ];

  return (
    <section className="commitment padding-section">
      <div className="commitment__container">
        <div className="commitment__header">
          <div className="commitment__header__content">
            <h2 className="commitment__header__content__title">
              Mon engagement déontologique
            </h2>
            <p className="commitment__header__content__description">
              Je m&apos;engage à exercer dans le respect d&apos;un cadre éthique
              clair, fondé sur la bienveillance, la responsabilité et la
              confidentialité. Mon accompagnement repose sur les principes
              suivants :
            </p>
          </div>
          {/* <div className="commitment__header__decoration"></div> */}
        </div>

        <div className="commitment__grid">
          <div className="commitment__grid__column">
            {commitments.slice(0, 2).map((commitment, index) => (
              <div key={index} className="commitment__grid__column__item">
                <span className="commitment__grid__column__item__title">
                  {commitment.title}
                </span>
                <p className="commitment__grid__column__item__description">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
          <div className="commitment__grid__column">
            {commitments.slice(2, 4).map((commitment, index) => (
              <div key={index + 2} className="commitment__grid__column__item">
                <h3 className="commitment__grid__column__item__title">
                  {commitment.title}
                </h3>
                <p className="commitment__grid__column__item__description">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Commitment;
