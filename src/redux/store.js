import AsyncStorage from "@react-native-community/async-storage";
import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
// import { createLogger } from "redux-logger";

import rootReducer from "./";

const persistConfig = {
  key: "root2",
  keyPrefix: "",
  storage: AsyncStorage,
  whitelist: ["login", "cart", "user"],
  /*
	blacklist: [
		'productos',
	  ],
	  */
};

/* const middlewares = [];

if (__DEV__) {
  middlewares.push(createLogger());
} */

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(/* applyMiddleware(...middlewares) */)
);

export const persistor = persistStore(store);
