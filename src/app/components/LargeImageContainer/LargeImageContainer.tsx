// Next element
import Image from "next/image";

// Image
import Desert2 from "../../../../assets/images/Desert2.webp";

// Components
import Button from "../Button/Button";

// Style
import "./LargeImageContainer.scss";

function LargeImageContainer() {
  return (
    <section className="large-image-section">
      {/* <Image
        src={Desert2}
        alt="Un désert"
        className="large-image-section__image-container"
      /> */}
      <div className="large-image-section__text-block">
        <h1 className="large-image-section__text-block__title">
          Reconnectez-vous à vous-même
        </h1>
        <p className="large-image-section__text-block__sentence">
          Grâce à une approche thérapeutique bienveillante, retrouvez un
          équilibre émotionnel et mental.
        </p>
        <Button
          link=""
          text="Découvrir toutes les pratiques"
          secondClassName="button__margin-top"
        />
      </div>
    </section>
  );
}

export default LargeImageContainer;
