import { Typography } from "@mui/material";
import { useWriteupContent } from "./Writeup.hooks";

const WriteupContent = () => {
  const { isLoadingDetails, details } = useWriteupContent();
  console.log({ isLoadingDetails, details });
  return (
    <div>
      <Typography variant="h6">hello</Typography>
    </div>
  );
};

export default WriteupContent;
