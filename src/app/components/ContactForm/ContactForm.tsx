// React & Next elements
import { useState } from "react";
import Image from "next/image";

// Component
import SecondaryButton from "../SecondaryButton/SecondaryButton";

// Style
import "./ContactForm.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="contact-form">
      <div className="contact-form__container">
        <div className="contact-form__content">
          <form className="contact-form__form" onSubmit={handleSubmit}>
            <div className="contact-form__form__fields">
              <div className="contact-form__form__fields__row">
                <div className="contact-form__form__fields__row__group">
                  <label className="contact-form__form__fields__row__group__label">
                    Prénom
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="contact-form__form__fields__row__group__input"
                    required
                  />
                </div>
                <div className="contact-form__form__fields__row__group">
                  <label className="contact-form__form__fields__row__group__label">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="contact-form__form__fields__row__group__input contact-form__form__fields__row__group__input--small"
                    required
                  />
                </div>
              </div>
              <div className="contact-form__form__fields__group">
                <label className="contact-form__form__fields__group__label">
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="contact-form__form__fields__group__input"
                  required
                />
              </div>
              <div className="contact-form__form__fields__group">
                <label className="contact-form__form__fields__group__label">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="contact-form__form__fields__group__textarea"
                  rows={6}
                  required
                />
              </div>
            </div>

            <div className="contact-form__form__submit">
              <SecondaryButton text="Envoyer mon message" link="" />
              {/* <button
                type="submit"
                className="contact-form__form__submit__button"
              >
                <span className="contact-form__form__submit__button__text">
                  Envoyer mon message
                </span>
              </button> */}
            </div>
          </form>
        </div>
        {/* <div className="contact-form__decoration"></div> */}
        <Image
          className="contact-form__photo"
          alt="Portrait professionnel"
          src="/image---2025-03-10t100146-793-1.png"
          width={600}
          height={800}
        />
      </div>
    </section>
  );
}

export default ContactForm;
