import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();

  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="product-card">
      <img
        src={product.image || "/placeholder.png"}
        alt={product.name}
        className="product-card-image"
        loading="lazy"
      />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">{formatCurrency(product.price)}</p>

        <div className="product-card-actions">
          <Link className="btn btn-secondary" to={`/products/${product.id}`}>
            View Details
          </Link>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product.id)}
          >
            Add to Cart {quantity > 0 && `(${quantity})`}
          </button>
        </div>
      </div>
    </div>
  );
}