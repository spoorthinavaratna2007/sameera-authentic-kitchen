import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getGeneralWhatsAppUrl } from '../data/products';

export default function Contact() {
  const prefilledGeneralWa = getGeneralWhatsAppUrl("919902896323");
  const prefilledWa2 = getGeneralWhatsAppUrl("916361910139");

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Direct Ordering</span>
          <h2 className="section-title">We'd Love to Hear From You!</h2>
          <p className="section-subtitle">
            Have questions about availability, bulk festival bookings or custom packing? Connect with us directly via WhatsApp, phone call or email.
          </p>
        </div>

        <div className="contact-card-main">
          {/* Left Column: Business Details */}
          <div className="contact-info-col">
            <div>
              <h3>Get in Touch</h3>
              <p>
                Reach out to Sameera's Authentic Kitchen for fresh batches of traditional pickles, dosa mixes and festive Sankranti specialties.
              </p>

              <div className="contact-items-list">
                {/* Email Entry */}
                <div className="contact-entry">
                  <div className="contact-icon-circle">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="contact-entry-title">Email Address</div>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="contact-entry-val"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Contact Numbers */}
                <div className="contact-entry">
                  <div className="contact-icon-circle">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="contact-entry-title">Primary Contact</div>
                    <a href="tel:+919902896323" className="contact-entry-val">
                      9902896323
                    </a>
                  </div>
                </div>

                <div className="contact-entry">
                  <div className="contact-icon-circle">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="contact-entry-title">Secondary Contact</div>
                    <a href="tel:+916361910139" className="contact-entry-val">
                      6361910139
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', fontSize: '0.88rem', color: '#E2ECD8' }}>
              📍 Located in Srirampura, Mysore, Karnataka.
            </div>
          </div>

          {/* Right Column: Direct Interactive Action Buttons */}
          <div className="contact-actions-col">
            <h4>Instant Order & Inquiry</h4>
            <p>
              Click any button below to connect with us immediately. We respond promptly to all product orders and availability inquiries.
            </p>

            <div className="contact-buttons-group">
              {/* WhatsApp Buttons */}
              <a
                href={prefilledGeneralWa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={20} />
                <span>WhatsApp – 9902896323</span>
              </a>

              <a
                href={prefilledWa2}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={20} />
                <span>WhatsApp – 6361910139</span>
              </a>

              {/* Call Buttons in a 2-col row */}
              <div className="contact-action-btn-row">
                <a
                  href="tel:+919902896323"
                  className="btn btn-outline"
                >
                  <Phone size={18} />
                  <span>Call 9902896323</span>
                </a>

                <a
                  href="tel:+916361910139"
                  className="btn btn-outline"
                >
                  <Phone size={18} />
                  <span>Call 6361910139</span>
                </a>
              </div>

              {/* Email Button */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="btn btn-secondary"
              >
                <Mail size={18} />
                <span>Send Email ({BUSINESS_INFO.email})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
