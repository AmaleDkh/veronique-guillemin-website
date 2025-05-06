// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

// Style
import "./ImageAndTextSection.scss";

interface ImageAndTextSectionProps {
  sectionTitle: string;
  titleColorVersion?: "white";
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageOnLeft?: boolean;
  backgroundColor?: "dark-blue" | "ochre" | "dark" | "blue";
  button?: boolean;
  buttonLink?: string;
  buttonLabel?: string;
}

function ImageAndTextSection({
  sectionTitle,
  titleColorVersion,
  description,
  imageSrc,
  imageAlt,
  imageOnLeft = false,
  backgroundColor,
  button,
  buttonLink,
  buttonLabel = "En savoir plus sur moi",
}: ImageAndTextSectionProps) {
  return (
    <section
      className={`image-and-text-section image-and-text-section--${backgroundColor}`}
    >
      <div className="image-and-text-section__inner">
        <div
          className={`image-and-text-section__grid ${
            imageOnLeft ? "image-and-text-section__grid--image-left" : ""
          }`}
        >
          <div className="image-and-text-section__content">
            <SectionTitle
              title={sectionTitle}
              colorVersion={titleColorVersion}
            />
            <p
              className="image-and-text-section__description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            {button && (
              <div className="image-and-text-section__cta">
                <SecondaryButton
                  link={buttonLink || ""}
                  label={buttonLabel}
                  centerVersion=""
                />
              </div>
            )}
          </div>

          <div className="image-and-text-section__image-container">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="image-and-text-section__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageAndTextSection;
