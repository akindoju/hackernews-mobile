import { createStore, applyMiddleware } from "redux";

import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistedReducer } from "./rootReducer";

const middlewares = [logger, thunk];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);
export const persistor = persistStore(store);
