import React from 'react';

function Testimonials() {
  const testimonials = [
    { name: "John Doe", review: "eTutor is amazing! My grades have improved significantly." },
    { name: "Jane Smith", review: "The tutors are very helpful and the lessons are very clear!" },
    // Add more testimonials here
  ];

  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.review}"</p>
            <p><strong>- {testimonial.name}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
