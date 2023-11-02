import { Box } from "@mui/material";
import TickerAutoComplete from "../../util/tickerAutocomplete";
import useWriteup from "./Writeup.hooks";
import WriteupContent from "./WriteupContent";

const Writeup = () => {
  const { isLoading, tickers, selectedTicker, handleAutoComplete } =
    useWriteup();
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={2} p={"0 20px"}>
        <TickerAutoComplete
          isLoading={isLoading}
          value={selectedTicker ?? null}
          options={tickers}
          handleAutoComplete={handleAutoComplete}
          containerStyle={{ width: "20%", maxWidth: "250px" }}
          inputStyle={{ borderBottom: "1px solid #405270" }}
        />
        {selectedTicker && <WriteupContent />}
      </Box>
    </>
  );
};

export default Writeup;
