import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function MyAccount() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="page container">
        <div className="auth-container">
          <h2>Access Restricted</h2>
          <p style={{ margin: "1rem 0" }}>Please sign in to view your account details.</p>
          <Link to="/auth" className="btn btn-primary btn-block">Sign In</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page container">
      <h1 className="page-title">My Account</h1>
      <div className="checkout-container">
        <div className="checkout-items">
          <h2 className="checkout-section-title">Profile Information</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" defaultValue={user.name || "Customer User"} readOnly />
            </div>
            <div>
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" defaultValue={user.email || "user@example.com"} readOnly />
            </div>
          </div>

          <h2 className="checkout-section-title" style={{ marginTop: "2rem" }}>Default Shipping Address</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label className="form-label">Street Address</label>
              <input type="text" className="form-input" defaultValue="123 Main Street" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label className="form-label">City</label>
                <input type="text" className="form-input" defaultValue="Johannesburg" />
              </div>
              <div>
                <label className="form-label">Postal Code</label>
                <input type="text" className="form-input" defaultValue="2000" />
              </div>
            </div>
            <button className="btn btn-primary" style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}>Save Address</button>
          </div>
        </div>

        <div className="checkout-summary">
          <h2 className="checkout-section-title">Quick Actions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <Link to="/orders" className="btn btn-secondary btn-block">View Order History</Link>
            <button onClick={logout} className="btn btn-secondary btn-block" style={{ color: "#dc3545", borderColor: "#dc3545" }}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}