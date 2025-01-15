// Next element
import Image from "next/image";

// Image
import Desert from "../../../../assets/images/desert.png";

// Style
import "./LargeImageContainer.scss";

function LargeImageContainer() {
  return (
    <Image src={Desert} alt="Un désert" className="large-image-container" />
  );
}

export default LargeImageContainer;
