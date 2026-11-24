import React from 'react';
import { MessageCircle, ShoppingBag, Eye, Package, Weight } from 'lucide-react';
import { getProductWhatsAppUrl } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();
  const waUrl = getProductWhatsAppUrl(product);

  return (
    <div className="product-card">
      {/* Product Image Area */}
      <div className="product-card-top">
        {product.badge && (
          <span className="badge badge-mustard product-badge-float">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="product-card-img"
          loading="lazy"
        />
        {onQuickView && (
          <button
            className="product-view-btn"
            onClick={() => onQuickView(product)}
            title="View Full Image"
            aria-label="View Full Image"
          >
            <Eye size={18} />
          </button>
        )}
      </div>

      {/* Product Content Body */}
      <div className="product-card-body">
        <span className="product-card-category">{product.categoryLabel}</span>
        <h3 className="product-card-title">{product.name}</h3>
        {product.subtitle && (
          <p className="product-card-sub">{product.subtitle}</p>
        )}

        <p className="product-card-desc">{product.description}</p>

        {/* Specifications: Packaging & Weight */}
        <div className="product-specs-row">
          {product.packaging && (
            <div className="spec-item">
              <Package size={14} />
              <span>{product.packaging}</span>
            </div>
          )}
          {product.weight && (
            <div className="spec-item">
              <Weight size={14} />
              <span>{product.weight}</span>
            </div>
          )}
        </div>

        {/* Price Row */}
        <div className="product-price-row">
          {product.price ? (
            <div>
              <span className="product-price-val">{product.priceDisplay}</span>
              <span className="product-unit-text"> / {product.packaging?.toLowerCase() || 'unit'}</span>
            </div>
          ) : (
            <span className="product-price-val contact">{product.priceDisplay}</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="product-actions-grid">
          {product.price ? (
            <button
              onClick={() => addToCart(product)}
              className="btn btn-secondary btn-sm"
              title="Add to cart"
            >
              <ShoppingBag size={15} />
              <span>Add to Cart</span>
            </button>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="btn btn-secondary btn-sm"
              title="Add enquiry to cart"
            >
              <ShoppingBag size={15} />
              <span>Add to List</span>
            </button>
          )}

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
            title="Order directly on WhatsApp"
          >
            <MessageCircle size={15} />
            <span>Order Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
