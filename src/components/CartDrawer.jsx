import React from 'react';
import { X, Trash2, ShoppingBag, MessageCircle, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getCartWhatsAppUrl } from '../data/products';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalCount,
    totalAmount
  } = useCart();

  const checkoutWaUrl = getCartWhatsAppUrl(cartItems);

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={closeCart} />
      <div className="cart-drawer open">
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div className="cart-drawer-title">
            <ShoppingBag size={22} />
            <span>Your Order ({totalCount})</span>
          </div>
          <button
            className="cart-close-btn"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-view">
              <div className="cart-empty-icon">
                <ShoppingBag size={32} />
              </div>
              <h4>Your cart is empty</h4>
              <p>Explore our authentic pickles, dosa mixes, and seasonal delicacies to begin your order.</p>
              <button
                className="btn btn-outline btn-sm"
                onClick={closeCart}
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-row">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-thumb"
                  />
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-meta">
                      {item.packaging || 'Pack'} • {item.weight || 'Traditional pack'}
                    </div>
                    <div className="cart-item-pricing">
                      {item.price ? `₹${item.price * item.quantity}` : 'Contact for Price'}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="cart-qty-controls">
                    <button
                      className="cart-qty-btn"
                      onClick={() => updateQuantity(item.id, -1)}
                      title="Decrease quantity"
                    >
                      <Minus size={12} />
                    </button>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, minWidth: '18px', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button
                      className="cart-qty-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                      title="Increase quantity"
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  {/* Delete Item */}
                  <button
                    className="cart-item-del-btn"
                    onClick={() => removeFromCart(item.id)}
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}

              <button
                className="btn btn-secondary btn-sm"
                onClick={clearCart}
                style={{ alignSelf: 'flex-start', marginTop: '0.5rem', fontSize: '0.8rem' }}
              >
                Clear Cart
              </button>
            </>
          )}
        </div>

        {/* Drawer Footer */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-total-row">
              <span>Estimated Subtotal:</span>
              <span>₹{totalAmount}</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
              * Orders are confirmed and prepared fresh upon receiving your message on WhatsApp.
            </div>

            <a
              href={checkoutWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              style={{ width: '100%' }}
            >
              <MessageCircle size={20} />
              <span>Send Order via WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </>
  );
}
