import type { Product } from "../types/Product";
import { useCart } from "../hooks/useCart";
import ToastMessage from "./Toast";
import { useState, useEffect } from "react";

type AddToCartButtonProps = {
  product: Product;
};

function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    if (!showToast) return;

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showToast]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          addToCart(product);
          setShowToast(true);
        }}
        className="rounded-lg bg-berry px-6 py-3 text-white font-semibold hover:bg-caramel mb-8"
      >
        Add to Cart
      </button>

      {showToast && <ToastMessage message="Added to cart!" type="success" />}
    </>
  );
}

export default AddToCartButton;
