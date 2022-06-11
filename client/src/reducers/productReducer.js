import { FETCH_PRODUCTS, FILTER_CATEGORY } from "../actions/types";

  const initState = { items: [], filteredItems: [], category: "" };
  
const ProductReducer = (state = initState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS:
        return { ...state, items: action.payload, filteredItems: action.payload };
      case FILTER_CATEGORY:
        return {
          ...state,
          filteredItems: action.payload.items,
          category: action.payload.category,
        };
  
      default:
        return state;
    }
  }

  export default ProductReducer
  