import { Button, Typography } from "@mui/material";
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

const OutlinedIconButton = ({
  label,
  onClick,
  disabled,
  style,
  sublabel,
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
      style={{ ...style, borderRadius: "10px" }}
    >
      <Typography
        variant="subtitle1"
        display={"flex"}
        gap={2}
        alignItems={"center"}
        textTransform={"capitalize"}
      >
        {sublabel}
        {label}
      </Typography>
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

export { ContainedButton, OutlinedButton, TextButton, OutlinedIconButton };
