import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

//?creating store by combining the reducers  of root reducer
//? middlewares run before the actions are passed to the individual reducers

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
// const middlewares=[];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
const exportStore = { store, persistor };
export default exportStore;
