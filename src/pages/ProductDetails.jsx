import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getProductById } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, updateQuantity, cartItems } = useCart();
  const [added, setAdded] = useState(false);

  // Cast ID to match type (numeric vs string)
  const productId = Number(id) || id;
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="flex-1 py-16 text-center bg-neutral-100 min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Product Not Found</h2>
        <p className="text-neutral-500 text-sm mb-6">The requested item could not be located in our catalog.</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer"
        >
          Return to Marketplace
        </button>
      </div>
    );
  }

  const existingCartItem = cartItems?.find((item) => item.id === productId);

  const handleAddToCart = () => {
    addToCart(productId);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const formatZAR = (amount) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
    }).format(amount || 0);
  };

  return (
    <div className="w-full bg-neutral-100 py-10 min-h-[80vh]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm font-semibold text-blue-600 hover:text-blue-800 mb-6 inline-flex items-center gap-1 cursor-pointer"
        >
          &larr; Back to Products
        </button>

        {/* Product Details Card */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
          
          {/* Image Column */}
          <div className="bg-neutral-50 rounded-xl border border-neutral-100 p-4 flex items-center justify-center">
            <img
              src={product.image || "/placeholder.jpg"}
              alt={product.name}
              className="w-full h-auto max-h-[420px] object-cover rounded-lg"
            />
          </div>

          {/* Info Column */}
          <div className="flex flex-col justify-between py-2">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md mb-3">
                {product.category || "General"}
              </span>

              <h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight mb-2">
                {product.name}
              </h1>

              <p className="text-2xl font-bold text-neutral-900 mb-4">
                {formatZAR(product.price)}
              </p>

              <div className="border-t border-b border-neutral-100 py-4 my-4">
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {product.description || "No description provided for this product."}
                </p>
              </div>
            </div>

            {/* Actions Section */}
            <div className="space-y-4 pt-4">
              {existingCartItem && (
                <div className="flex items-center justify-between bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                  <span className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                    Quantity in Cart
                  </span>
                  <div className="flex items-center bg-white border border-neutral-300 rounded-md overflow-hidden">
                    <button
                      type="button"
                      onClick={() => updateQuantity(productId, existingCartItem.quantity - 1)}
                      className="px-3 py-1 text-neutral-700 hover:bg-neutral-100 font-bold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 text-sm font-bold text-neutral-900">
                      {existingCartItem.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(productId, existingCartItem.quantity + 1)}
                      className="px-3 py-1 text-neutral-700 hover:bg-neutral-100 font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={handleAddToCart}
                className={`w-full py-3.5 px-6 font-semibold text-sm rounded-xl transition-colors cursor-pointer shadow-xs ${
                  added
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {added ? "✓ Item Added to Cart!" : "Add to Cart"}
              </button>

              <div className="flex gap-3 pt-2">
                <Link
                  to="/cart"
                  className="flex-1 text-center py-2.5 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-xs rounded-lg transition-colors border border-neutral-200"
                >
                  View Cart
                </Link>
                <Link
                  to="/checkout"
                  className="flex-1 text-center py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs rounded-lg transition-colors"
                >
                  Checkout Now
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}