import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";

export default function FeaturedBanner({ products = [] }) {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredProducts =
    products.filter((p) => p.isOnSpecial || p.isFeatured).length > 0
      ? products.filter((p) => p.isOnSpecial || p.isFeatured)
      : products.slice(0, 3);

  useEffect(() => {
    if (featuredProducts.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  if (featuredProducts.length === 0) return null;

  const activeProduct = featuredProducts[currentIndex];

  return (
    <div className="featured-banner-wrapper">
      <div
        className="featured-banner-card"
        onClick={() => navigate(`/products/${activeProduct.id}`)}
      >
        <div className="featured-badge">SPECIAL OFFER</div>
        <div className="featured-banner-content">
          <img
            src={activeProduct.image}
            alt={activeProduct.name}
            className="featured-banner-image"
          />
          <div className="featured-banner-info">
            <h3>{activeProduct.name}</h3>
            <p className="featured-banner-price">
              {activeProduct.originalPrice && (
                <span className="old-price">
                  {formatCurrency(activeProduct.originalPrice)}
                </span>
              )}
              <span className="current-price">
                {formatCurrency(activeProduct.price)}
              </span>
            </p>
            <span className="featured-banner-cta">Shop Now &rarr;</span>
          </div>
        </div>
      </div>

      <div className="banner-dots">
        {featuredProducts.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}