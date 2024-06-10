import { useContext } from "react";
import { CartContext } from "../context/cart";
import { Product } from "../components/Products.types";
type Cart = {
  cart: CartProduct[];
  addCart: (product: Product) => void;
  clearCart: () => void;
  removeFromCart: (product: Product) => void;
};
export const useCart = () => {
  const context = useContext<Cart>(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  const { cart, addCart, clearCart, removeFromCart } = context;
  return { cart, addCart, clearCart, removeFromCart };
};
