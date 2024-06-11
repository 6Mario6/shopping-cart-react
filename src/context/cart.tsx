import { ReactNode, createContext, useReducer } from "react";
import { Product, CartProduct } from "../components/Products.types";
import { cartInitialState, cartReducer } from "../reducers/cart";
type Cart = {
  cart: CartProduct[];
  addCart: (product: Product) => void;
  clearCart: () => void;
  removeFromCart: (product: Product) => void;
};
export const CartContext = createContext<Cart>({} as Cart);

const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const addCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const removeFromCart = (product: Product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  return {
    state,
    addCart,
    clearCart,
    removeFromCart,
  };
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { state, addCart, clearCart, removeFromCart } = useCartReducer();
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
