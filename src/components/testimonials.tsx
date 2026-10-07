import { useEffect, useState } from "react";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Proven Recruitment Experience ",
      text: " I have hands-on experience managing recruitment across multiple locations and managing high-volume hiring requirements.",
    },
    {
      name: "Quality-Focused Shortlisting",
      text: "Candidates are assessed against agreed requirements before being shortlisted, helping clients focus on suitable applicants",
    },
    {
      name: "Flexible Recruitment Support",
      text: "Support can be tailored to your needs, from a single vacancy to multiple positions, high-volume hiring or specific recruitment stages.",
    },
    {
      name: "Direct & Personalised Service",
      text: "As an independent recruitment consultant, you work directly with me throughout the assignment, with clear communication and support tailored to your recruitment needs.",
    },
    {
      name: "Employer-Focused Approach",
      text: " I take time to understand your business, the role, key requirements and ideal candidate profile before commencing the recruitment search. ",
    },
    {
      name: "Time-Saving Approach",
      text: "I help reduce the time businesses spend sourcing, reviewing and screening applications by identifying candidates who are aligned with the requirements of the role ",
    },
  ];

  // Automatically change testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previousIndex) => {
        if (previousIndex === testimonials.length - 1) {
          return 0;
        }

        return previousIndex + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);


  return (
    <section className="testimonials" id="news">
      {/* Heading */}
      <div className="testimonials-info">
        <h2>Why Work With Me </h2>

      
      </div>

      {/* Carousel */}
      <div className="carousel">
        {testimonials.map((testimonial, index) => {
          let cardClass = "";

          if (index === currentIndex) {
            cardClass = "active";
          } else if (
            index ===
            (currentIndex - 1 + testimonials.length) % testimonials.length
          ) {
            cardClass = "left";
          } else if (index === (currentIndex + 1) % testimonials.length) {
            cardClass = "right";
          }

          return (
            <div
              className={`testimonial-card ${cardClass}`}
              key={testimonial.name}
            >
 
              <p>{testimonial.name}</p>

              <hr />

              <h3>{testimonial.text}</h3>

            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;