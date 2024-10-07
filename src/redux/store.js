import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import appReducer from "./reducer/appSlice";
import userReducer from "./reducer/userSlice";
import cartReducer from "./reducer/cartSlice";
import paymentReducer from "./reducer/paymentSlice";
import addressReducer from "./reducer/addressSlice";
import orderReducer from "./reducer/orderSlice";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user", "cart", "app", "address"],
};

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  cart: cartReducer,
  payment: paymentReducer,
  address: addressReducer,
  order: orderReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
