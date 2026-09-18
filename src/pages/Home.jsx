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
    <div className="page">
      {/* Hero Welcome Section */}
      <div className="home-hero">
        <h1 className="home-title">Welcome to Township Thengisa</h1>
        <p className="home-subtitle">
          Discover amazing local products at great prices
        </p>
      </div>

      {/* Floating Special Offers Banner */}
      <div className="container">
        <FeaturedBanner products={products} />
      </div>

      {/* Main Layout: Left Sidebar + Right Product Catalog */}
      <div className="container home-layout">
        {/* Left Sidebar Category Filter */}
        <aside className="category-sidebar">
          <h3 className="sidebar-title">Categories</h3>
          
          {/* Category List for Desktop */}
          <ul className="category-list">
            {CATEGORIES.map((category) => (
              <li key={category}>
                <button
                  className={`category-btn ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>

          {/* Dropdown Selector for Mobile */}
          <div className="category-dropdown-container">
            <label htmlFor="category-select" className="dropdown-label">
              Select Category:
            </label>
            <select
              id="category-select"
              className="category-dropdown"
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
        <main className="catalog-content">
          <h2 className="page-title">{selectedCategory}</h2>

          {filteredProducts.length === 0 ? (
            <p className="no-products">
              No products found in this category.
            </p>
          ) : (
            <div className="product-grid">
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