import type { Product } from "../types/Product";
import { Link } from "react-router-dom";

type ProductCardProps = { product: Product };

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg shadow-lg flex flex-col h-full bg-neutral-soft border border-caramel">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={product.image.url}
          alt={product.image.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3>{product.title}</h3>

        <p className="text-amber">⭐{product.rating} / 5</p>

        <p>£{product.discountedPrice.toFixed(2)}</p>

        <Link
          to={`/productDetails/${product.id}`}
          className="mt-4 block rounded-lg bg-berry px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-caramel"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
