import { useContext } from "react";
import { Filter } from "../components/Filters.types";
import { FiltersContext } from "../context/filters";
import { Product } from "../components/Products.types";

type Filters = {
  filters: Filter;
  setFilters: (updateFn: (prevState: Filter) => Filter) => void;
};

export const useFilters = () => {
  const { filters, setFilters } = useContext<Filters>(FiltersContext); // Add the type for FiltersContext
  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };
  return { filters, setFilters, filterProducts };
};
