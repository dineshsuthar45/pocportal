import { ComponentType } from "react";
import {
  ProfileIcon,
  HelpIcon,
  SignOutIcon,
  PdfIcon,
  Docsicon,
  ExcelIcon,
  CsvIcon,
} from "../../assets/Svg";
import { SvgIconProps } from "@mui/material";
import Word from "../../assets/Image/word.png";

interface IProfileProps {
  id: number;
  icon: ComponentType<SvgIconProps>;
  label: string;
  handleAction: () => void;
}

interface IExportProps {
  id: number;
  icon: ComponentType<SvgIconProps>;
  bgColor: string;
  display: string;
  label: string;
  handleAction: () => void;
}

const handleProfile = () => {
  alert("I m from profile");
};

const handleHelp = () => {
  alert("I m from Help");
};

const handleLogOut = () => {
  alert(" i m going");
};

const profilePopOver: IProfileProps[] = [
  {
    id: 1,
    icon: ProfileIcon,
    label: "Profile Setting",
    handleAction: handleProfile,
  },
  {
    id: 2,
    icon: HelpIcon,
    label: "Help",
    handleAction: handleHelp,
  },
  {
    id: 3,
    icon: SignOutIcon,
    label: "Sign Out",
    handleAction: handleLogOut,
  },
];

const exportPopOver: IExportProps[] = [
  {
    id: 1,
    icon: PdfIcon,
    bgColor: "red",
    handleAction: handleHelp,
    label: "PDf",
    display: "none",
  },
  {
    id: 1,
    icon: Docsicon,
    bgColor: "blue",
    handleAction: handleHelp,
    label: "Word",
    display: "none",
  },
  {
    id: 1,
    icon: ExcelIcon,
    bgColor: "blue",
    handleAction: handleHelp,
    label: "Word",
    display: "none",
  },
  {
    id: 1,
    icon: CsvIcon,
    bgColor: "blue",
    handleAction: handleHelp,
    label: "Word",
    display: "none",
  },
];

export { profilePopOver, exportPopOver };
