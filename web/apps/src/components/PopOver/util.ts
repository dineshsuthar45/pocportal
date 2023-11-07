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
  color: string;
  disabled: boolean;
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
    bgColor: "rgba(237, 103, 106, 0.20)",
    color: "#E5252A",
    handleAction: handleHelp,
    label: "Pdf",
    disabled: false,
  },
  {
    id: 1,
    icon: Docsicon,
    bgColor: "rgba(100, 181, 246, 0.20)",
    color: "#467FD8",
    handleAction: handleHelp,
    label: "Word",
    disabled: false,
  },
  {
    id: 1,
    icon: ExcelIcon,
    bgColor: "rgba(0, 115, 59, 0.20)",
    color: "#00733B",
    handleAction: handleHelp,
    label: "Word",
    disabled: false,
  },
  {
    id: 1,
    icon: CsvIcon,
    bgColor: "rgba(0, 115, 59, 0.20)",
    color: "#00733B",
    handleAction: handleHelp,
    label: "Word",
    disabled: true,
  },
];

export { profilePopOver, exportPopOver };
