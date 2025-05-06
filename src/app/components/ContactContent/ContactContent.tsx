// React & Next elements
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

// Style
import "./ContactContent.scss";

function Contact() {
  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__grid">
          <div className="contact__image-wrapper">
            <Image src="" alt="" className="contact__image" />
          </div>
          <div className="contact__content">
            <div className="contact__info">
              <div className="contact__card">
                <div className="contact__card-inner">
                  <Phone className="contact__icon" />
                  <h3>Téléphone</h3>
                  <a href="tel:XXXXXXXXXX" className="contact__link">
                    XX XX XX XX XX
                  </a>
                </div>
              </div>

              <div className="contact__card">
                <div className="contact__card-inner">
                  <Mail className="contact__icon" />
                  <h3>Email</h3>
                  <a
                    href="mailto:contact@example.com"
                    className="contact__link"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>

              <div className="contact__card">
                <div className="contact__card-inner">
                  <MapPin className="contact__icon" />
                  <h3>Adresse</h3>
                  <p>
                    Lorem ipsum
                    <br />
                    Lorem ipsum
                  </p>
                </div>
              </div>

              <div className="contact__card">
                <div className="contact__card-inner">
                  <Clock className="contact__icon" />
                  <h3>Horaires</h3>
                  <ul className="contact__hours">
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
