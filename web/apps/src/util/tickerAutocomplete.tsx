import React from "react";
import { Autocomplete, Box, FormControl, TextField } from "@mui/material";
import { InlineLoader, Loader } from "./loader";

interface Props {
  isLoading: boolean;
  options: string[];
  value: string | null;
  handleAutoComplete: (e: any, newValue: any) => void;
  containerStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}
const TickerAutoComplete = ({
  isLoading,
  options,
  value,
  handleAutoComplete,
  containerStyle,
  inputStyle,
}: Props) => {
  return (
    <FormControl variant="filled" size="small" sx={{ ...containerStyle }}>
      <Autocomplete
        value={value}
        options={options}
        noOptionsText="No Data Found"
        onChange={handleAutoComplete}
        renderOption={(items: any, ticker) => (
          <Box component={"li"} {...items} key={ticker}>
            {ticker}
          </Box>
        )}
        renderInput={(params: any) => (
          <TextField
            {...params}
            label="Ticker"
            variant="filled"
            InputProps={{
              ...params.InputProps,
              style: { ...inputStyle },
              endAdornment: (
                <Box>
                  {isLoading && (
                    <InlineLoader
                      containerStyle={{
                        padding: "0px",
                        position: "relative",
                      }}
                      style={{ width: "20px", height: "20px" }}
                    />
                  )}
                  {params.InputProps.endAdornment}
                </Box>
              ),
            }}
          />
        )}
        loading={isLoading}
        loadingText={
          <Box p={1}>
            <Loader isLoading={isLoading} />
          </Box>
        }
      />
    </FormControl>
  );
};

export default TickerAutoComplete;
