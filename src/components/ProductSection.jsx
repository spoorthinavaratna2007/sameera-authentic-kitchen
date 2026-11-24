import React, { useState, useMemo } from 'react';
import { Search, X, FileText, Sparkles } from 'lucide-react';
import { PRODUCTS, CATEGORIES, IMAGES } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductSection({ onOpenPriceChart, onQuickView }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.subtitle &&
          product.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (product.description &&
          product.description.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="products-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Homemade Menu</span>
          <h2 className="section-title">Our Traditional Products</h2>
          <p className="section-subtitle">
            Authentic South Indian pickles, nutritious dosa flours and seasonal specialties, handcrafted in Mysore with timeless family recipes.
          </p>
        </div>

        {/* Price Chart Preview Banner */}
        <div className="price-chart-banner">
          <div className="price-chart-info">
            <FileText size={24} />
            <div>
              <strong>Official Business Price Chart Available</strong>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                View our complete printed product catalogue, weights and packaging reference.
              </div>
            </div>
          </div>
          <button
            onClick={onOpenPriceChart}
            className="btn btn-outline btn-sm"
          >
            <Sparkles size={16} />
            <span>View Original Price Chart</span>
          </button>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="products-controls">
          {/* Search Bar */}
          <div className="search-input-wrap">
            <Search size={18} className="search-input-icon" />
            <input
              type="text"
              placeholder="Search by product name (e.g., Mavinkayi, Rava Dosa, Tokku)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="category-filter-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`filter-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))
          ) : (
            <div className="no-products-msg">
              <h3>No products found</h3>
              <p>Try searching with another keyword or select "All Items".</p>
              <button
                className="btn btn-outline btn-sm"
                style={{ marginTop: '1rem' }}
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
