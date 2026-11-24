import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, PhoneCall, MessageCircle } from 'lucide-react';
import { IMAGES, BUSINESS_INFO, getGeneralWhatsAppUrl } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Seasonal Specials', href: '#seasonal' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Location', href: '#location' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <>
      <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo & Brand */}
          <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, '#home')}>
            <img
              src={IMAGES.logo}
              alt="Sameera's Authentic Kitchen Logo"
              className="navbar-logo-img"
            />
            <div className="brand-text-wrap">
              <span className="brand-title">Sameera's</span>
              <span className="brand-tagline">Authentic Kitchen</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav>
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions: Cart + Order Now + Hamburger */}
          <div className="navbar-actions">
            {/* Shopping Cart Button */}
            <button
              className="cart-icon-btn"
              onClick={openCart}
              title="View Shopping Cart"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag size={20} />
              {totalCount > 0 && <span className="cart-badge-count">{totalCount}</span>}
            </button>

            {/* Prominent Order Now Button */}
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm nav-cta-btn"
              title="Order on WhatsApp"
            >
              <MessageCircle size={16} />
              <span>Order Now</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <div className="navbar-brand">
            <img
              src={IMAGES.logo}
              alt="Sameera's Authentic Kitchen Logo"
              className="navbar-logo-img"
            />
            <div className="brand-text-wrap">
              <span className="brand-title">Sameera's</span>
              <span className="brand-tagline">Authentic Kitchen</span>
            </div>
          </div>
          <button
            className="cart-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: '100%' }}
          >
            <MessageCircle size={18} />
            <span>Order on WhatsApp</span>
          </a>
          <a
            href="tel:+919902896323"
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            <PhoneCall size={18} />
            <span>Call 9902896323</span>
          </a>
        </div>
      </div>
    </>
  );
}
