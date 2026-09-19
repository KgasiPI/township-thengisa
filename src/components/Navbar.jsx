import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { 
  FaShoppingCart, 
  FaBoxOpen, 
  FaUserCircle, 
  FaSignInAlt, 
  FaUserPlus,
  FaStore
} from "react-icons/fa";
import { FiHome } from "react-icons/fi";

// Import logo image from assets folder
import logoImg from "../assets/Logofinal.jpg";

export default function Navbar() {
  const { cartItems } = useCart();

  // Calculate total number of units in the cart
  const totalItemCount = cartItems?.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  ) || 0;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-xs py-4 border-b border-neutral-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logoImg} 
            alt="Township Thengisa Logo" 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
          />
          <div className="flex items-center gap-2">
            <FaStore className="text-blue-600 text-lg shrink-0" />
            <span className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900 uppercase font-sans">
              Township <span className="text-blue-600">Thengisa</span>
            </span>
          </div>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 font-medium text-neutral-700">
          <Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
            <FiHome className="text-base text-neutral-500" />
            <span>Home</span>
          </Link>

          {/* Cart Link with Dynamic Badge */}
          <Link
            to="/cart"
            className="hover:text-blue-600 transition-colors inline-flex items-center gap-1.5 relative"
          >
            <FaShoppingCart className="text-base text-neutral-500" />
            <span>Cart</span>
            {totalItemCount > 0 && (
              <span className="inline-flex items-center justify-center bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full min-w-[20px] transition-all scale-100">
                {totalItemCount}
              </span>
            )}
          </Link>

          <Link to="/orders" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
            <FaBoxOpen className="text-base text-neutral-500" />
            <span>My Orders</span>
          </Link>
          <Link to="/account" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
            <FaUserCircle className="text-base text-neutral-500" />
            <span>My Account</span>
          </Link>
        </div>

        {/* Auth Action Buttons */}
        <div className="flex items-center gap-2">
          <Link
            to="/auth"
            state={{ isLogin: true }}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-neutral-600 hover:bg-neutral-700 rounded-lg transition-colors inline-flex items-center gap-2 justify-center"
          >
            <FaSignInAlt className="text-xs" />
            <span>Login</span>
          </Link>
          <Link
            to="/auth"
            state={{ isLogin: false }}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors inline-flex items-center gap-2 justify-center"
          >
            <FaUserPlus className="text-xs" />
            <span>Register</span>
          </Link>
        </div>

      </div>
    </nav>
  );
}