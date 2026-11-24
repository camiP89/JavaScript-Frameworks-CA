import { useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../types/Product";
import type { CartItem } from "../types/CartItem";
import { CartContext } from "./CartContext";

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return previousItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...previousItems, { product, quantity: 1 }];
    });
  };

  const minusFromCart = (product: Product) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return previousItems.map((item) =>
          item.product.id === product.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }

      return previousItems;
    });
  };

  const deleteFromCart = (product: Product) => {
    setCartItems((previousItems) => {
      return previousItems.filter((item) => item.product.id !== product.id);
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, minusFromCart, deleteFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
