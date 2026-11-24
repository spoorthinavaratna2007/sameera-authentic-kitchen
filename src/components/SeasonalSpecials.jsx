import React from 'react';
import { MessageCircle, Sparkles, Eye } from 'lucide-react';
import { IMAGES, getProductWhatsAppUrl } from '../data/products';

export default function SeasonalSpecials({ onQuickView }) {
  const seasonalItems = [
    {
      id: 'yellu-bella',
      name: 'Yellu Bella',
      subtitle: 'Festive Auspicious Mixture',
      description: 'A traditional Sankranti festive mixture made with sesame seeds, groundnuts, jaggery and other traditional ingredients.',
      priceDisplay: 'Contact for Price',
      image: IMAGES.yelluBella,
      badge: 'Sankranti Essential'
    },
    {
      id: 'sakkare-acchu',
      name: 'Sakkare Acchu',
      subtitle: 'Traditional Sugar Figurines',
      description: 'Traditional moulded sugar figurines made using decorative moulds and enjoyed during festive celebrations.',
      priceDisplay: 'Contact for Price',
      image: IMAGES.sakkareAcchuMoulds,
      secondaryImage: IMAGES.sakkareAcchuBox,
      badge: 'Festive Moulds & Boxes'
    },
    {
      id: 'aralu-sandige',
      name: 'Aralu Sandige',
      subtitle: 'Sun-Dried Puffed Delicacy',
      description: 'A traditional homemade sun-dried delicacy prepared with care.',
      priceDisplay: 'Contact for Price',
      image: IMAGES.araluSandige,
      badge: 'Crispy Traditional'
    }
  ];

  return (
    <section id="seasonal" className="seasonal-section">
      <div className="container">
        {/* Banner Header */}
        <div className="seasonal-banner-header">
          <div className="seasonal-badge">
            <Sparkles size={16} />
            <span>Sankranti Festive Collection</span>
          </div>
          <h2 className="seasonal-title">
            Celebrate Sankranti with Traditional Homemade Delicacies
          </h2>
          <p className="seasonal-subtitle">
            Bring home the sweetness of tradition with our special festive preparations.
          </p>
        </div>

        {/* 3 Seasonal Product Cards */}
        <div className="seasonal-cards-grid">
          {seasonalItems.map((item) => {
            const waUrl = getProductWhatsAppUrl(item);

            return (
              <div key={item.id} className="seasonal-card">
                <div className="seasonal-img-wrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="seasonal-img"
                  />
                  {onQuickView && (
                    <button
                      className="product-view-btn"
                      onClick={() => onQuickView(item)}
                      title="View Full Photograph"
                      aria-label="View Full Photograph"
                      style={{ opacity: 1 }}
                    >
                      <Eye size={18} />
                    </button>
                  )}
                </div>

                <div className="seasonal-card-body">
                  <span className="badge badge-mustard" style={{ alignSelf: 'flex-start', marginBottom: '0.6rem' }}>
                    {item.badge}
                  </span>
                  <h3 className="seasonal-product-title">{item.name}</h3>
                  <p className="seasonal-product-desc">{item.description}</p>

                  <div className="seasonal-footer-row">
                    <span className="seasonal-price-label">{item.priceDisplay}</span>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                    >
                      <MessageCircle size={15} />
                      <span>Inquire Now</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
