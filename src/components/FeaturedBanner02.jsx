import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FeaturedBanner({ products = [] }) {
  const navigate = useNavigate();
  const DEFAULT_IMAGE = "https://placehold.co/300x300/1e293b/ffffff?text=Special";

  const DEFAULT_SPECIALS = [
    {
      id: "1",
      name: "10KG Maize Meal",
      tagline: "Township Saver",
      price: 99.99,
      oldPrice: 129.99,
      image: "/images/maize.jpg",
      badge: "SAVE R30",
    },
    {
      id: "2",
      name: "2L Cooking Oil",
      tagline: "Household Deal",
      price: 59.99,
      oldPrice: 79.99,
      image: "/images/oil.jpg",
      badge: "SAVE R20",
    },
    {
      id: "3",
      name: "Washing Powder 4KG",
      tagline: "Clean Savings",
      price: 119.99,
      oldPrice: 149.99,
      image: "/images/powder.jpg",
      badge: "20% OFF",
    },
  ];

  const displayProducts =
    Array.isArray(products) && products.length >= 3
      ? products.slice(0, 3)
      : DEFAULT_SPECIALS;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (displayProducts.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [displayProducts.length]);

  const currentProduct = displayProducts[currentIndex];

  if (!currentProduct) return null;

  // Uses the exact same ID resolution as product cards
  const productId = currentProduct.id || currentProduct._id || currentIndex + 1;

  // Handler if you prefer programmatic navigation (matching View button onClick)
  const handleProductClick = () => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 my-4">
      <div 
        onClick={handleProductClick}
        className="relative overflow-hidden rounded-xl bg-slate-900 text-white px-5 py-4 shadow-md h-36 sm:h-40 flex items-center justify-between border border-slate-800 cursor-pointer group"
      >
        {/* Left Details */}
        <div className="max-w-md space-y-1.5 z-10">
          <div className="flex items-center gap-2">
            <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
              {currentProduct.badge || "SPECIAL"}
            </span>
            <span className="text-[11px] text-slate-400 font-medium tracking-wide uppercase">
              {currentProduct.tagline || "Limited Special"}
            </span>
          </div>

          <h3 className="text-base sm:text-xl font-bold tracking-tight truncate text-white group-hover:text-blue-400 transition-colors">
            {currentProduct.name}
          </h3>

          <div className="flex items-baseline gap-2.5">
            <span className="text-lg sm:text-2xl font-black text-emerald-400">
              R{Number(currentProduct.price).toFixed(2)}
            </span>
            {currentProduct.oldPrice && (
              <span className="text-xs sm:text-sm text-slate-400 line-through">
                R{Number(currentProduct.oldPrice).toFixed(2)}
              </span>
            )}
          </div>

          {/* Action Button - navigates to Product Details */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleProductClick();
            }}
            className="mt-1 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
          >
            Shop Special &rarr;
          </button>
        </div>

        {/* Right Product Image */}
        <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 shrink-0 z-10">
          <div className="absolute inset-0 rounded-full bg-slate-800/80 blur-md -z-10 group-hover:bg-slate-700/80 transition-colors" />

          <img
            src={currentProduct.image || DEFAULT_IMAGE}
            alt={currentProduct.name}
            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = DEFAULT_IMAGE;
            }}
          />
        </div>

        {/* Carousel Indicators (Stop propagation so clicking a dot changes slide without navigating) */}
        <div className="absolute bottom-2 left-5 flex items-center gap-1.5 z-20">
          {displayProducts.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                currentIndex === index
                  ? "w-4 bg-emerald-400"
                  : "w-1.5 bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}