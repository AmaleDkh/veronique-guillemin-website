// Next elements
import Image from "next/image";
import { StaticImageData } from "next/image";

// Component
import AppointmentButton from "../AppointmentButton/AppointmentButton";

// Style
import "./PresentationSection.scss";

interface PresentationSectionProps {
  imageSrc: string | StaticImageData;
  imageAlt: string;
  title: string;
  paragraph: string;
}

function PresentationSection({
  imageSrc,
  imageAlt,
  title,
  paragraph,
}: PresentationSectionProps) {
  return (
    <section className="presentation-section">
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="presentation-section__image"
      />
      <div className="presentation-section__texts">
        <h2 className="presentation-section__texts__title">{title}</h2>
        <p>{paragraph}</p>
        <AppointmentButton secondClassName="appointment-button__center" />
      </div>
    </section>
  );
}

export default PresentationSection;
