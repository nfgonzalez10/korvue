import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { UserInterface } from "src/interfaces";
import { successUserData, errorUserData } from "src/reducers";

const getUser = () =>
  axios.get<UserInterface>(
    "https://evoteam-verasoft.github.io/data/summary.json"
  );

function* fetchUserSaga() {
  try {
    const response: AxiosResponse<UserInterface> = yield call(() => getUser());
    yield put(successUserData(response.data));
  } catch (e) {
    const errorMessage = "Error fetch user";
    yield put(errorUserData(errorMessage));
  }
}

function* watchUserSaga() {
  yield takeEvery("user/fetchUserData", fetchUserSaga);
}

export default watchUserSaga;
