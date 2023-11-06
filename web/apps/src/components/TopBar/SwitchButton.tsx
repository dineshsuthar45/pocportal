import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import Moon from "@mui/icons-material/DarkModeOutlined";
import Sun from "@mui/icons-material/WbSunnyOutlined";

export default function SwitchButton() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Box
      bgcolor={isChecked ? "#c6d9f7" : "#c6d9f7"}
      display={"flex"}
      minWidth={"150px"}
      width={"100%"}
      minHeight={"40px"}
      height={"100%"}
      borderRadius={"8px"}
      alignItems="center"
      justifyContent={isChecked ? "flex-end" : "flex-start"}
      padding="0 10px"
    >
      <Box
        bgcolor={"#fff"}
        borderRadius="8px"
        maxWidth={"70px"}
        width={"100%"}
        maxHeight={"32px"}
        height={"100%"}
        display="flex"
        alignItems="center"
        justifyContent={isChecked ? "flex-end" : "flex-start"}
      >
        <IconButton
          onClick={toggleSwitch}
          sx={{
            color: "#467FD8",
            padding: "10px",
          }}
        >
          {isChecked ? (
            <Moon
              sx={{
                fontSize: "16px",
              }}
            />
          ) : (
            <Sun
              sx={{
                fontSize: "16px",
              }}
            />
          )}

          <span
            style={{ marginLeft: "5px", textAlign: "center", fontSize: "14px" }}
          >
            {isChecked ? "Dark" : "Light"}
          </span>
        </IconButton>
      </Box>
    </Box>
  );
}
