import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function Location() {
  const exactMapsUrl = BUSINESS_INFO.location.mapsUrl;

  return (
    <section id="location" className="location-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Visit or Pick Up</span>
          <h2 className="section-title">Find Us</h2>
          <p className="section-subtitle">
            Conveniently located in the heritage city of Mysore. We welcome customer visits and local pick-ups by appointment.
          </p>
        </div>

        <div className="location-grid">
          {/* Location Address Details */}
          <div className="location-details-box">
            <h3 className="location-title">Our Kitchen</h3>
            <div className="location-biz-name">{BUSINESS_INFO.name}</div>
            <div className="location-address">
              <MapPin size={20} style={{ color: 'var(--color-forest-green)', flexShrink: 0 }} />
              <span>{BUSINESS_INFO.location.address}</span>
            </div>

            <div className="location-meta-list">
              <div className="location-meta-item">
                <Clock size={18} style={{ color: 'var(--color-olive-green)' }} />
                <span>Operating Hours: 9:00 AM – 8:00 PM (Monday to Saturday)</span>
              </div>
              <div className="location-meta-item">
                <ShieldCheck size={18} style={{ color: 'var(--color-olive-green)' }} />
                <span>Hygienic Home Kitchen Environment</span>
              </div>
              <div className="location-meta-item">
                <Navigation size={18} style={{ color: 'var(--color-olive-green)' }} />
                <span>Landmark: Srirampura, Mysore, Karnataka, India</span>
              </div>
            </div>

            {/* Prominent Get Directions Button - MUST redirect to the exact link */}
            <a
              href={exactMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ width: '100%' }}
            >
              <Navigation size={20} />
              <span>Get Directions on Google Maps</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Map Preview Container with Live Google Maps Embed & Overlay Link */}
          <div className="location-map-wrapper">
            <iframe
              title="Sameera's Authentic Kitchen Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15594.137812975945!2d76.6212563!3d12.2798835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf6ff89f81f185%3A0x6b9dcf282362a74c!2sSrirampura%2C%20Mysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
