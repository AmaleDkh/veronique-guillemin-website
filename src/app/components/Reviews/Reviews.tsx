// Next element
import Image from "next/image";

// Style
import "./Reviews.scss";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Reviews() {
  return (
    <section className="reviews-section">
      <FontAwesomeIcon
        icon={faAngleLeft}
        className="reviews-section__fa-angle-left"
      />
      <div className="reviews-section__content">
        <Image src="" alt="" className="reviews-section__content__photo" />
        <div className="reviews-section__content__texts">
          <p className="reviews-section__content__texts__name">Lorem ipsum</p>
          <div className="reviews-section__content__texts__review">
            <p className="reviews-section__content__texts__review__sentence">
              <span className="reviews-section__content__texts__review__sentence__right-quotation-mark">
                “
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              condimentum nisi metus, ut mattis ante ultrices at. Ut mattis,
              erat.
              <span className="reviews-section__content__texts__review__sentence__left-quotation-mark">
                ”
              </span>
            </p>
          </div>
        </div>
      </div>

      <FontAwesomeIcon
        icon={faAngleRight}
        className="reviews-section__fa-angle-right"
      />
    </section>
  );
}

export default Reviews;
