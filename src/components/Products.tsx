import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { Product } from "./Products.types";
import { useCart } from "../hooks/useCart";

export const Products = ({ products }: { products: Product[] }) => {
  const { addCart, cart, removeFromCart } = useCart();
  const checkProductInCart = (product: Product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - <span>{product.price}</span>
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? "red" : "#09f" }}
                  onClick={() =>
                    isProductInCart ? removeFromCart(product) : addCart(product)
                  }
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
