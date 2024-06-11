import { CartProduct, Product } from "../components/Products.types";
type AddToCartAction = {
  type: typeof CART_ACTION_TYPES.ADD_TO_CART;
  payload: Product;
};

type RemoveFromCartAction = {
  type: typeof CART_ACTION_TYPES.REMOVE_FROM_CART;
  payload: Product;
};

type ClearCartAction = {
  type: typeof CART_ACTION_TYPES.CLEAR_CART;
  payload?: never;
};

type CartAction = AddToCartAction | RemoveFromCartAction | ClearCartAction;

export const cartInitialState = [] as CartProduct[];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

export const cartReducer = (state: CartProduct[], action: CartAction) => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      if (action.payload) {
        const { id } = action.payload;
        const productInCartIndex = state.findIndex(
          (currentProduct) => currentProduct.id === id
        );
        if (productInCartIndex >= 0) {
          const newState = structuredClone(state);
          newState[productInCartIndex].quantity += 1;
          return newState;
        }
        return [...state, { ...action.payload, quantity: 1 }];
      }
      return state;
    }
    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      if (action.payload) {
        const { id } = action.payload;
        return state.filter((product) => product.id !== id);
      }
      return state;
    }
    case CART_ACTION_TYPES.CLEAR_CART: {
      return cartInitialState;
    }
  }
  return state;
};
