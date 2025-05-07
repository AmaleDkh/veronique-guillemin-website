// import { ArrowRight } from "lucide-react";

// Style
import "./TherapeuticApproaches.scss";

// Components
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import SectionTitle from "../SectionTitle/SectionTitle";

interface Approach {
  title: string;
  description: string;
  benefits: string[];
  image: string;
  detailsLink: string;
}

function TherapeuticApproaches() {
  const approaches: Approach[] = [
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum.",
      benefits: [
        "Aliquam tincidunt mauris eu risus",
        "Vestibulum auctor dapibus neque",
        "Curabitur blandit tempus porttitor",
      ],
      image: "",
      detailsLink: "/approches/lorem-ipsum-dolor",
    },
    {
      title: "Lorem ipsum",
      description:
        "Suspendisse potenti. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
      benefits: [
        "Cras justo odio",
        "Dapibus ac facilisis in",
        "Vestibulum id ligula porta",
      ],
      image: "",
      detailsLink: "/approches/sit-amet-consectetur",
    },
    {
      title: "Lorem ipsum",
      description:
        "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
      benefits: [
        "Maecenas faucibus mollis interdum",
        "Morbi leo risus",
        "Etiam porta sem malesuada",
      ],
      image: "",
      detailsLink: "/approches/adipiscing-elit-viverra",
    },
    {
      title: "Lorem ipsum",
      description:
        "Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      benefits: [
        "Pellentesque ornare sem lacinia",
        "Aenean eu leo quam",
        "Donec ullamcorper nulla non",
      ],
      image: "",
      detailsLink: "/approches/vestibulum-mollis",
    },
    {
      title: "Lorem ipsum",
      description:
        "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis.",
      benefits: [
        "Vivamus sagittis lacus vel",
        "Fermentum dapibus",
        "Integer posuere erat a ante",
      ],
      image: "",
      detailsLink: "/approches/fusce-dapibus-tellus",
    },
    {
      title: "Lorem ipsum",
      description:
        "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.",
      benefits: [
        "Curabitur blandit tempus porttitor",
        "Sed posuere consectetur est",
        "Nulla vitae elit libero",
      ],
      image: "",
      detailsLink: "/approches/aenean-euismod-ligula",
    },
    {
      title: "Lorem ipsum",
      description:
        "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet.",
      benefits: [
        "Maecenas sed diam eget risus",
        "Etiam porta sem malesuada",
        "Donec id elit non mi",
      ],
      image: "",
      detailsLink: "/approches/morbi-leo-risus",
    },
  ];

  return (
    <section className="approaches">
      <div className="approaches__container">
        <div className="approaches__intro">
          <SectionTitle title="Pourquoi faire une thérapie ?" />
          <p className="approaches__intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi vel consectetur interdum.
          </p>
        </div>

        <div className="approaches__grid">
          {approaches.map((approach, index) => (
            <div key={index} className="approaches__card">
              <div className="approaches__image-container">
                <img
                  src={approach.image}
                  alt={approach.title}
                  className="approaches__image"
                />
              </div>
              <div className="approaches__content">
                <h2 className="approaches__card-title">{approach.title}</h2>
                <p className="approaches__description">
                  {approach.description}
                </p>
                <div className="approaches__benefits">
                  <h3>Bienfaits</h3>
                  <ul>
                    {approach.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <SecondaryButton
                  link=""
                  label="En savoir plus"
                  centerVersion=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TherapeuticApproaches;
