import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Township Thengisa
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/checkout" className="navbar-link">
            Cart
          </Link>
          <Link to="/orders" className="navbar-link">
            My Orders
          </Link>
          <Link to="/account" className="navbar-link">
            My Account
          </Link>
        </div>
        <div className="navbar-auth">
          {!user ? (
            <div className="navbar-auth-links">
              <Link to="/auth?mode=login" className="btn btn-secondary">
                Login
              </Link>
              <Link to="/auth?mode=signup" className="btn btn-primary">
                Signup
              </Link>
            </div>
          ) : (
            <div className="navbar-user">
              <span className="navbar-greeting">Hello, {user.email}</span>
              <button className="btn btn-secondary" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}