import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

//Middleware that logs the action type, payload, and the current state before and after the action is passed through the store
const loggerMiddleware = store => next => action => {
  if(!action.type) {
    return next(action);
  }

  console.log('type: ', action.type) //logs the action type
  console.log('payload: ', action.payload) //logs the action payload
  console.log('currentState: ', store.getState()) //logs the current state

  next(action);

  console.log('next state: ', store.getState()) //logs the next state
}

// array of middlewares
const middleWares = [loggerMiddleware];

// configure the store with the rootReducer and middlewares
const store = configureStore({
  reducer: rootReducer,
  middleware: middleWares,
});

export default store;