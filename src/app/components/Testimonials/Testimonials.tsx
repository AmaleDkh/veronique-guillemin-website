// Style
import "./Testimonials.scss";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      name: "Prénom",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      name: "Prénom",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      name: "Prénom",
    },
  ];

  return (
    <section className="testimonials only-side-margin-section">
      <h2 className="testimonials__title">Quelques avis</h2>
      <div className="testimonials__grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonials__grid__card">
            <span className="testimonials__grid__card__quote">
              &quot;{testimonial.quote}&quot;
            </span>
            <span className="testimonials__grid__card__name">
              {testimonial.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
