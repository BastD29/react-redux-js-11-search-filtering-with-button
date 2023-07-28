import { call, fork, put, takeLatest } from "redux-saga/effects";
import { GetCampaigns } from "../../services/campaigns.service";

function* fetchRecipes() {
  try {
    const response = yield call(GetCampaigns);

    yield put({ type: "allRecipes/loadData", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchSaga() {
  yield takeLatest("allRecipes/fetchData", fetchRecipes);
}

export const fetchSagas = [fork(watchFetchSaga)];
