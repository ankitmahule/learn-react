import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
