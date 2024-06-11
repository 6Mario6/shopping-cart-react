import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import "./Cart.css";
import { useCart } from "../hooks/useCart";
import { CartProduct } from "./Products.types";

type CartItemProps = Pick<
  CartProduct,
  "thumbnail" | "price" | "title" | "quantity"
> & {
  addCart: () => void;
};

const CartItem = ({
  thumbnail,
  price,
  title,
  quantity,
  addCart,
}: CartItemProps) => {
  return (
    <li>
      <img src={thumbnail} alt="" />
      <div>
        <strong>{title}</strong> - {price}
      </div>
      <footer>
        <small>Qt: {quantity}</small>
        <button onClick={addCart}> + </button>
      </footer>
    </li>
  );
};

export const Cart = () => {
  const cartCheckboxId = useId();
  const { cart, clearCart, addCart } = useCart();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              addCart={() => addCart(product)}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
