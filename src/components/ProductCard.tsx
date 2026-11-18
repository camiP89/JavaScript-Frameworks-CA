import type { Product } from "../types/Product";
import { Link } from "react-router-dom";

type ProductCardProps = { product: Product };

function ProductCard({ product }: ProductCardProps) {
  const hasDiscount =
    product.price > 0 && product.discountedPrice < product.price;

  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.price - product.discountedPrice) / product.price) * 100,
      )
    : 0;

  return (
    <article className="group relative overflow-hidden rounded-lg shadow-lg flex flex-col h-full bg-neutral-soft border border-caramel">
      {hasDiscount && (
        <span className="absolute top-3 right-3 z-10 rounded-lg bg-amber px-2 py-1 text-xs font-semibold text-dark">
          {discountPercentage}% OFF
        </span>
      )}

      <div className="aspect-square w-full overflow-hidden">
        <img
          src={product.image.url}
          alt={product.image.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3>{product.title}</h3>

        <p className="text-amber">⭐{product.rating} / 5</p>

        <div className="flex items-center gap-2 mb-4">
          <p className="text-base font-medium md:text-lg lg:text-xl">
            £{product.discountedPrice.toFixed(2)}
          </p>

          {hasDiscount && (
            <p className="text-xs md:text-base lg:text-lg text-berry line-through">
              £{product.price.toFixed(2)}
            </p>
          )}
        </div>

        <Link
          to={`/productDetails/${product.id}`}
          className="mt-auto block rounded-lg bg-berry px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-caramel"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
