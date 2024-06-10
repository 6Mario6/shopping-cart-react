import { ReactNode, createContext, useState } from "react";
import { Product, CartProduct } from "../components/Products.types";
type Cart = {
  cart: CartProduct[];
  addCart: (product: Product) => void;
  clearCart: () => void;
  removeFromCart: (product: Product) => void;
};
export const CartContext = createContext<Cart>({} as Cart);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addCart = (product: Product) => {
    const productInCartIndex = cart.findIndex(
      (currentProduct) => currentProduct.id === product.id
    );
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }
    setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };
  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (product: Product) => {
    setCart((prevState) =>
      prevState.filter((cartProduct) => cartProduct.id !== product.id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
