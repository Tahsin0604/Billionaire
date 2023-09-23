export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_RANK":
      return { ...state, orderedBy: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "RESET":
      return { ...state, orderedBy: "lowToHigh", searchQuery: "" };
    default:
      return state;
  }
};
