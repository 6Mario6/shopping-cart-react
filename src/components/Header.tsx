import { Filters } from "./Filters";
import { type Filter } from "./Filters.types";
export const Header = ({
  changeFilters,
}: {
  changeFilters: (updateFn: (prevState: Filter) => Filter) => void;
}) => {
  return (
    <header>
      <h1>React Shop</h1>
      <Filters changeFilters={changeFilters} />
    </header>
  );
};
