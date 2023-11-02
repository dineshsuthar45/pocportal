import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import RightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Drawer, DrawerHeader } from "./style";
import { useState } from "react";
import logo from "../../assets/Image/WhiteFullLogo.png";
import ImageComp from "../../components/Image";
import { logoStyle } from "../Login/style";
import { Avatar } from "@mui/material";
import icon from "../../assets/Image/WhiteLogo.png";
import { sidebarItems } from "./util";
import WhiteScreen from "../whiteScreen";

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open ? (
            <ImageComp img={logo} alt={"logo"} style={logoStyle} />
          ) : (
            <Avatar src={icon} />
          )}

          <IconButton
            sx={{
              borderRadius: "50%",
              border: "1px solid #405270",
              backgroundColor: "#405270",
              color: "white",
              padding: 0,
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              transition: "left 0.3s ease",
              right: -13,
              "&:hover": {
                backgroundColor: "#405270",
              },
            }}
            onClick={open ? handleDrawerClose : handleDrawerOpen}
          >
            {theme.direction === "rtl" ? (
              open ? (
                <LeftIcon />
              ) : (
                <RightIcon />
              )
            ) : open ? (
              <RightIcon />
            ) : (
              <LeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List>
          {sidebarItems?.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              sx={{
                marginTop: item.id === 5 ? "65vh" : "0px",
              }}
              // onClick={() => navigate(item.to)}
            >
              <ListItemButton
                sx={{
                  justifyContent: open ? "initial" : "center",
                }}
              >
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <item.icon sx={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <WhiteScreen />
      </Box>
    </Box>
  );
}
