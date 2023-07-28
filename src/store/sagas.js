import { all } from "redux-saga/effects";
import { fetchSagas } from "../store/data/sagas";

export default function* rootSaga() {
  yield all([...fetchSagas]);
}
