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
  username: string;
  role: string;
  token: string;
  userid: string;
  image_url: string;
  preferred_lng: string;
}

const initialState: autSliceStates = {
  isLoading: false,
  data: null,
  isError: false,
};

export const loginUser = createAsyncThunk<
  IAPIResponseSchema<ILogindata>,
  ILoginSchema
>("auth/login", async (payload: ILoginSchema, thunkApi) => {
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
});

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
        state.data = action.payload.data;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default authSlice.reducer;
