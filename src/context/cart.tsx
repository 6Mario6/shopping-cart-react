import { ReactNode, createContext, useState } from "react";
import { Product } from "../components/Products.types";

export const CartContext = createContext({});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const addCart = (product: Product) => {
    setCart([...cart, product]);
    const productInCartIndex = cart.findIndex(
      (currentProduct) => currentProduct.id === product.id
    );
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      setCart(newCart);
    }
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
