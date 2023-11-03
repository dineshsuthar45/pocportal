import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAPI } from "../../services/userServices";
import { ILoginSchema } from "../../pages/Login/Login.hooks";

export interface IAPIResponseSchema<T> {
  message: string;
  data: T;
  is_error: boolean;
}

export interface autSliceStates {
  isLoading: boolean;
  data: ILogindata | null;
  isError: boolean;
}

export interface ILogindata {
  access_token: string;
}

const initialState: autSliceStates = {
  isLoading: false,
  data: null,
  isError: false,
};

export const loginUser = createAsyncThunk<ILogindata, ILoginSchema>(
  "auth/login",
  async (payload: ILoginSchema, thunkApi) => {
    try {
      const result = await loginAPI(payload);
      if (result.data) return result.data;
      return result;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default authSlice.reducer;
