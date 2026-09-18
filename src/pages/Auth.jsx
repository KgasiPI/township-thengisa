import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Auth() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();

  // Read mode from query string (e.g. ?mode=login or ?mode=signup)
  const mode = searchParams.get("mode");
  const [isLogin, setIsLogin] = useState(mode !== "signup");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Keep state in sync whenever searchParams change
  useEffect(() => {
    if (mode === "signup") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [mode]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    // Pass user details to AuthContext
    login({ email: formData.email });
    navigate("/");
  };

  return (
    <div className="page container">
      <div className="auth-container">
        <h2>{isLogin ? "Log In" : "Sign Up"}</h2>

        {error && <div className="error-message">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <div className="auth-switch">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <Link to="/auth?mode=signup" className="auth-link">
                Sign Up
              </Link>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <Link to="/auth?mode=login" className="auth-link">
                Login
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}