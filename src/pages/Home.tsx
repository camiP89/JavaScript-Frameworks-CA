import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import { fetchAllProducts } from "../api/productsApi";
import type { Product } from "../types/Product";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
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

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-cream p-4">
      <Hero />

      <h1 className="pt-4 text-4xl font-bold text-berry">
        Welcome to Allsorts!
      </h1>

      {isLoading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Could not load products: {error}</p>
      ) : (
        <ProductGrid products={products} />
      )}
    </main>
  );
}

export default Home;
