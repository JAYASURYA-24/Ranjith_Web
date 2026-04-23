import React from 'react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Bengaluru',
    initials: 'RS',
    rating: 5,
    text: 'Absolutely fantastic service! The team arrived on time, and my car looks brand new. The foam wash quality is better than any car wash center I\'ve been to. Highly recommend ShineUp!',
  },
  {
    name: 'Priya Nair',
    location: 'Chennai',
    initials: 'PN',
    rating: 5,
    text: 'I\'ve been using ShineUp for 6 months now. The convenience of doorstep service is unmatched. They use eco-friendly products and the results are always impressive. Love it!',
  },
  {
    name: 'Arjun Patel',
    location: 'Hyderabad',
    initials: 'AP',
    rating: 5,
    text: 'Got my bike washed through ShineUp and I\'m impressed! They cleaned every detail perfectly — chain, alloys, engine area. The bike looks showroom fresh. Great value for money.',
  },

];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials" aria-label="Customer Testimonials">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Testimonials
          </span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our happy customers have to say about their ShineUp experience.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card animate-on-scroll" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="testimonial-quote">"</div>
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span className="star" key={i}>★</span>
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.initials}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
