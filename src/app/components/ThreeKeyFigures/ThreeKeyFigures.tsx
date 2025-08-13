// Style
import "./ThreeKeyFigures.scss";

function ThreeKeyFigures() {
  const processCards = [
    {
      value: "+ X",
      title: "Années d'éxpérience",
      description: "Dans l'accompagnement thérapeutique",
    },
    {
      value: "+ X",
      title: "Clients accompagnés",
      description: "Vers le bien-être complet",
    },
    {
      value: "8",
      title: "Approches thérapeutiques",
      description: "Pour un accompagnement sur-mesure",
    },
  ];

  return (
    <section className="three-key-figures only-bottom-margin-section">
      {processCards.map((card, index) => (
        <div key={`process-card-${index}`} className="three-key-figures__card">
          <div className="three-key-figures__card__content">
            <h3 className="three-key-figures__card__content__value">
              {card.value}
            </h3>
            <p className="three-key-figures__card__content__title">
              {card.title}
            </p>
            <p className="three-key-figures__card__content__description">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ThreeKeyFigures;

// function ThreeKeyFigures() {
//   const metrics = [
//     {
//       number: "+ X",
//       label: "Années d'expérience",
//       description: "Dans l'accompagnement thérapeutique",
//     },
//     {
//       number: "+ X",
//       label: "Clients accompagnés",
//       description: "Vers leur mieux-être",
//     },
//     {
//       number: "8",
//       label: "Approches thérapeutiques",
//       description: "Pour un accompagnement sur-mesure",
//     },
//   ];

//   return (
//     <section className="three-key-figures">
//       <div className="three-key-figures__container">
//         <div className="three-key-figures__grid">
//           {metrics.map((metric, index) => (
//             <div key={index} className="three-key-figures__item">
//               <span className="three-key-figures__number">{metric.number}</span>
//               <h3 className="three-key-figures__label">{metric.label}</h3>
//               <p className="three-key-figures__description">
//                 {metric.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ThreeKeyFigures;
