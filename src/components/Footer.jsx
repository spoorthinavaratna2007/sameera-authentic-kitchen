import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Heart } from 'lucide-react';
import { IMAGES, BUSINESS_INFO, getGeneralWhatsAppUrl } from '../data/products';

export default function Footer() {
  const currentYear = 2026;

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
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
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column with Image 5 Official Logo */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <img
                src={IMAGES.logo}
                alt="Sameera's Authentic Kitchen Official Logo"
                className="footer-logo-img"
              />
              <span className="footer-brand-title">Sameera's Authentic Kitchen</span>
            </div>
            <p className="footer-brand-desc">
              {BUSINESS_INFO.description}
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.5rem' }}>
              <a
                href={getGeneralWhatsAppUrl("919902896323")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-col">
            <h5>Navigation</h5>
            <ul className="footer-links-list">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About Us</a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleNavClick(e, '#products')}>Our Products</a>
              </li>
              <li>
                <a href="#seasonal" onClick={(e) => handleNavClick(e, '#seasonal')}>Seasonal Specials</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact Us</a>
              </li>
              <li>
                <a href="#location" onClick={(e) => handleNavClick(e, '#location')}>Find Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h5>Contact Details</h5>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <Mail size={16} />
                <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} />
                <a href="tel:+919902896323">+91 99028 96323</a>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} />
                <a href="tel:+916361910139">+91 63619 10139</a>
              </li>
              <li className="footer-contact-item">
                <MapPin size={16} />
                <span>{BUSINESS_INFO.location.address}</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp & Location Links */}
          <div className="footer-col">
            <h5>Direct Links</h5>
            <ul className="footer-links-list">
              <li>
                <a
                  href="https://wa.me/919902896323"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp 1 (9902896323)
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/916361910139"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp 2 (6361910139)
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Exact Google Maps Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {currentYear} Sameera's Authentic Kitchen. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Traditional South Indian Delicacies Crafted with <Heart size={14} style={{ color: '#E53E3E' }} fill="#E53E3E" /> in Mysore
          </div>
        </div>
      </div>
    </footer>
  );
}
