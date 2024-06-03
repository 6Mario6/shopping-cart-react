import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import { useState } from "react";
import { Product } from "./components/Products.types";
import { Header } from "./components/Header";
import { type Filter } from "./components/Filters.types";
function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState<Filter>({
    category: "all",
    minPrice: 0,
  });
  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filterProducts(products)} />
    </>
  );
}

export default App;
