import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "src/interfaces";

interface UserSlice {
  pending: boolean;
  error: string | null;
  user: UserInterface | null;
}
const initialState: UserSlice = {
  pending: false,
  error: null,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserData: (state) => {
      state.pending = true;
    },
    successUserData: (state, action: PayloadAction<UserInterface>) => {
      state.pending = false;
      state.error = null;
      state.user = action.payload;
    },
    errorUserData: (state, action: PayloadAction<string>) => {
      state.pending = false;
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const { fetchUserData, successUserData, errorUserData } =
  userSlice.actions;

export default userSlice.reducer;
