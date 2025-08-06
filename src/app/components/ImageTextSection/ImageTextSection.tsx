// Next element
import Image from "next/image";

// Style
import "./ImageTextSection.scss";

interface ImageTextSectionProps {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  imageSize?: "square" | "rectangle";
}

function ImageTextSection({
  title,
  text,
  imageSrc,
  imageAlt,
  reverse = false,
  imageSize = "square",
}: ImageTextSectionProps) {
  return (
    <div
      className={`image-text-section ${
        reverse ? "image-text-section--reverse" : ""
      } only-side-margin-section`}
    >
      <Image
        className="image-text-section__image"
        alt="Portrait professionnel"
        src="/image---2025-03-10t100146-793-1.png"
        width={600}
        height={800}
      />
      {/* <div className="image-text-section__image-container">
        <img
          src={imageSrc}
          className={`image-text-section__image image-text-section__image--${imageSize}`}
          alt={imageAlt}
        />
      </div> */}
      <div className="image-text-section__content">
        <h2 className="image-text-section__content__title">{title}</h2>
        <p className="image-text-section__content__text">{text}</p>
      </div>
    </div>
  );
}

export default ImageTextSection;
