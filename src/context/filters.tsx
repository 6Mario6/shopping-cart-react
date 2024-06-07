import { ReactNode, createContext, useState } from "react";
import { Filter } from "../components/Filters.types";

type Filters = {
  filters: Filter;
  setFilters: (updateFn: (prevState: Filter) => Filter) => void;
};

export const FiltersContext = createContext<Filters>({} as Filters);

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filter>({
    category: "all",
    minPrice: 0,
  });
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
