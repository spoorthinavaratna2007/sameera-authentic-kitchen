import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { IMAGES, getGeneralWhatsAppUrl } from '../data/products';

export default function Hero() {
  const handleExploreClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#products');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <div className="hero-content">
            {/* Logo Badge */}
            <div className="hero-logo-badge">
              <img
                src={IMAGES.logo}
                alt="Sameera's Authentic Kitchen Emblem"
                className="hero-badge-logo"
              />
              <span className="hero-badge-text">Pure • Traditional • Homemade</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-title">
              A Taste of Tradition, <span>Made with Love</span>
            </h1>

            {/* Supporting Text */}
            <p className="hero-subtitle">
              Discover the authentic flavours of homemade Indian pickles, traditional dosa mixes and seasonal delicacies, carefully prepared with love.
            </p>

            {/* Two Functional Buttons */}
            <div className="hero-cta-group">
              <button
                onClick={handleExploreClick}
                className="btn btn-primary btn-lg"
              >
                <span>Explore Our Products</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={20} />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="hero-trust-row">
              <div className="hero-trust-item">
                <Sparkles size={18} />
                <span>Small Batch Handcrafted</span>
              </div>
              <div className="hero-trust-item">
                <ShieldCheck size={18} />
                <span>Selected Ingredients</span>
              </div>
              <div className="hero-trust-item">
                <HeartHandshake size={18} />
                <span>Authentic Mysore Recipes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Image 4 */}
          <div className="hero-visual-wrapper">
            <div className="hero-image-card">
              <img
                src={IMAGES.pickleCollection}
                alt="Sameera's Authentic Kitchen Traditional Pickles Collection"
                className="hero-main-img"
              />
              <div className="hero-image-caption">
                <div>
                  <div className="hero-caption-title">Sameera's Signature Pickles</div>
                  <div className="hero-caption-desc">Hunsekayi Tokku, Nallikayi Tokku, Mavinkayi Tokku & Hunsekayi Rasa</div>
                </div>
                <span className="badge badge-mustard">Authentic Collection</span>
              </div>
            </div>

            {/* Floating Quality Seal */}
            <div className="hero-floating-seal">
              <div className="hero-seal-text">100% Traditional Mysore Recipe</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
