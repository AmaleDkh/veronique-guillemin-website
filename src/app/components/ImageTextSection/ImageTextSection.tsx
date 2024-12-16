// Next element
import Image from "next/image";

// Image
import Desert from "../../../../assets/images/desert.png";

function ImageTextSection() {
  return (
    <section className="presentation-section">
      <div className="presentation-section__texts">
        <h2 className="presentation-section__texts__title">Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare
          lorem nisi, at volutpat ligula dictum ac. Pellentesque placerat, ante
          non dictum fringilla, mi velit scelerisque dui, sit amet cursus ligula
          eros a sem. Integer dignissim venenatis arcu, ut aliquam mauris
          tincidunt nec. Ut lacinia et purus nec venenatis. Ut sapien neque,
          bibendum et est non, interdum efficitur diam. Phasellus sed quam vitae
          ipsum scelerisque vulputate dictum et lorem. Integer vehicula nisi sit
          amet mauris egestas auctor. Vivamus sed lobortis erat. Aliquam erat
          volutpat.
        </p>
      </div>

      <Image src={Desert} alt="" className="presentation-section__image" />
    </section>
  );
}

export default ImageTextSection;
