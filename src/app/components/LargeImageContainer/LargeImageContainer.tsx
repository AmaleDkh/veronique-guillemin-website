// Next element
import Image from "next/image";

// Image
import Desert2 from "../../../../assets/images/Desert2.webp";

// Style
import "./LargeImageContainer.scss";

function LargeImageContainer() {
  return (
    <Image src={Desert2} alt="Un désert" className="large-image-container" />
  );
}

export default LargeImageContainer;
