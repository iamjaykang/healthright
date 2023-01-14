import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// array of middlewares
// Conditionally enable logger
const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

// configure the store with the rootReducer and middlewares
export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
});

export const persistor = persistStore(store);
