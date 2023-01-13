import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { rootReducer } from "./rootReducer";

const middleWares = [logger];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleWares,
});

export default store;
