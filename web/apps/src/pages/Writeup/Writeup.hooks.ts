import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setTitle } from "../../store/reducers/topbarSlice";
import {
  getTickerList,
  getWriteupDetails,
  setSelectedTicker,
} from "../../store/reducers/writeUpSlice";

const useWriteup = () => {
  const dispatch = useAppDispatch();
  const {
    isLoading,
    tickerList: tickers,
    selectedTicker,
  } = useAppSelector((state) => state.writeup);

  function handleAutoComplete(_: any, newValue: string) {
    dispatch(setSelectedTicker(newValue));
  }

  useEffect(() => {
    let promise = dispatch(getTickerList());
    promise.unwrap().catch((err) => console.log(err));
    return () => {
      promise.abort();
    };
  }, []);

  useEffect(() => {
    dispatch(setTitle("Write Up"));
  }, []);

  return { isLoading, tickers, selectedTicker, handleAutoComplete };
};

const useWriteupContent = () => {
  const dispatch = useAppDispatch();
  const {
    isLoadingDetails,
    writupDetails: details,
    selectedTicker,
  } = useAppSelector((state) => state.writeup);

  useEffect(() => {
    if (selectedTicker) {
      let promise = dispatch(getWriteupDetails(selectedTicker));
      promise.unwrap().catch((err) => console.log(err));
      return () => {
        promise.abort();
      };
    }
  }, [selectedTicker]);

  return { isLoadingDetails, details };
};

export { useWriteupContent };

export default useWriteup;
