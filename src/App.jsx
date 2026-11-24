import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CartDrawer from './components/CartDrawer';
import ImageModal from './components/ImageModal';
import { useCart } from './context/CartContext';
import { IMAGES } from './data/products';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const { notification } = useCart();
  const [modalData, setModalData] = useState(null);

  const handleOpenPriceChart = () => {
    setModalData({
      src: IMAGES.priceChart,
      title: "Sameera's Authentic Kitchen - Product Price Chart",
      caption: "Original price chart reference for Pickles, Puliyogre products and Instant Dosa Mixes"
    });
  };

  const handleQuickView = (productOrItem) => {
    setModalData({
      src: productOrItem.image,
      title: productOrItem.name,
      caption: productOrItem.subtitle || productOrItem.description
    });
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <div className="app-layout">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Pages Flow */}
      <Home
        onOpenPriceChart={handleOpenPriceChart}
        onQuickView={handleQuickView}
      />

      {/* Interactive Cart Drawer */}
      <CartDrawer />

      {/* Lightbox Modal for Full Photographs */}
      {modalData && (
        <ImageModal
          imageSrc={modalData.src}
          title={modalData.title}
          caption={modalData.caption}
          onClose={handleCloseModal}
        />
      )}

      {/* Action Notification Toast */}
      {notification && (
        <div className="toast-notice">
          <CheckCircle2 size={18} />
          <span>{notification}</span>
        </div>
      )}
    </div>
  );
}
