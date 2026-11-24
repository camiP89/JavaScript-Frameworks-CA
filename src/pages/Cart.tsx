import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Cart() {
  const { cartItems, addToCart, minusFromCart, deleteFromCart } = useCart();
  const navigate = useNavigate();

  const postage = 5.0;

  const cartSubtotal = cartItems.reduce(
    (total, item) => total + item.product.discountedPrice * item.quantity,
    0,
  );

  const cartTotal = cartSubtotal + (cartItems.length > 0 ? postage : 0);

  return (
    <main className="min-h-screen bg-cream p-8">
      <h1 className="text-lg font-bold text-berry mb-6">Cart</h1>

      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      {cartItems.map((item) => (
        <div className="flex flex-row gap-4" key={item.product.id}>
          <img
            src={item.product.image.url}
            alt={item.product.image.alt}
            className="w-24 h-24 object-cover rounded-lg"
          />

          <div>
            <p>{item.product.title}</p>

            <div className="flex items-center gap-3">
              <p>Quantity: {item.quantity}</p>

              <button
                type="button"
                onClick={() => minusFromCart(item.product)}
                className="rounded border border-caramel px-3 py-1 text-berry"
              >
                -
              </button>

              <button
                type="button"
                onClick={() => addToCart(item.product)}
                className="rounded border border-caramel px-3 py-1 text-berry"
              >
                +
              </button>

              <button
                type="button"
                onClick={() => deleteFromCart(item.product)}
                className="text-berry hover:underline"
              >
                Remove
              </button>
            </div>

            <p>Price: £{item.product.discountedPrice.toFixed(2)}</p>
          </div>
        </div>
      ))}

      <div>
        <p>Cart Subtotal: £{cartSubtotal.toFixed(2)}</p>
        <p>Postage: £5.00</p>

        <p>Total: £{cartTotal.toFixed(2)}</p>

        <button
          type="button"
          onClick={() => navigate("/checkout-success")}
          disabled={cartItems.length === 0}
          className="rounded-lg bg-berry px-6 py-3 font-semibold text-white hover:bg-caramel disabled:opacity-50"
        >
          Checkout
        </button>
      </div>

      <Link to="/" className="text-berry hover:underline mt-3">
        ← Back to Shop
      </Link>
    </main>
  );
}

export default Cart;
