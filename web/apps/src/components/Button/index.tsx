import { Button } from "@mui/material";
import { IGlobalButtonProps } from "../../types";

const ContainedButton = ({
  label,
  onClick,
  disabled,
  style,
  type,
}: IGlobalButtonProps) => {
  const buttonType = type === "reset" || type === "submit" ? type : "button";
  return (
    <Button
      variant="contained"
      color="primary"
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
      sx={{ width: "fit-content" }}
      style={{ ...style }}
    >
      {label}
    </Button>
  );
};

const OutlinedButton = ({
  label,
  onClick,
  disabled,
  style,
  type,
}: IGlobalButtonProps) => {
  const buttonType = type === "reset" || type === "submit" ? type : "button";
  return (
    <Button
      variant="outlined"
      color="primary"
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
      sx={{ width: "fit-content" }}
      style={{ ...style }}
    >
      {label}
    </Button>
  );
};

const TextButton = ({
  label,
  onClick,
  disabled,
  style,
}: IGlobalButtonProps) => {
  return (
    <Button
      variant="text"
      color="primary"
      onClick={onClick}
      disabled={disabled}
      sx={{
        width: "fit-content",
        color: "#405270",
        "&:hover": {
          color: "green",
          textDecoration: "underline",
        },
      }}
      style={{ ...style }}
    >
      {label}
    </Button>
  );
};

export { ContainedButton, OutlinedButton, TextButton };
