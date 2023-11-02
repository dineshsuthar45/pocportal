import { CancelTokenSource } from "axios";
import { TICKERS, WRITE_UP } from "../util/constants";
import { apiInstance } from "../config/axiosConfig";

export const getTickerListAPI = async (source: CancelTokenSource) => {
  return await apiInstance.get(TICKERS, {
    cancelToken: source.token,
  });
};

export const getWriteupDetailsAPI = async (
  ticker: string,
  body: string,
  source: CancelTokenSource
) => {
  return await apiInstance.post(WRITE_UP + ticker, body, {
    cancelToken: source.token,
  });
};
