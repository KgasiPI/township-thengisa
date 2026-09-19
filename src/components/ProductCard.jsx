import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, updateQuantity, cartItems } = useCart();
  const [added, setAdded] = useState(false);

  const productId = product?.id || 1;
  const existingCartItem = cartItems?.find((item) => item.id === productId);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(productId);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleQuantityChange = (e, newQuantity) => {
    e.preventDefault();
    e.stopPropagation();
    updateQuantity(productId, newQuantity);
  };

  const formatZAR = (amount) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
    }).format(amount || 0);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 border border-neutral-200 flex flex-col relative z-10">
      
      {/* Clickable Image Link */}
      <Link 
        to={`/products/${productId}`} 
        className="block overflow-hidden appearance-none no-underline border-0 outline-none"
      >
        <img
          src={product?.image || "/placeholder.jpg"}
          alt={product?.name || "Product"}
          className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
      
      <div className="p-6 flex flex-col flex-1">
        {/* Clickable Title Link */}
        <Link 
          to={`/products/${productId}`} 
          className="no-underline block focus:outline-hidden"
        >
          <h3 className="text-xl font-semibold text-neutral-900 mb-2 hover:text-blue-600 transition-colors line-clamp-1">
            {product?.name || "Product Name"}
          </h3>
        </Link>

        <p className="text-2xl font-bold text-blue-600 mb-4">
          {formatZAR(product?.price)}
        </p>

        {/* Action Controls Section */}
        <div className="mt-auto space-y-3">
          
          {/* Quantity Controls (Appears if item is already in cart) */}
          {existingCartItem && (
            <div className="flex items-center justify-between bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200">
              <span className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                In Cart
              </span>
              <div className="flex items-center bg-white border border-neutral-300 rounded-md overflow-hidden">
                <button
                  type="button"
                  onClick={(e) => handleQuantityChange(e, existingCartItem.quantity - 1)}
                  className="px-2.5 py-0.5 text-neutral-700 hover:bg-neutral-100 font-bold cursor-pointer text-sm"
                >
                  -
                </button>
                <span className="px-3 py-0.5 text-xs font-bold text-neutral-900">
                  {existingCartItem.quantity}
                </span>
                <button
                  type="button"
                  onClick={(e) => handleQuantityChange(e, existingCartItem.quantity + 1)}
                  className="px-2.5 py-0.5 text-neutral-700 hover:bg-neutral-100 font-bold cursor-pointer text-sm"
                >
                  +
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons Row */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleAddToCart}
              className={`flex-1 h-10 px-4 py-2 text-sm font-semibold rounded-lg transition-all shadow-xs cursor-pointer select-none border-0 outline-hidden flex items-center justify-center ${
                added
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {added ? "✓ Added!" : "Add to Cart"}
            </button>
            
            <Link
              to={`/products/${productId}`}
              className="h-10 px-4 py-2 text-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 rounded-lg transition-all text-center inline-flex items-center justify-center cursor-pointer select-none no-underline border-0 outline-hidden shrink-0"
            >
              View
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}