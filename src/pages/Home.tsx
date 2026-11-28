import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import { fetchAllProducts } from "../api/productsApi";
import type { Product } from "../types/Product";
import { sortProducts } from "../utils/sortProducts";
import { searchProducts } from "../utils/search";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortType, setSortType] = useState("default");
  const [searchInput, setSearchInput] = useState("");
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

  const filteredProducts = searchProducts(products, searchInput);
  const sortedProducts = sortProducts(filteredProducts, sortType);

  return (
    <main className="min-h-screen bg-cream">
      <div className="flex w-full justify-center px-4 pt-4">
        <Hero />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-4">
        <h1 className="mb-6 text-2xl font-bold text-berry">All products</h1>
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <div className="w-full md:w-64">
            <label htmlFor="sort" className="mb-2 block font-medium text-dark">
              Sort by:
            </label>

            <select
              id="sort"
              value={sortType}
              onChange={(event) => setSortType(event.target.value)}
              className="w-full rounded-lg border border-caramel bg-white px-3 py-3"
            >
              <option value="default">Default</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
          </div>

          <div className="w-full md:flex-1">
            <label
              htmlFor="search-input"
              className="mb-2 block font-medium text-dark"
            >
              Search:
            </label>

            <input
              type="text"
              id="search-input"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder="Search products..."
              className="w-full rounded-lg border border-caramel bg-white px-3 py-3"
            />

            {searchInput.trim() !== "" && !isLoading && !error && (
              <div className="mt-2 rounded-lg border border-caramel bg-white">
                {filteredProducts.length > 0 ? (
                  filteredProducts.slice(0, 5).map((product) => (
                    <Link
                      key={product.id}
                      to={`/productDetails/${product.id}`}
                      className="block p-3 text-dark hover:bg-neutral-soft"
                    >
                      {product.title}
                    </Link>
                  ))
                ) : (
                  <p className="p-3 text-dark">No matching products found.</p>
                )}
              </div>
            )}
          </div>
        </div>

        {isLoading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p>Could not load products: {error}</p>
        ) : (
          <ProductGrid products={sortedProducts} />
        )}
      </div>
    </main>
  );
}

export default Home;
