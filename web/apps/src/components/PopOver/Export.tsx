import { Menu, MenuItem, Typography } from "@mui/material";
import { PopOverProps } from "./Index";
import { exportPopOver } from "./util";

const ExportPopOver = ({ open, handleClose }: PopOverProps) => {
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
          "& .css-6hp17o-MuiList-root-MuiMenu-list": {
            width: "210px",
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
        <MenuItem
          onClick={handleClose}
          key={item.id}
          disabled={item.disabled}
          sx={{
            padding: "12px 28px",
            textAlign: "center",
            ml: "5px",
            mr: "5px",
            "&:hover": {
              backgroundColor: item.bgColor,
              borderRadius: "12px",
              padding: "12px 28px",
              ml: "5px",
              mr: "5px",
            },
            "&:focus": {
              backgroundColor: item.bgColor,
              borderRadius: "12px",
              padding: "12px 28px",
              ml: "5px",
              mr: "5px",
            },
            "&:active": {
              backgroundColor: item.bgColor,
              borderRadius: "12px",
              padding: "12px 28px",
              ml: "5px",
              mr: "5px",
            },
          }}
        >
          <Typography
            variant="h6"
            color={item.color}
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
