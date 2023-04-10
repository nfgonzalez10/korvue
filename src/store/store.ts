import createSagaMiddleware, { SagaMiddleware } from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { userSlice, switchSlice, orderSlice } from "src/reducers";
import { rootSaga } from "src/sagas";

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    user: userSlice,
    switch: switchSlice,
    orders: orderSlice,
  },
  middleware: [sagaMiddleware, logger],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
