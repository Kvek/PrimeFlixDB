import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface UserStateInterface {
  authenticated: boolean;
}

const initialState: UserStateInterface = { authenticated: false };

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setAuthenticationState: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;

export const { setAuthenticationState } = actions;
export const user = reducer;
