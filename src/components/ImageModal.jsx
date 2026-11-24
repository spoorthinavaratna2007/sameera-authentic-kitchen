import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function ImageModal({ imageSrc, title, caption, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!imageSrc) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--color-forest-green)' }}>
              {title || 'Original Photograph'}
            </h4>
            {caption && (
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                {caption}
              </span>
            )}
          </div>
          <button
            className="cart-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          <img
            src={imageSrc}
            alt={title || "Full view photograph"}
            className="modal-img"
          />
        </div>

        <div style={{ padding: '0.8rem 1.5rem', background: '#FFF8E9', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
            Original client photograph preserved in full detail.
          </span>
          <button
            className="btn btn-outline btn-sm"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
