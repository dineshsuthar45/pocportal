import { Typography } from "@mui/material";
import { IGlobalTypoProps } from "../../types";
import { CSSProperties } from "react";

const Typo = ({ label, variant, style, sublabel }: IGlobalTypoProps) => {
  return (
    <Typography variant={variant} color={"primary.main"} style={{ ...style }}>
      <span style={{ color: "grey.main", marginRight: "3px" }}>{sublabel}</span>
      {label}
    </Typography>
  );
};

const ColoredTypo = ({ label, variant, style }: IGlobalTypoProps) => {
  return (
    <Typography
      variant={variant}
      sx={{ fontWeight: 600, color: "primary.main" }}
      style={{ ...style }}
    >
      {label}
    </Typography>
  );
};

const Footer = ({ style }: { style?: CSSProperties }) => {
  return (
    <Typography
      variant={"body1"}
      sx={{ fontWeight: 600, color: "primary.main" }}
      style={{ ...style }}
    >
      <span style={{ color: "#898989", marginRight: "3px" }}>
        2023 Copyrights ©
      </span>
      JUNTO Capital Management LP
    </Typography>
  );
};

export { Typo, ColoredTypo, Footer };
