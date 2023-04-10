import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Orders } from "src/interfaces";

interface IOrderSlice {
  pending: boolean;
  error: string | null;
  orders: Orders | null;
}
const initialState: IOrderSlice = {
  pending: false,
  error: null,
  orders: null,
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    fetchOrderData: (state) => {
      state.pending = true;
    },
    successOrdersData: (state, action: PayloadAction<Orders>) => {
      state.pending = false;
      state.error = null;
      state.orders = action.payload;
    },
    errorOrdersData: (state, action: PayloadAction<string>) => {
      state.pending = false;
      state.orders = null;
      state.error = action.payload;
    },
  },
});

export const { fetchOrderData, successOrdersData, errorOrdersData } =
  orderSlice.actions;

export default orderSlice.reducer;
