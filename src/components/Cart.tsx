import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import "./Cart.css";

export const Cart = () => {
  const cartCheckboxId = useId();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          <li>
            <img src="" alt="" />
            <div>
              <strong>iphone</strong> - $1000
            </div>
            <footer>
              <small>Qt</small>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
