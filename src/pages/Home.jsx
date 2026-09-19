import { useState } from "react";
import ProductCard from "../components/ProductCard";
import FeaturedBanner from "../components/FeaturedBanner";
import { getProducts } from "../data/products";
import { FaShoppingBag, FaTags } from "react-icons/fa";

export default function Home() {
  const allProducts = getProducts();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Original categories list (Combos removed, Cosmetics & Hair included)
  const DEFAULT_CATEGORIES = [
    "All",
    "Groceries",
    "Household",
    "Personal Care",
    "Cosmetics & Hair",
    "Beverages",
    "Snacks"
  ];

  const extractedCategories = allProducts.map((p) => p.category).filter(Boolean);
  const categories = Array.from(new Set([...DEFAULT_CATEGORIES, ...extractedCategories]));

  // Filter products by active category selection
  const filteredProducts = selectedCategory === "All"
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-neutral-50 pb-12">
      
      {/* Featured Floating Banner (Sits directly under Navbar without any black bar) */}
      <FeaturedBanner products={allProducts} />

      {/* Main Container */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Category Selector Bar */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <FaTags className="text-blue-600" />
            <span className="text-sm font-bold text-neutral-800 uppercase tracking-wide">
              Categories
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Section Heading & Item Counter */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <FaShoppingBag className="text-blue-600 text-lg" />
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
              {selectedCategory === "All" ? "Our Products" : selectedCategory}
            </h2>
          </div>
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            {filteredProducts.length} Items
          </span>
        </div>

        {/* Product Grid / Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-neutral-200">
            <p className="text-neutral-500 text-sm font-medium">
              No products found under <span className="font-bold text-neutral-800">{selectedCategory}</span>.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}