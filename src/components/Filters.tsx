import { useState } from "react";
import "./Filters.css";
import { type Filter } from "./Filters.types";
export const Filters = ({
  changeFilters,
}: {
  changeFilters: (updateFn: (prevState: Filter) => Filter) => void;
}) => {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(parseInt(event.target.value));
    changeFilters((prevState: Filter) => ({
      ...prevState,
      minPrice: parseFloat(event.target.value),
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id="price"
          min="0"
          max="100"
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select id="category">
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </section>
  );
};
