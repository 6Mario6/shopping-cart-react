import { Filters } from "./Filters";
import { type Filter } from "./Filters.types";
export const Header = () => {
  return (
    <header>
      <h1>React Shop</h1>
      <Filters />
    </header>
  );
};
