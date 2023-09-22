import { createContext, useReducer } from "react";

import { filterReducer } from "./filterReducer";

export const FilterContext = createContext();
const Context = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    orderedBy: "lowToHigh",
    searchQuery: "",
  });
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export default Context;
