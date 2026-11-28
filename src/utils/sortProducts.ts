import type { Product } from "../types/Product";

export function sortProducts(products: Product[], sortType: string): Product[] {
  const sortedProducts = [...products];

  if (sortType === "priceLow") {
    sortedProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
  }

  if (sortType === "priceHigh") {
    sortedProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
  }

  return sortedProducts;
}
