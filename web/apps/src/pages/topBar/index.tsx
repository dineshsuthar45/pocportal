import { Box, FormControlLabel, Switch, Avatar } from "@mui/material";
import { RootState, useAppSelector } from "../../store/store";
import { Typo } from "../../components/Typography";
import SettingsIcon from "@mui/icons-material/Settings";

const TopBar = () => {
  const topTitle = useAppSelector((state: RootState) => state.topbar.title);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"sticky"}
      p={2}
    >
      <Typo
        variant="h6"
        label={topTitle}
        style={{
          textTransform: "capitalize",
          fontWeight: 600,
        }}
      />

      <FormControlLabel
        control={<Switch sx={{ m: 1 }} defaultChecked />}
        label="iOS style"
      />

      <SettingsIcon />

      <Avatar alt="Remy Sharp" src="" sx={{ width: 48, height: 48 }} />

      {/* <Box>
        {topBarlogo.map((item) => (
          <Tooltip key={item.id} title={item.alt}>
            <IconButton>
              <ImageComp img={item.image} alt={item.alt} style={imgStyle} />
            </IconButton>
          </Tooltip>
        ))}
      </Box> */}
    </Box>
  );
};

export default TopBar;
