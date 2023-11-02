import { InputProps, TypographyProps } from "@mui/material";
import { CSSProperties, ChangeEvent } from "react";

export interface IThemeSchema {
  palette: any;
  typography: any;
  components?: any;
}

export interface IGlobalTableProps {
  row: any;
  list: any;
}

export interface IGlobalButtonProps {
  label: any;
  sublabel?: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
  type?: string;
}

export interface IGlobalImgProps {
  img: string;
  alt: string;
  style?: CSSProperties;
}

export interface IGlobaltextFieldProps {
  id?: string;
  value: string;
  label: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  errmsg?: string;
  type?: string;
  disabled?: boolean;
  style?: CSSProperties;
  placeholder?: string;
  showPassword?: boolean;
  InputProps?: InputProps;
}

export interface IGlobalTypoProps {
  id?: number;
  variant: TypographyProps["variant"];
  label: string;
  sublabel?: string;
  style?: CSSProperties;
}
