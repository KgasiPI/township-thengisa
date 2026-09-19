import { useNavigate } from "react-router-dom";
import { FaTag, FaArrowRight } from "react-icons/fa";

export default function FeaturedBanner({ products = [] }) {
  const navigate = useNavigate();
  const DEFAULT_IMAGE = "https://placehold.co/400x400/1e293b/ffffff?text=Special";

  // Muted, sleek card themes
  const CARD_THEMES = [
    { bg: "bg-slate-900", border: "border-slate-800" },
    { bg: "bg-blue-950", border: "border-blue-900" },
    { bg: "bg-amber-950", border: "border-amber-900" },
    { bg: "bg-emerald-950", border: "border-emerald-900" },
  ];

  // Authentic single tag remarks with tag icon styling
  const SINGLE_TAGS = [
    { text: "PERFECT DEAL 🔥", textStyle: "text-amber-400" },
    { text: "SPRING DAY SPECIAL 🌸", textStyle: "text-pink-400" },
    { text: "SAVE UP TO 50% 💰", textStyle: "text-emerald-400" },
    { text: "OFFER TILL SUNDAY ⏳", textStyle: "text-cyan-400" },
  ];

  const DEFAULT_SPECIALS = [
    {
      id: "1",
      name: "Smart Watch",
      price: 2499.00,
      oldPrice: 2999.00,
      image: "/images/smartwatch.jpg",
      tag: { text: "PERFECT DEAL 🔥", textStyle: "text-amber-400" }
    },
    {
      id: "2",
      name: "Laptop Stand",
      price: 450.00,
      oldPrice: 599.00,
      image: "/images/laptopstand.jpg",
      tag: { text: "SPRING DAY SPECIAL 🌸", textStyle: "text-pink-400" }
    },
    {
      id: "3",
      name: "Wireless Headphones",
      price: 899.00,
      oldPrice: 1199.00,
      image: "/images/headphones.jpg",
      tag: { text: "SAVE UP TO 50% 💰", textStyle: "text-emerald-400" }
    },
  ];

  // Map products to a single tag and balanced card theme
  const displayProducts =
    Array.isArray(products) && products.length >= 3
      ? products.slice(0, 3).map((item, idx) => ({
          ...item,
          tag: SINGLE_TAGS[idx % SINGLE_TAGS.length],
          theme: CARD_THEMES[idx % CARD_THEMES.length]
        }))
      : DEFAULT_SPECIALS.map((item, idx) => ({
          ...item,
          theme: CARD_THEMES[idx % CARD_THEMES.length]
        }));

  // Duplicate for smooth marquee loop
  const floatingItems = [...displayProducts, ...displayProducts];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 my-6 overflow-hidden">
      
      {/* Floating Track Container */}
      <div className="flex gap-8 sm:gap-12 w-max animate-banner-float hover:[animation-play-state:paused] py-2">
        {floatingItems.map((item, index) => {
          const productId = item.id || item._id || index;
          const theme = item.theme || CARD_THEMES[index % CARD_THEMES.length];
          const tag = item.tag || SINGLE_TAGS[index % SINGLE_TAGS.length];

          return (
            <div
              key={`${productId}-${index}`}
              onClick={() => navigate(`/products/${productId}`)}
              className={`group relative flex items-center gap-5 ${theme.bg} border ${theme.border} p-5 rounded-2xl min-w-[340px] sm:min-w-[380px] cursor-pointer shadow-lg hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1`}
            >
              {/* Product Image Container */}
              <div className="w-22 h-22 sm:w-24 sm:h-24 shrink-0 bg-white/5 rounded-xl p-2 flex items-center justify-center border border-white/10">
                <img
                  src={item.image || DEFAULT_IMAGE}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = DEFAULT_IMAGE;
                  }}
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 min-w-0 text-white">
                
                {/* Single Tag with Icon */}
                <div className="flex items-center gap-1.5 mb-1.5">
                  <FaTag className={`text-xs ${tag.textStyle}`} />
                  <span className={`text-xs font-black uppercase tracking-wide ${tag.textStyle}`}>
                    {tag.text}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white truncate">
                  {item.name}
                </h4>

                <div className="flex items-center gap-2.5 mt-1">
                  <span className="text-lg sm:text-xl font-black text-blue-400">
                    R{Number(item.price).toFixed(2)}
                  </span>
                  {item.oldPrice && (
                    <span className="text-xs sm:text-sm text-slate-400 line-through font-medium">
                      R{Number(item.oldPrice).toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {/* Floating "Shop Now..." Button that reveals on Hover */}
              <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/products/${productId}`);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
                >
                  <span>Shop Now...</span>
                  <FaArrowRight className="text-xs" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Animation Styling */}
      <style>{`
        @keyframes bannerFloat {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-banner-float {
          animation: bannerFloat 22s linear infinite;
        }
      `}</style>

    </div>
  );
}