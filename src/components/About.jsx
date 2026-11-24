import React from 'react';
import { Award, Sparkles, Flame, Heart } from 'lucide-react';
import { IMAGES } from '../data/products';

export default function About() {
  const highlights = [
    {
      title: "Authentic Traditional Flavours",
      desc: "Inspired by age-old recipes passed down through generations.",
      icon: <Award size={22} />
    },
    {
      title: "Carefully Prepared",
      desc: "Small-batch preparation ensuring supreme quality and hygiene.",
      icon: <Sparkles size={22} />
    },
    {
      title: "Rich Taste & Aroma",
      desc: "Made with aromatic spices that create an unforgettable culinary experience.",
      icon: <Flame size={22} />
    },
    {
      title: "Homemade Goodness",
      desc: "Pure, wholesome ingredients with zero shortcuts, just like home.",
      icon: <Heart size={22} />
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Visual Column with Image 7 */}
          <div className="about-visual-col">
            <div className="about-img-frame">
              <img
                src={IMAGES.freshPicklePrep}
                alt="Freshly Prepared Homemade Mango Pickle - Sameera's Authentic Kitchen"
                className="about-main-img"
              />
            </div>
            <div className="about-experience-badge">
              <span>Pure Homemade Preparation</span>
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content-col">
            <span className="section-tag">About Sameera's</span>
            <h2 className="about-heading">A Little Taste of Home</h2>
            <p className="about-lead-text">
              Sameera's Authentic Kitchen brings you the traditional flavours of homemade Indian food. From flavourful pickles and dosa mixes to festive seasonal delicacies, every product reflects the richness of traditional recipes and the joy of homemade goodness.
            </p>

            {/* Four Highlights */}
            <div className="highlights-grid">
              {highlights.map((item, idx) => (
                <div key={idx} className="highlight-card">
                  <div className="highlight-icon">
                    {item.icon}
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
