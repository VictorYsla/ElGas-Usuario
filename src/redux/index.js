import { combineReducers } from "redux";

import login, { actualizarLogin } from "./reducer/login";
import navigation, {
  actualizarNavigation,
  actualizarUbicacion,
} from "./reducer/navigation";
import cart, { UpdateCart } from "./reducer/cart";
import products, { fetchProducts } from "./reducer/products";

export default combineReducers({
  login,
  navigation,
  cart,
  products,
});

export const actions = {
  actualizarLogin,
  actualizarNavigation,
  actualizarUbicacion,
  UpdateCart,
  fetchProducts,
};
