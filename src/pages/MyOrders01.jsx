import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function MyOrders() {
  const { user } = useAuth();

  // Helper function to format prices directly to ZAR
  const formatZAR = (amount) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
    }).format(amount || 0);
  };

  // Sample order history data (Replace or connect to your database/backend API)
  const orders = [
    {
      id: "ORD-2026-8812",
      date: "14 September 2026",
      status: "Delivered",
      total: 399.0,
      shippingAddress: "123 Main Street, Soweto, Johannesburg",
      items: [
        {
          id: 1,
          name: "USB-C Multi-Port Hub",
          price: 399.0,
          quantity: 1,
          image: "https://placehold.co/100x100/1e293b/ffffff?text=USB+Hub",
        },
      ],
    },
    {
      id: "ORD-2026-7410",
      date: "02 September 2026",
      status: "Processing",
      total: 848.0,
      shippingAddress: "45 Commission Street, Johannesburg CBD",
      items: [
        {
          id: 2,
          name: "Ergonomic Wireless Mouse",
          price: 299.0,
          quantity: 1,
          image: "https://placehold.co/100x100/1e293b/ffffff?text=Mouse",
        },
        {
          id: 3,
          name: "Mechanical Gaming Keyboard",
          price: 549.0,
          quantity: 1,
          image: "https://placehold.co/100x100/1e293b/ffffff?text=Keyboard",
        },
      ],
    },
  ];

  // 1. Unauthenticated View Guard
  if (!user) {
    return (
      <div className="flex-1 py-16 flex items-center justify-center bg-neutral-100 min-h-[60vh]">
        <div className="max-w-md w-full mx-4 bg-white p-8 rounded-xl shadow-xs border border-neutral-200 text-center">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
            🔒
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            Access Restricted
          </h2>
          <p className="text-neutral-600 mb-6 text-sm">
            Please sign in to view your order history and track shipments.
          </p>
          <Link
            to="/login"
            className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors shadow-xs"
          >
            Sign In to Account
          </Link>
        </div>
      </div>
    );
  }

  // 2. Authenticated View
  return (
    <div className="flex-1 py-8 bg-neutral-100 min-h-[75vh]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
              My Orders
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              Track recent orders, view receipts, and review purchased items.
            </p>
          </div>
          <Link
            to="/"
            className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            Continue Shopping &rarr;
          </Link>
        </div>

        {/* Empty State Guard */}
        {orders.length === 0 ? (
          <div className="bg-white p-12 rounded-xl shadow-xs border border-neutral-200 text-center py-16">
            <div className="w-16 h-16 bg-neutral-100 text-neutral-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              📦
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-1">
              No orders found
            </h3>
            <p className="text-neutral-500 text-sm mb-6 max-w-sm mx-auto">
              You haven't placed any orders with us yet. Start exploring our marketplace!
            </p>
            <Link
              to="/"
              className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors shadow-xs"
            >
              Start Shopping Now
            </Link>
          </div>
        ) : (
          /* Order History Cards List */
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-xs border border-neutral-200 overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                {/* Order Meta Header */}
                <div className="bg-neutral-50 p-4 sm:p-6 border-b border-neutral-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-6 text-sm">
                    <div>
                      <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                        Date Placed
                      </span>
                      <span className="font-semibold text-neutral-800">
                        {order.date}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                        Total Amount
                      </span>
                      <span className="font-bold text-neutral-900">
                        {formatZAR(order.total)}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                        Order Number
                      </span>
                      <span className="font-mono text-neutral-800 font-medium">
                        {order.id}
                      </span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${
                      order.status === "Delivered"
                        ? "bg-emerald-100 text-emerald-800"
                        : order.status === "Processing"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                {/* Itemized Contents */}
                <div className="p-4 sm:p-6 divide-y divide-neutral-100">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg bg-neutral-100 border border-neutral-200 shrink-0"
                        />
                        <div>
                          <h4 className="font-bold text-neutral-900 text-base">
                            {item.name}
                          </h4>
                          <p className="text-xs text-neutral-500 mt-0.5">
                            Quantity: <span className="font-semibold text-neutral-700">{item.quantity}</span>
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-neutral-900 text-base">
                          {formatZAR(item.price * item.quantity)}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {formatZAR(item.price)} each
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Footer Actions */}
                <div className="bg-neutral-50/50 px-4 py-3 sm:px-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500">
                  <span>Ship to: <strong className="text-neutral-700">{order.shippingAddress}</strong></span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">
                    View Invoice &rarr;
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}