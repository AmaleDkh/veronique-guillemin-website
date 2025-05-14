// React elements
import { Mail, Phone, MapPin } from "lucide-react";

// Style
import "./Footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Véronique Guillemin</h3>
            <p className="footer__subtitle">Relaxologue-Psychopraticienne</p>
            <div className="footer__contact-info">
              <div className="footer__contact-item">
                <Phone size={18} />
                <a href="tel:XXXXXXXXXX" className="footer__link">
                  XX XX XX XX XX
                </a>
              </div>
              <div className="footer__contact-item">
                <Mail size={18} />
                <a href="mailto:contact@example.com" className="footer__link">
                  contact@example.com
                </a>
              </div>
              <div className="footer__contact-item">
                <MapPin size={18} />
                <p>Lorem ipsum</p>
              </div>
            </div>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Horaires</h3>
            <ul className="footer__hours">
              <li>Lorem ipsum</li>
              <li>Lorem ipsumh</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Navigation</h3>
            <nav className="footer__nav">
              <a href="/therapeutic-approaches" className="footer__link">
                Approches thérapeutiques
              </a>
              <a href="/practical-information" className="footer__link">
                Informations pratiques
              </a>
              <a href="/testimonials" className="footer__link">
                Témoignages
              </a>
              <a href="/about" className="footer__link">
                À propos
              </a>
              <a href="/contact" className="footer__link">
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Véronique Guillemin - Tous droits réservés
          </p>
          {/* <div className="footer__legal">
            <a href="/mentions-legales" className="footer__legal-link">
              Mentions légales
            </a>
            <a href="/confidentialite" className="footer__legal-link">
              Politique de confidentialité
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
