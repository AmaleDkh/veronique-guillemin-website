// Next element
import Image from "next/image";

// Style
import "./CallToAction.scss";

// Component
import Button from "../Button/Button";

function CallToAction() {
  return (
    <section className="about-me-section margin-section">
      <div className="about-me-section__content">
        <div className="about-me-section__content__text-section">
          <h2 className="about-me-section__content__text-section__title">
            Lorem ipsum
          </h2>

          <p className="about-me-section__content__text-section__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        <Button text="Prendre rendez-vous" link="/contact" />
      </div>

      <Image
        className="about-me-section__content__photo"
        alt="Portrait professionnel"
        src="/image---2025-03-10t100146-793-1.png"
        width={600}
        height={800}
      />
      {/* 
      <div className="about-me-section__image-section">
        <img
          className="about-me-section__image-section__image"
          alt="Profile photograph"
          src=""
        />
      </div> */}
    </section>
  );
}

export default CallToAction;
