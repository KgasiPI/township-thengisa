import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import MyOrders from "./pages/MyOrders";
import MyAccount from "./pages/MyAccount";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";

import "./index.css";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-neutral-100 font-sans text-neutral-800">
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              {/* Core Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Checkout />} /> {/* Map /cart to Checkout or your Cart component */}
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/orders" element={<MyOrders />} />
              <Route path="/account" element={<MyAccount />} />

              {/* Authentication Routes (Navbar links to /login & /signup) */}
              <Route path="/auth" element={<Auth />} />
              <Route path="/login" element={<Auth />} />
              <Route path="/signup" element={<Auth />} />

              {/* Case-sensitivity & Catch-all Fallbacks */}
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/Home" element={<Navigate to="/" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}