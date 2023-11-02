import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getTickerListAPI,
  getWriteupDetailsAPI,
} from "../../services/writeupServices";
import { IAPIResponseSchema } from "./authSlice";

export interface IWriteupSliceInitialState {
  isLoading: boolean;
  isLoadingDetails: boolean;
  selectedTicker: string | null;
  writupDetails: any;
  tickerList: string[];
  isError: boolean;
}

const initialState: IWriteupSliceInitialState = {
  isLoading: false,
  isLoadingDetails: false,
  writupDetails: null,
  selectedTicker: null,
  tickerList: [],
  isError: false,
};

export const getTickerList = createAsyncThunk<IAPIResponseSchema<string[]>>(
  "writeup/ticker/list",
  async (_, thunkApi) => {
    try {
      const source = axios.CancelToken.source();
      thunkApi.signal.addEventListener("abort", () => {
        source.cancel();
      });
      const result = await getTickerListAPI(source);
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

export const getWriteupDetails = createAsyncThunk<
  IAPIResponseSchema<string[]>,
  string
>("writeup/details", async (ticker: string, thunkApi) => {
  try {
    const source = axios.CancelToken.source();
    thunkApi.signal.addEventListener("abort", () => {
      source.cancel();
    });
    let body = JSON.stringify({ fields: [] });
    const result = await getWriteupDetailsAPI(ticker, body, source);
    if (result.data) return result.data;
    return result;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
    return thunkApi.rejectWithValue(err.response.data);
  }
});

export const writeupSlice = createSlice({
  name: "writeup",
  initialState,
  reducers: {
    setSelectedTicker: (state, action) => {
      state.selectedTicker = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTickerList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTickerList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tickerList = action.payload.data;
      })
      .addCase(getTickerList.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getWriteupDetails.pending, (state) => {
        state.isLoadingDetails = true;
      })
      .addCase(getWriteupDetails.fulfilled, (state, action) => {
        state.isLoadingDetails = false;
        state.writupDetails = action.payload.data;
      })
      .addCase(getWriteupDetails.rejected, (state) => {
        state.isLoadingDetails = false;
        state.isError = true;
      });
  },
});

export const { setSelectedTicker } = writeupSlice.actions;

export default writeupSlice.reducer;
