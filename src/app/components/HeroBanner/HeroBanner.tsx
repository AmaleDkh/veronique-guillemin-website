// Next element
import { StaticImageData } from "next/image";

// Components
import Button from "../Button/Button";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

// Style
import "./HeroBanner.scss";

interface HeroBannerProps {
  backgroundImage: StaticImageData;
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

function HeroBanner({ backgroundImage, title, description }: HeroBannerProps) {
  return (
    <section
      className="hero-banner__container"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="hero-banner__content">
        <div className="hero-banner__text">
          <h1 className="hero-banner__title">{title}</h1>
          <p className="hero-banner__description">{description}</p>

          <div className="hero-banner__buttons">
            <Button
              text="Prendre rendez-vous"
              link=""
              marginTopVersion=""
              mobileVersion=""
              centerVersion=""
              colorVersion=""
            />

            <SecondaryButton
              link="/therapeutic-approaches"
              label="Découvrir les approches"
              centerVersion=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
