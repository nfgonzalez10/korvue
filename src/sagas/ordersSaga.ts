import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { Orders } from "src/interfaces";
import { successOrdersData, errorOrdersData } from "src/reducers";

const getUser = () =>
  axios.get<Orders>("https://evoteam-verasoft.github.io/data/orders.json");

function* fetchOrdersSaga() {
  try {
    const response: AxiosResponse<Orders> = yield call(() => getUser());
    yield put(successOrdersData(response.data));
  } catch (e) {
    const errorMessage = "Error fetch user";
    yield put(errorOrdersData(errorMessage));
  }
}

function* watchOrdersSaga() {
  yield takeEvery("orders/fetchOrderData", fetchOrdersSaga);
}

export default watchOrdersSaga;
