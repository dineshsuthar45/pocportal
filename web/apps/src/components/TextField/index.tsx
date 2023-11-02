import { FormControl, TextField, FormHelperText } from "@mui/material";
import { IGlobaltextFieldProps } from "../../types";

const FilledTextField = ({
  id,
  value,
  label,
  onChange,
  name,
  style,
  type,
  errmsg,
  disabled,
  placeholder,
  showPassword = false,
  InputProps,
}: IGlobaltextFieldProps) => {
  return (
    <FormControl variant="filled" size="small">
      <TextField
        id={id}
        variant="filled"
        name={name}
        label={label}
        placeholder={placeholder}
        type={showPassword ? "text" : type}
        size="small"
        value={value}
        onChange={onChange}
        InputProps={InputProps}
        autoComplete="off"
        disabled={disabled}
        style={{ ...style, width: "100%" }}
      />
      {errmsg && (
        <FormHelperText
          id="helper-text-cPassword"
          sx={{ color: "#F44336", fontWeight: 600 }}
        >
          {errmsg}
        </FormHelperText>
      )}
    </FormControl>
  );
};
const OutlinedTextField = ({
  id,
  value,
  label,
  onChange,
  name,
  style,
  type,
  errmsg,
  disabled,
  placeholder,
  showPassword = false,
  InputProps,
}: IGlobaltextFieldProps) => {
  return (
    <FormControl variant="outlined" size="medium">
      <TextField
        id={id}
        variant="outlined"
        name={name}
        label={label}
        placeholder={placeholder}
        type={showPassword ? "text" : type}
        size="medium"
        value={value}
        onChange={onChange}
        InputProps={InputProps}
        autoComplete="off"
        disabled={disabled}
        style={{
          ...style,
          width: "100%",
          fontFamily: "Public Sans, sans-serif",
        }}
      />
      {errmsg && (
        <FormHelperText
          id="helper-text-cPassword"
          sx={{
            color: "#F44336",
            fontWeight: 600,
            fontFamily: "Public Sans, sans-serif",
          }}
        >
          {errmsg}
        </FormHelperText>
      )}
    </FormControl>
  );
};
export { FilledTextField, OutlinedTextField };
