import { combineReducers } from "redux";

import login, { actualizarLogin } from "./reducer/login";
import navigation, {
  actualizarNavigation,
  actualizarUbicacion,
} from "./reducer/navigation";
import cart, { UpdateCart } from "./reducer/cart";
import products, { fetchProducts } from "./reducer/products";
import pushToken, { setPushToken } from "./reducer/pushToken";
import user, { setUser, clearUser } from "./reducer/user";

export default combineReducers({
  login,
  user,
  navigation,
  cart,
  products,
  pushToken,
});

export const actions = {
  actualizarLogin,
  actualizarNavigation,
  actualizarUbicacion,
  UpdateCart,
  fetchProducts,
  setPushToken,
  setUser,
  clearUser,
};
