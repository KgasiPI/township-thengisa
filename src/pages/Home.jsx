import { useState } from "react";
import ProductCard from "../components/ProductCard";
import FeaturedBanner from "../components/FeaturedBanner";
import { getProducts } from "../data/products";

// Mock categories list
const CATEGORIES = [
  "All Products",
  "Cosmetics & Hair",
  "Groceries & Food",
  "Electronics & Tech",
  "Clothing & Apparel",
  "Home & Hardware",
  "Fresh Produce",
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const products = getProducts();

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter(
          (p) =>
            p.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="min-h-screen py-4 pb-8 flex flex-col">
      {/* Hero Welcome Section */}
      <div className="text-center py-6 px-8 max-w-[800px] mx-auto">
        <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight mb-2">
          Welcome to Township Thengisa
        </h1>
        <p className="text-lg text-neutral-500">
          Discover amazing local products at great prices
        </p>
      </div>

      {/* Floating Special Offers Banner */}
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedBanner products={products} />
      </div>

      {/* Main Layout: Left Sidebar + Right Product Catalog */}
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 mt-6 items-start">
        {/* Left Sidebar Category Filter */}
        <aside className="w-full md:w-64 shrink-0 bg-white rounded-xl p-5 border border-neutral-200 shadow-xs">
          <h3 className="text-lg font-bold text-neutral-900 border-b border-neutral-100 pb-3 mb-4">
            Categories
          </h3>

          {/* Category List for Desktop */}
          <ul className="hidden md:flex flex-col gap-1.5 list-none p-0 m-0">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <li key={category}>
                  <button
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                      isActive
                        ? "bg-blue-600 text-white font-semibold shadow-xs"
                        : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Dropdown Selector for Mobile */}
          <div className="flex md:hidden flex-col gap-1.5">
            <label htmlFor="category-select" className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Select Category:
            </label>
            <select
              id="category-select"
              className="w-full p-2.5 rounded-lg border border-neutral-300 text-sm bg-white text-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </aside>

        {/* Right Product Grid */}
        <main className="flex-1 w-full">
          <h2 className="text-3xl font-extrabold text-neutral-900 mb-6 tracking-tight">
            {selectedCategory}
          </h2>

          {filteredProducts.length === 0 ? (
            <p className="text-center py-12 text-neutral-500 text-lg bg-neutral-50 rounded-xl border border-dashed border-neutral-200">
              No products found in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}