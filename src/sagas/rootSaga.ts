import { all } from "redux-saga/effects";
import watchUserSaga from "./userSaga";
import switchSaga from "./switchSaga";
import ordersSaga from "./ordersSaga";

export default function* rootSaga() {
  yield all([watchUserSaga(), switchSaga(), ordersSaga()]);
}
