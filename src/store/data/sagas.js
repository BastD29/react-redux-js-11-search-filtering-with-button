import { call, fork, put, takeLatest } from "redux-saga/effects";
import { GetData } from "../../services/data.service";

function* fetchRecipes() {
  try {
    const response = yield call(GetData);

    yield put({ type: "data/loadData", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchSaga() {
  yield takeLatest("data/fetchData", fetchRecipes);
}

export const fetchSagas = [fork(watchFetchSaga)];
