// Next element
// import { StaticImageData } from "next/image";
import Image from "next/image";

// Component
import Button from "../Button/Button";
// import SecondaryButton from "../SecondaryButton/SecondaryButton";

// Style
import "./HeroBanner.scss";

function HeroBanner() {
  return (
    <section className="hero-section margin-section">
      <div className="hero-section__content">
        <div className="hero-section__content__text-section">
          <h1 className="hero-section__content__text-section__title">
            Reconnectez vous à vous-même
          </h1>

          <p className="hero-section__content__text-section__description">
            Grâce à une approche thérapeutique bienveillante, retrouvez un
            équilibre émotionnel et mental.
          </p>
        </div>

        <Button text="Prendre rendez-vous" link="/contact" />

        {/* <button className="hero-section__content__cta-button">
          <span className="hero-section__content__cta-button__text">
            Prendre rendez-vous
          </span>
        </button> */}
      </div>

      {/* <img
        className="hero-section__image-section__image"
        alt="Portrait professionnel"
        src="/image---2025-03-10t100146-793-1.png"
      /> */}

      <Image
        className="hero-section__image-section__image"
        alt="Portrait professionnel"
        src="/image---2025-03-10t100146-793-1.png"
        width={600}
        height={800}
      />

      {/* <div className="hero-section__image-section">
        <div className="hero-section__image-section__background" />
        <img
          className="hero-section__image-section__image"
          alt="Portrait professionnel"
          src="/image---2025-03-10t100146-793-1.png"
        />
      </div> */}
    </section>
  );
}

export default HeroBanner;

// interface HeroBannerProps {
//   backgroundImage: StaticImageData;
//   title: string;
//   description: string;
//   primaryButtonText?: string;
//   primaryButtonLink?: string;
//   secondaryButtonText?: string;
//   secondaryButtonLink?: string;
// }

// function HeroBanner({ backgroundImage, title, description }: HeroBannerProps) {
//   return (
//     <section
//       className="hero-banner__container"
//       style={{
//         backgroundImage: `url('${backgroundImage}')`,
//       }}
//     >
//       <div className="hero-banner__content">
//         <div className="hero-banner__text">
//           <h1 className="hero-banner__title">{title}</h1>
//           <p className="hero-banner__description">{description}</p>

//           <div className="hero-banner__buttons">
//             <Button
//               text="Prendre rendez-vous"
//               link=""
//               marginTopVersion=""
//               mobileVersion=""
//               centerVersion=""
//               colorVersion=""
//             />

//             <SecondaryButton
//               link="/therapeutic-approaches"
//               label="Découvrir les approches"
//               centerVersion=""
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroBanner;
