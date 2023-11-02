import { Box } from "@mui/material";
import { Footer } from "../../components/Typography";
import TopBar from "../topBar";
import WriteUp from "../Writeup/Writeup";

const WhiteScreen = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Box
        bgcolor={"White"}
        width={"100%"}
        height={"92vh"}
        borderRadius={"12px"}
        overflow={"auto"}
      >
        <TopBar />

        <WriteUp />
      </Box>
      <Footer style={{ textAlign: "center" }} />
    </Box>
  );
};

export default WhiteScreen;
