// import { ArrowRight } from "lucide-react";

// Style
import "./TherapeuticApproaches.scss";

// Components
import SecondaryButton from "../SecondaryButton/SecondaryButton";
// import SectionTitle from "../SectionTitle/SectionTitle";

function TherapeuticApproaches() {
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
      <h2 className="therapeutic-approaches__content__title">
        Les approches thérapeuthiques
      </h2>
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

                  <SecondaryButton text="Découvrir" link="" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TherapeuticApproaches;

// function TherapeuticApproaches() {
//   // Define the therapeutic approaches data for mapping
//   const therapeuticApproaches = [
//     {
//       title: "Thérapie psychocorporelle",
//       description:
//         "La thérapie psychocorporelle utilise le lien entre corps et esprit pour libérer les tensions émotionnelles et retrouver l'équilibre intérieur.",
//     },
//     {
//       title: "EFT (Emotional Freedom Techniques)",
//       description:
//         "L'EFT est une méthode de tapping sur des points précis d'acupuncture qui aide à libérer rapidement le stress, les émotions négatives et les blocages.",
//     },
//     {
//       title: "Reiki",
//       description:
//         "Le Reiki est une technique énergétique de soin par imposition des mains visant à harmoniser l'énergie vitale et favoriser la détente profonde.",
//     },
//     {
//       title: "Méditation pleine conscience",
//       description:
//         "La méditation de pleine conscience consiste à porter une attention bienveillante et non jugeante à l'instant présent, favorisant calme et clarté mentale.",
//     },
//     {
//       title: "Cohérence cardiaque",
//       description:
//         "La cohérence cardiaque est une technique de respiration contrôlée qui synchronise le rythme cardiaque pour réduire le stress et améliorer le bien-être émotionnel.",
//     },
//     {
//       title: "Parcours personnalisé",
//       description:
//         "Toutes les approches peuvent être personnalisés ou combinés.",
//     },
//   ];

//   return (
//     <section className="therapeutic-approaches padding-section">
//       <div className="therapeutic-approaches__content">
//         <h2 className="therapeutic-approaches__content__title">
//           Les approches thérapeuthiques
//         </h2>

//         <div className="therapeutic-approaches__content__grid">
//           {therapeuticApproaches.slice(0, 3).map((approach, index) => (
//             <div
//               key={`approach-${index}`}
//               className="therapeutic-approaches__content__grid__card"
//             >
//               <div className="therapeutic-approaches__content__grid__card__content">
//                 <div className="therapeutic-approaches__content__grid__card__content__text-section">
//                   <h3 className="therapeutic-approaches__content__grid__card__content__text-section__title">
//                     {approach.title}
//                   </h3>
//                   <p className="therapeutic-approaches__content__grid__card__content__text-section__description">
//                     {approach.description}
//                   </p>
//                 </div>
//                 <SecondaryButton text="Découvrir" link="" />
//                 {/* <button className="therapeutic-approaches__content__grid__card__content__button">
//                   <span className="therapeutic-approaches__content__grid__card__content__button__text">
//                     Découvrir
//                   </span>
//                 </button> */}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="therapeutic-approaches__content__grid">
//           {therapeuticApproaches.slice(3, 6).map((approach, index) => (
//             <div
//               key={`approach-${index + 3}`}
//               className="therapeutic-approaches__content__grid__card"
//             >
//               <div className="therapeutic-approaches__content__grid__card__content">
//                 <div className="therapeutic-approaches__content__grid__card__content__text-section">
//                   <h3 className="therapeutic-approaches__content__grid__card__content__text-section__title">
//                     {approach.title}
//                   </h3>
//                   <p className="therapeutic-approaches__content__grid__card__content__text-section__description">
//                     {approach.description}
//                   </p>
//                 </div>
//                 <SecondaryButton text="Découvrir" link="" />
//                 {/* <button className="therapeutic-approaches__content__grid__card__content__button">
//                   <span className="therapeutic-approaches__content__grid__card__content__button__text">
//                     Découvrir
//                   </span>
//                 </button> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TherapeuticApproaches;

// interface Approach {
//   title: string;
//   description: string;
//   benefits: string[];
//   image: string;
//   detailsLink: string;
// }

// function TherapeuticApproaches() {
//   const approaches: Approach[] = [
//     {
//       title: "Lorem ipsum",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum.",
//       benefits: [
//         "Aliquam tincidunt mauris eu risus",
//         "Vestibulum auctor dapibus neque",
//         "Curabitur blandit tempus porttitor",
//       ],
//       image: "",
//       detailsLink: "/approches/lorem-ipsum-dolor",
//     },
//     {
//       title: "Lorem ipsum",
//       description:
//         "Suspendisse potenti. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
//       benefits: [
//         "Cras justo odio",
//         "Dapibus ac facilisis in",
//         "Vestibulum id ligula porta",
//       ],
//       image: "",
//       detailsLink: "/approches/sit-amet-consectetur",
//     },
//     {
//       title: "Lorem ipsum",
//       description:
//         "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
//       benefits: [
//         "Maecenas faucibus mollis interdum",
//         "Morbi leo risus",
//         "Etiam porta sem malesuada",
//       ],
//       image: "",
//       detailsLink: "/approches/adipiscing-elit-viverra",
//     },
//     {
//       title: "Lorem ipsum",
//       description:
//         "Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       benefits: [
//         "Pellentesque ornare sem lacinia",
//         "Aenean eu leo quam",
//         "Donec ullamcorper nulla non",
//       ],
//       image: "",
//       detailsLink: "/approches/vestibulum-mollis",
//     },
//     {
//       title: "Lorem ipsum",
//       description:
//         "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis.",
//       benefits: [
//         "Vivamus sagittis lacus vel",
//         "Fermentum dapibus",
//         "Integer posuere erat a ante",
//       ],
//       image: "",
//       detailsLink: "/approches/fusce-dapibus-tellus",
//     },
//     {
//       title: "Lorem ipsum",
//       description:
//         "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.",
//       benefits: [
//         "Curabitur blandit tempus porttitor",
//         "Sed posuere consectetur est",
//         "Nulla vitae elit libero",
//       ],
//       image: "",
//       detailsLink: "/approches/aenean-euismod-ligula",
//     },
//     {
//       title: "Lorem ipsum",
//       description:
//         "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet.",
//       benefits: [
//         "Maecenas sed diam eget risus",
//         "Etiam porta sem malesuada",
//         "Donec id elit non mi",
//       ],
//       image: "",
//       detailsLink: "/approches/morbi-leo-risus",
//     },
//   ];

//   return (
//     <section className="approaches">
//       <div className="approaches__container">
//         <div className="approaches__intro">
//           <SectionTitle title="Pourquoi faire une thérapie ?" />
//           <p className="approaches__intro-text">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Pellentesque euismod, nisi vel consectetur interdum.
//           </p>
//         </div>

//         <div className="approaches__grid">
//           {approaches.map((approach, index) => (
//             <div key={index} className="approaches__card">
//               <div className="approaches__image-container">
//                 <img
//                   src={approach.image}
//                   alt={approach.title}
//                   className="approaches__image"
//                 />
//               </div>
//               <div className="approaches__content">
//                 <h2 className="approaches__card-title">{approach.title}</h2>
//                 <p className="approaches__description">
//                   {approach.description}
//                 </p>
//                 <div className="approaches__benefits">
//                   <h3>Bienfaits</h3>
//                   <ul>
//                     {approach.benefits.map((benefit, idx) => (
//                       <li key={idx}>{benefit}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 <SecondaryButton
//                   link=""
//                   label="En savoir plus"
//                   centerVersion=""
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TherapeuticApproaches;
