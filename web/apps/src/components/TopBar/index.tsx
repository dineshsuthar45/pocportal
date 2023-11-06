import { Avatar } from "@mui/material";

import Box from "@mui/material/Box";
import { RootState, useAppSelector } from "../../store/store";
import { Typo } from "../../components/Typography";
import ProfilePopOver from "../../components/PopOver/Index";
import { useState } from "react";
import SwitchButton from "./SwitchButton";
import profileImg from "../../assets/Image/profileImg.png";
import { SettingIcon } from "../../assets/Svg";

const TopBar = () => {
  const topTitle = useAppSelector((state: RootState) => state.topbar.title);
  const [openConfDialog, setOpenConfDialog] = useState<null | HTMLElement>(
    null
  );

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"sticky"}
      top={0}
      boxShadow="0px 1px 2px 0px rgba(21, 30, 40, 0.08), 0px 2px 4px 0px rgba(13, 23, 33, 0.08)"
      p={2}
      bgcolor={"white"}
      zIndex={101}
    >
      <Typo
        variant="h6"
        label={topTitle}
        style={{
          textTransform: "capitalize",
          color: "#202226",
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "24px",
        }}
      />

      <Box display={"flex"} alignItems={"center"} gap={2}>
        <SwitchButton />

        <SettingIcon
          style={{ height: "40px", width: "40px", color: "#467FD8" }}
        />

        <Avatar
          alt="Remy Sharp"
          onClick={(e: any) => setOpenConfDialog(e.currentTarget)}
          src={""}
          sx={{ width: 40, height: 40, cursor: "pointer" }}
        />

        <ProfilePopOver
          open={openConfDialog}
          handleClose={() => setOpenConfDialog(null)}
        />
      </Box>
    </Box>
  );
};

export default TopBar;
