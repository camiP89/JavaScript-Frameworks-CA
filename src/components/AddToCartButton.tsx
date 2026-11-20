import type { Product } from "../types/Product";
import { useCart } from "../hooks/useCart";

type AddToCartButtonProps = {
  product: Product;
};

function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className="rounded-lg bg-berry px-6 py-3 text-white font-semibold hover:bg-caramel mb-8"
    >
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
