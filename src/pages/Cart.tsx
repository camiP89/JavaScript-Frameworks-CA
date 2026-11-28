import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useState, useEffect } from "react";
import ToastMessage from "../components/Toast";

function Cart() {
  const { cartItems, addToCart, minusFromCart, deleteFromCart, clearCart } =
    useCart();
  const navigate = useNavigate();
  const postage = 5.0;
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    if (!showToast) return;

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showToast]);

  const cartSubtotal = cartItems.reduce(
    (total, item) => total + item.product.discountedPrice * item.quantity,
    0,
  );

  const cartTotal = cartSubtotal + (cartItems.length > 0 ? postage : 0);

  return (
    <main className="min-h-screen bg-cream">
      <div className="mx-auto w-full max-w-4xl px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold text-berry">Your Cart</h1>

        {cartItems.length === 0 && <p>Your cart is empty.</p>}

        {cartItems.map((item) => (
          <div
            className="mb-4 flex gap-4 border-b border-neutral-soft py-4"
            key={item.product.id}
          >
            <img
              src={item.product.image.url}
              alt={item.product.image.alt}
              className="w-24 h-24 object-cover rounded-lg"
            />

            <div>
              <p className="font-semibold text-base text-dark">
                {item.product.title}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <p className="text-sm">Quantity: {item.quantity}</p>

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
                  onClick={() => {
                    deleteFromCart(item.product);
                    setShowToast(true);
                  }}
                  className="text-berry hover:underline"
                >
                  Remove
                </button>
              </div>

              <p>Price: £{item.product.discountedPrice.toFixed(2)}</p>
            </div>
          </div>
        ))}

        {showToast && (
          <ToastMessage message="Item removed from cart!" type="success" />
        )}

        <div className="mt-8 space-y-2 bg-neutral-soft/50 py-3 px-3 rounded-xl">
          <div className="flex justify-between">
            <span>Cart Subtotal:</span>
            <span>£{cartSubtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Postage:</span>
            <span>£{(cartItems.length > 0 ? postage : 0).toFixed(2)}</span>
          </div>

          <hr />

          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>£{cartTotal.toFixed(2)}</span>
          </div>

          <button
            type="button"
            onClick={() => {
              clearCart();
              navigate("/checkout-success");
            }}
            disabled={cartItems.length === 0}
            className="rounded-lg bg-berry px-6 py-3 font-semibold text-white hover:bg-caramel disabled:opacity-50"
          >
            Checkout
          </button>
        </div>

        <Link to="/" className="inline-block mt-3 text-berry hover:underline">
          ← Back to Shop
        </Link>
      </div>
    </main>
  );
}

export default Cart;
