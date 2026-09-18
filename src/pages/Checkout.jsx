import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

export default function Checkout() {
  const {
    getCartItemsWithProducts,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useCart();
  const cartItems = getCartItemsWithProducts();
  const total = getCartTotal();

  function placeOrder() {
    alert("Successful Order!");
    clearCart();
  }

  return (
    <div className="flex-1 py-4 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-neutral-900 mb-8 tracking-tight">
          Checkout
        </h1>

        {/* Responsive 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Order Items List (2 Columns on large screens) */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-xl shadow-xs border border-neutral-200">
            <h2 className="text-xl font-bold text-neutral-900 mb-6 pb-3 border-b border-neutral-100">
              Order Summary
            </h2>

            {cartItems.length === 0 ? (
              <p className="text-center py-8 text-neutral-500">
                Your cart is empty.
              </p>
            ) : (
              cartItems.map((item) => (
                <div
                  className="flex flex-col sm:flex-row gap-4 py-6 border-b border-neutral-200 last:border-b-0"
                  key={item.id}
                >
                  {/* Item Image */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-lg bg-neutral-100 shrink-0"
                  />

                  {/* Item Name & Unit Price */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-neutral-900 mb-1 truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {formatCurrency(item.product.price)} each
                    </p>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex flex-col items-start sm:items-end justify-between gap-3 shrink-0">
                    <div className="flex items-center gap-2">
                      <button
                        className="w-8 h-8 border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 rounded-md font-bold transition-colors cursor-pointer flex items-center justify-center"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="min-w-10 text-center font-semibold text-neutral-800">
                        {item.quantity}
                      </span>
                      <button
                        className="w-8 h-8 border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 rounded-md font-bold transition-colors cursor-pointer flex items-center justify-center"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    <p className="text-base font-bold text-neutral-900">
                      {formatCurrency(item.product.price * item.quantity)}
                    </p>

                    <button
                      className="px-3 py-1 text-xs font-semibold text-white bg-neutral-600 hover:bg-neutral-700 rounded-md transition-colors cursor-pointer"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Sticky Total Summary Box (1 Column on large screens) */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xs border border-neutral-200 lg:sticky lg:top-24">
            <h2 className="text-xl font-bold text-neutral-900 mb-6 pb-3 border-b border-neutral-100">
              Total
            </h2>

            <div className="flex justify-between items-center mb-4 pb-4 border-b border-neutral-100 text-neutral-600">
              <span className="text-sm font-medium">Subtotal:</span>
              <span className="text-base font-semibold text-neutral-900">
                {formatCurrency(total)}
              </span>
            </div>

            <div className="flex justify-between items-center mb-6 pb-6 border-b-2 border-neutral-900">
              <span className="text-base font-bold text-neutral-900">Total:</span>
              <span className="text-2xl font-extrabold text-blue-600">
                {formatCurrency(total)}
              </span>
            </div>

            <button
              className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-lg shadow-xs hover:shadow-md transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={placeOrder}
              disabled={cartItems.length === 0}
            >
              Place Order
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}