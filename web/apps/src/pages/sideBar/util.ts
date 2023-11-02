import Dashboard from "@mui/icons-material/Home";
import WriteUp from "@mui/icons-material/EnergySavingsLeaf";
import GamepadIcon from "@mui/icons-material/Gamepad";
import HeatPumpIcon from "@mui/icons-material/HeatPump";
import Logout from "@mui/icons-material/Logout";
import { SvgIconProps } from "@mui/material";
import { ComponentType } from "react";

interface MenuSchema {
  id: number;
  title: string;
  to: string;
  icon: ComponentType<SvgIconProps>;
}

export const sidebarItems: MenuSchema[] = [
  {
    id: 1,
    title: "Dashboard",
    to: "/",
    icon: Dashboard,
  },
  {
    id: 2,
    title: "Write Up",
    to: "/writeup",
    icon: WriteUp,
  },
  {
    id: 3,
    title: "Dashboard",
    to: "/",
    icon: GamepadIcon,
  },
  {
    id: 4,
    title: "Dashboard",
    to: "/",
    icon: HeatPumpIcon,
  },
  {
    id: 5,
    title: "Logout",
    to: "/logout",
    icon: Logout,
  },
];
