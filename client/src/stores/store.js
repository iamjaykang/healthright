import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from "./rootSaga";

// configure the persistor
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// persist the reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// array of middlewares
// Conditionally enable logger
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean);

// configure the store with the rootReducer and middlewares
export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
});

// run the root saga
sagaMiddleware.run(rootSaga)

// create the persistor
export const persistor = persistStore(store);