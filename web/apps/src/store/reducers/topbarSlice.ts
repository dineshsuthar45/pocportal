import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface autSliceStates {
  title: string;
  isLoading: boolean;
  isError: boolean;
}

const initialState: autSliceStates = {
  title: "Dashboard",
  isLoading: false,
  isError: false,
};

export const topBarSlice = createSlice({
  name: "topBar",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const {
  setTitle,
} = topBarSlice.actions;
export const title = (state: RootState) => state.topbar.title;

export default topBarSlice.reducer;
