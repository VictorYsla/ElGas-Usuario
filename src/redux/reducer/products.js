export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProducts = (products) => ({
  type: FETCH_PRODUCTS,
  products,
});

const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};
