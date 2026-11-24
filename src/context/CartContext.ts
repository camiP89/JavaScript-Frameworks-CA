import { createContext } from "react";
import type { Product } from "../types/Product";
import type { CartItem } from "../types/CartItem";

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  minusFromCart: (product: Product) => void;
  deleteFromCart: (product: Product) => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);
