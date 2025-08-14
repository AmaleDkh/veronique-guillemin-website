// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";

// Style
import "./LastSectionWithButton.scss";

interface LastSectionWithButtonProps {
  title: string;
  description: string;
  backgroundImage?: string;
  isWhiteBackground?: boolean;
}

function LastSectionWithButton({
  title,
  description,
  backgroundImage,
  isWhiteBackground = false,
}: LastSectionWithButtonProps) {
  const containerClassName = `last-section-with-button__container ${
    isWhiteBackground
      ? "last-section-with-button__container--white"
      : backgroundImage
      ? "last-section-with-button__container--with-image"
      : ""
  }`;

  return (
    <section
      className={containerClassName}
      data-bg-image={backgroundImage ? backgroundImage : undefined}
    >
      <div className="last-section-with-button__content">
        <SectionTitle title={title} />
        <p className="last-section-with-button__description">{description}</p>

        <Button text="Prendre rendez-vous" link="/contact" />
      </div>
    </section>
  );
}

export default LastSectionWithButton;
