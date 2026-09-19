import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-xs py-4">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
        
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-neutral-900 tracking-tight">
          Township Thengisa
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 font-medium text-neutral-700">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/cart" className="hover:text-blue-600 transition-colors">Cart</Link>
          <Link to="/orders" className="hover:text-blue-600 transition-colors">My Orders</Link>
          <Link to="/account" className="hover:text-blue-600 transition-colors">My Account</Link>
        </div>

        {/* Auth Action Buttons */}
        <div className="flex items-center gap-2">
          <Link
            to="/auth"
            state={{ isLogin: true }}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-neutral-600 hover:bg-neutral-700 rounded-lg transition-colors inline-block text-center"
          >
            Login
          </Link>
          <Link
            to="/auth"
            state={{ isLogin: false }}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors inline-block text-center"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}