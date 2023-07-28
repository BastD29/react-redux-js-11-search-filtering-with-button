import createSagaMiddleware from "redux-saga";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootSaga from "../store/sagas";
import { rootReducer } from "./reducer";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
