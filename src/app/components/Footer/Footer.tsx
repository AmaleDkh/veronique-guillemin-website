// React elements
// import { Mail, Phone, MapPin } from "lucide-react";

// Next element
import Link from "next/link";

// Style
import "./Footer.scss";

function Footer() {
  const footerData = {
    title: {
      name: "Véronique Guillemin",
      profession: "Relaxologue-Psychopraticienne",
    },
    contact: {
      title: "Coordonnées",
      phone: "XX XX XX XX XX",
      email: "contact@example.com",
    },
    siteMap: {
      title: "Plan du site",
      items: [
        { label: "Approches thérapeutiques", href: "/therapeutic-approaches" },
        { label: "À propos", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    copyright: "© 2025 | ALL RIGHTS RESERVED",
  };

  return (
    <footer className="footer-section">
      <div className="footer-section__content">
        <div className="footer-section__content__section">
          <Link
            href="/"
            className="footer-section__content__section__title-section"
          >
            <h3 className="footer-section__content__section__title-section__name">
              {footerData.title.name}
            </h3>
            <p className="footer-section__content__section__title-section__profession">
              {footerData.title.profession}
            </p>
          </Link>
        </div>

        <div className="footer-section__content__contact-section">
          <h3 className="footer-section__content__contact-section__title">
            {footerData.contact.title}
          </h3>
          <div className="footer-section__content__contact-section__info">
            <p className="footer-section__content__contact-section__info__item">
              {footerData.contact.phone}
            </p>
            <p className="footer-section__content__contact-section__info__item">
              {footerData.contact.email}
            </p>
          </div>
        </div>

        <div className="footer-section__content__sitemap-section">
          <h3 className="footer-section__content__sitemap-section__title">
            {footerData.siteMap.title}
          </h3>

          <div className="footer-section__content__sitemap-section__links">
            {footerData.siteMap.items.map((item, index) => (
              <a
                key={`site-link-${index}`}
                href={item.href}
                className="footer-section__content__sitemap-section__links__link"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-section__separator" />

      <p className="footer-section__copyright">{footerData.copyright}</p>
    </footer>
  );
}

export default Footer;
