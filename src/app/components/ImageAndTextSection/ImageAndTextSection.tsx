// Next element
import Image from "next/image";

// Style
import "./ImageAndTextSection.scss";

interface ImageAndTextSectionProps {
  title: string;
  paragraph: string;
  image: string;
  marginVersion: string;
}

function ImageAndTextSection({
  title,
  paragraph,
  image,
  marginVersion,
}: ImageAndTextSectionProps) {
  return (
    <section className={`image-and-text-section ${marginVersion}`}>
      <div className="image-and-text-section__texts">
        <h2 className="image-and-text-section__texts__title">{title}</h2>
        <p>{paragraph}</p>
      </div>

      <Image
        src={image}
        alt={"Un désert"}
        className="image-and-text-section__image"
        width={440}
        height={600}
      />
    </section>
  );
}

export default ImageAndTextSection;
