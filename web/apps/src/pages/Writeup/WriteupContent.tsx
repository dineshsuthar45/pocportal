import { Box, Typography } from "@mui/material";
import { useWriteupContent } from "./Writeup.hooks";
import { useRef } from "react";

import { Divider } from "@mui/material";
import { OutlinedIconButton } from "../../components/Button";
import { CalendarIcon, Email, ExportIcon } from "../../assets/Svg";
import React, { useState } from "react";
import { Data5D, tickertext } from "./util";
import { Typo } from "../../components/Typography";
import LineChart from "../../components/Chart/LineChart";
import BarChart from "../../components/Chart/BarChart";
import SquareBarChart from "../../components/Chart/SquareBarChart";
import ExportPopOver from "../../components/PopOver/Export";

const WriteupContent = () => {
  const { isLoadingDetails, details } = useWriteupContent();
  console.log({ isLoadingDetails, details });

  const handleEmail = () => {
    alert("guj");
  };

  const dataSet = [50, -30, 50, -40, 50, -80, 70, -29, 30, -10, 66.7];
  const dataSet1 = [50, 30, 50, 40, 50, 80, 70, 29, 30, 10, 66.7];

  const pdfContentRef = useRef();

  const [openConfDialog, setOpenConfDialog] = useState<null | HTMLElement>(
    null
  );
  return (
    <Box
      ref={pdfContentRef}
      display={"flex"}
      flexDirection={"column"}
      bgcolor="#EEF3FB"
      height={"100vh"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        bgcolor={"#FFF"}
        alignItems={"center"}
        boxShadow="0px 1px 2px 0px rgba(21, 30, 40, 0.08), 0px 2px 4px 0px rgba(13, 23, 33, 0.08)"
      >
        <Box display={"flex"} gap={2}>
          <OutlinedIconButton
            label={"Email"}
            sublabel={<Email style={{ fontSize: "24px" }} />}
            type="button"
            onClick={handleEmail}
            style={{ backgroundColor: "#EEF3FB" }}
          />
          <OutlinedIconButton
            label={"Export"}
            sublabel={<ExportIcon style={{ fontSize: "24px" }} />}
            type="button"
            onClick={(e: any) => setOpenConfDialog(e.currentTarget)}
            style={{ backgroundColor: "#EEF3FB" }}
          />
        </Box>
      </Box>

      <Box display={"flex"} flexDirection={"column"} gap={4} p={"24px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          bgcolor={"#FFF"}
          alignItems={"center"}
          borderRadius={"8px"}
          p={"10px 28px"}
        >
          {tickertext.map((item, index) => (
            <React.Fragment key={index}>
              <Typography
                variant="subtitle1"
                color={item.labelColor}
                textAlign={"center"}
                fontSize={item.labelFontSize ? "24px" : "16px"}
                fontStyle={"normal"}
                fontWeight={600}
                lineHeight={"24px"}
              >
                {item.label ?? "---"}
                <Typography
                  fontWeight={600}
                  fontSize={"16px"}
                  color={item.sublabelColor}
                  variant="subtitle1"
                >
                  {item.sublabel}
                </Typography>
              </Typography>
              {index < tickertext.length - 1 && (
                <Divider
                  orientation="vertical"
                  variant="middle"
                  sx={{
                    borderWidth: "1px",
                    margin: "0 10px",
                    backgroundColor: "#f2f2f2",
                  }}
                  flexItem
                />
              )}
            </React.Fragment>
          ))}
        </Box>

        <Box display={"flex"} gap={2}>
          <Box
            display={"flex"}
            height={"160px"}
            p={"14px 20px"}
            width={"100%"}
            maxWidth={"500px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            bgcolor={"#FFF"}
            borderRadius={"8px"}
            flexShrink={0}
            gap={2}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Typo
                label="5D"
                variant="h5"
                style={{
                  color: "#000",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                }}
              />
              <CalendarIcon />
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={1}>
              {Data5D.map((item, index) => (
                <React.Fragment key={index}>
                  <Typography
                    variant="subtitle1"
                    color={item.labelColor}
                    textAlign={"center"}
                    display={"flex"}
                    fontSize={"15px"}
                    fontStyle={"normal"}
                    fontWeight={600}
                    lineHeight={"24px"}
                    gap={2}
                  >
                    {item.label ?? "---"}
                    <Typography
                      variant="subtitle1"
                      textAlign={"center"}
                      display={"flex"}
                      fontSize={"15px"}
                      fontStyle={"normal"}
                      fontWeight={600}
                      lineHeight={"24px"}
                      color={item.sublabelColor}
                    >
                      {item.sublabel}
                    </Typography>
                  </Typography>
                </React.Fragment>
              ))}
            </Box>
          </Box>

          <Box
            display={"flex"}
            height={"160px"}
            p={"14px 20px"}
            width={"100%"}
            maxWidth={"500px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            bgcolor={"#FFF"}
            borderRadius={"8px"}
            flexShrink={0}
            gap={2}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Typo
                label="1 Month"
                variant="h5"
                style={{
                  color: "#000",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                }}
              />
              <CalendarIcon />
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={1}>
              {Data5D.map((item, index) => (
                <React.Fragment key={index}>
                  <Typography
                    variant="subtitle1"
                    color={item.labelColor}
                    textAlign={"center"}
                    display={"flex"}
                    fontSize={"15px"}
                    fontStyle={"normal"}
                    fontWeight={600}
                    lineHeight={"24px"}
                    gap={2}
                  >
                    {item.label ?? "---"}
                    <Typography
                      variant="subtitle1"
                      textAlign={"center"}
                      display={"flex"}
                      fontSize={"15px"}
                      fontStyle={"normal"}
                      fontWeight={600}
                      lineHeight={"24px"}
                      color={item.sublabelColor}
                    >
                      {item.sublabel}
                    </Typography>
                  </Typography>
                </React.Fragment>
              ))}
            </Box>
          </Box>
        </Box>

        <LineChart isLoading={false} title="1 Month Alpha" />

        <SquareBarChart
          title="AAPL EPS 12M Forward Multiple"
          dataSet={dataSet1}
        />

        <SquareBarChart
          title="SPX Index EPS 12M Forward Multiple "
          dataSet={dataSet1}
        />

        <BarChart title="AAPL Multiple vs. SPX Index" dataSet={dataSet} />
      </Box>

      <ExportPopOver
        open={openConfDialog}
        handleClose={() => setOpenConfDialog(null)}
      />
    </Box>
  );
};

export default WriteupContent;
