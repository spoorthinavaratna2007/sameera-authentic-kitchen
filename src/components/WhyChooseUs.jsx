import React from 'react';
import { UtensilsCrossed, Sparkles, HeartHandshake, Utensils } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Traditional Taste",
      desc: "Enjoy authentic flavours inspired by traditional homemade recipes.",
      icon: <UtensilsCrossed size={32} />
    },
    {
      title: "Quality Ingredients",
      desc: "Carefully prepared using selected ingredients.",
      icon: <Sparkles size={32} />
    },
    {
      title: "Homemade Goodness",
      desc: "Every product reflects the care and warmth of homemade food.",
      icon: <HeartHandshake size={32} />
    },
    {
      title: "Perfect for Everyday Meals",
      desc: "Add delicious traditional flavours to everyday meals and special occasions.",
      icon: <Utensils size={32} />
    }
  ];

  return (
    <section className="why-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Promise</span>
          <h2 className="section-title">Why Choose Sameera's Authentic Kitchen?</h2>
          <p className="section-subtitle">
            Crafted with uncompromising devotion to age-old South Indian culinary heritage, pure methods and home-style warmth.
          </p>
        </div>

        <div className="why-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="why-card">
              <div className="why-icon-wrap">
                {feature.icon}
              </div>
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
