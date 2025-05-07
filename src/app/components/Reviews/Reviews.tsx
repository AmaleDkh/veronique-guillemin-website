// Component
import SectionTitle from "../SectionTitle/SectionTitle";

// Style
import "./Reviews.scss";

// interface Testimonial {
//   name: string;
//   content: string;
//   date: string;
// }

// interface TestimonialsProps {
//   testimonials: Testimonial[];
// }

function Reviews() {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <SectionTitle title="Lorem ipsum" textAlignVersion="center" />
        <div className="testimonials__grid">
          <div className="testimonials__card">
            <p className="testimonials__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              quis tortor ultricies, ultrices arcu at, placerat quam. Vivamus
              venenatis interdum interdum.{" "}
            </p>
            <div className="testimonials__footer">
              <p className="testimonials__name">Lorem ipsum</p>
              <p className="testimonials__date">Lorem ipsum</p>
            </div>
          </div>

          <div className="testimonials__card">
            <p className="testimonials__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              quis tortor ultricies, ultrices arcu at, placerat quam. Vivamus
              venenatis interdum interdum.{" "}
            </p>
            <div className="testimonials__footer">
              <p className="testimonials__name">Lorem ipsum</p>
              <p className="testimonials__date">Lorem ipsum</p>
            </div>
          </div>

          <div className="testimonials__card">
            <p className="testimonials__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              quis tortor ultricies, ultrices arcu at, placerat quam. Vivamus
              venenatis interdum interdum.{" "}
            </p>
            <div className="testimonials__footer">
              <p className="testimonials__name">Lorem ipsum</p>
              <p className="testimonials__date">Lorem ipsum</p>
            </div>
          </div>
        </div>

        {/* <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonials__card">
              <p className="testimonials__content">{testimonial.content}</p>
              <div className="testimonials__footer">
                <p className="testimonials__name">{testimonial.name}</p>
                <p className="testimonials__date">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default Reviews;
