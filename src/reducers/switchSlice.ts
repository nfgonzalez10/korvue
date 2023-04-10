import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISwitchSlice {
  currentValue: "sent" | "errors";
  pending: boolean;
}

const initialState: ISwitchSlice = {
  currentValue: "sent",
  pending: false,
};

const swithcSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    executeSwitch: (state, action: PayloadAction<ISwitchSlice>) => {
      state.currentValue = action.payload.currentValue;
      state.pending = action.payload.pending;
    },
    setPending: (state, action: PayloadAction<boolean>) => {
      state.pending = action.payload;
    },
  },
});

export const { executeSwitch, setPending } = swithcSlice.actions;

export default swithcSlice.reducer;
