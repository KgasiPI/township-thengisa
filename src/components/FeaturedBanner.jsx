import { useState, useEffect } from "react";

export default function FeaturedBanner({ products = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fallback placeholder image service if product image path is missing
  const DEFAULT_IMAGE = "https://placehold.co/400x400/1e293b/ffffff?text=Featured+Product";

  // Filter products that have specials/discounts or grab top items
  const featuredItems = products.length > 0 ? products.slice(0, 4) : [];
  const currentProduct = featuredItems[currentIndex];

  // Auto-rotate banner items every 5 seconds
  useEffect(() => {
    if (featuredItems.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredItems.length]);

  if (!currentProduct) return null;

  return (
    <div className="my-6 flex flex-col items-center">
      <div className="relative w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-4 sm:p-6 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-250 overflow-hidden border border-slate-700/50">
        
        {/* Special Offer Badge */}
        <span className="absolute top-3 right-4 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
          Special Offer
        </span>

        {/* Content Body */}
        <div className="flex items-center gap-5 sm:gap-8">
          {/* Dynamic Image Binding with Safe Fallback */}
          <img
            src={currentProduct.image || DEFAULT_IMAGE}
            alt={currentProduct.name || "Featured Product"}
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg shrink-0 bg-slate-800 border border-slate-700"
            onError={(e) => {
              // Gracefully handle broken relative image paths
              e.currentTarget.src = DEFAULT_IMAGE;
            }}
          />

          <div className="flex-1 min-w-0">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 truncate">
              {currentProduct.name}
            </h3>
            
            <div className="flex items-center gap-3 mb-3 font-semibold">
              {currentProduct.oldPrice && (
                <span className="line-through text-slate-400 text-sm sm:text-base">
                  R{currentProduct.oldPrice}
                </span>
              )}
              <span className="text-emerald-400 text-lg sm:text-xl">
                R{currentProduct.price}
              </span>
            </div>

            <button className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 cursor-pointer">
              Shop Now &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Pagination Dots */}
      {featuredItems.length > 1 && (
        <div className="flex items-center gap-2 mt-3">
          {featuredItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer border-none ${
                currentIndex === index
                  ? "w-5 bg-emerald-500"
                  : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}