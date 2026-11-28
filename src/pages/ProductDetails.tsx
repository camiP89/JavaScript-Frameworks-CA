import { useState, useEffect } from "react";
import { fetchSingleProductById } from "../api/productsApi";
import type { Product } from "../types/Product";
import { Link, useParams } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";

function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProductDetails() {
      setIsLoading(true);
      setError(null);
      setProduct(null);

      if (!id) {
        setError("Product ID is missing");
        setIsLoading(false);
        return;
      }

      try {
        const data = await fetchSingleProductById(id);
        setProduct(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchProductDetails();
  }, [id]);

  return (
    <main className="min-h-screen bg-cream">
      <div className="mx-auto w-full max-w-4xl px-4 py-8">
        {isLoading ? (
          <p>Loading product...</p>
        ) : error ? (
          <p>Could not load product: {error}</p>
        ) : product ? (
          <section>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <img
                src={product.image.url}
                alt={product.image.alt}
                className="w-full max-w-md rounded-lg mb-4"
              />
              <div>
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h1 className=" text-2xl font-bold text-berry">
                    {product.title}
                  </h1>

                  <p className="text-amber text-sm">⭐{product.rating} / 5</p>
                </div>

                <p className="text-base font-medium text-dark mb-6">
                  {product.description}
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <p className="text-xl font-medium">
                    £{product.discountedPrice.toFixed(2)}
                  </p>

                  {product.price > product.discountedPrice && (
                    <p className="text-sm text-gray-500 line-through">
                      £{product.price.toFixed(2)}
                    </p>
                  )}
                </div>

                <AddToCartButton product={product} />

                <p className="text-sm font-light text-caramel mb-4">
                  {product.tags.join(", ")}
                </p>
              </div>
            </div>

            <div className="border-2 border-caramel rounded-lg p-3 mb-4">
              <h3 className="text-xl font-bold text-berry mb-2">Reviews</h3>

              {product.reviews.length > 0 ? (
                product.reviews.map((review) => (
                  <div key={review.id}>
                    <p className="text-base font-medium text-dark">
                      {review.username}
                    </p>
                    <p>⭐{review.rating} / 5</p>

                    <p className="text-base text-dark">{review.description}</p>
                  </div>
                ))
              ) : (
                <p>No reviews yet.</p>
              )}
            </div>
          </section>
        ) : (
          <p>Product not found.</p>
        )}
        <Link to="/" className="text-berry hover:underline">
          ← Back to Shop
        </Link>
      </div>
    </main>
  );
}

export default ProductDetails;
