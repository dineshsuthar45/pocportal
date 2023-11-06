import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { PopOverProps } from "./Index";
import { Logout } from "@mui/icons-material";
import { imgStyle } from "../../pages/topBar/style";
import { topBarlogo } from "../../pages/topBar/util";
import ImageComp from "../Image";
import { exportPopOver } from "./util";

const ExportPopOver = ({ open, handleClose }: PopOverProps) => {
  const handleLogout = () => {
    alert("logOut");
  };
  return (
    <Menu
      id="message_menu"
      anchorEl={open}
      open={open}
      onClose={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {exportPopOver.map((item) => (
        <MenuItem onClick={handleClose} key={item.id}>
          <Typography
            variant="h6"
            color={"#467FD8"}
            lineHeight={"24px"}
            fontSize={"15px"}
            fontWeight={600}
            display={"flex"}
            alignItems={"center"}
            gap={2}
            onClick={item.handleAction}
          >
            <item.icon />
            {item.label}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default ExportPopOver;
