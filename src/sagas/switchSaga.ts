import { put, takeEvery } from "redux-saga/effects";
import { setPending } from "src/reducers";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function* delaySwitch() {
  yield delay(3000);
  yield put(setPending(false));
}

function* watchUserSaga() {
  yield takeEvery("switch/executeSwitch", delaySwitch);
}

export default watchUserSaga;
