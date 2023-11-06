import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { Box, Typography } from "@mui/material";
import Filter from "./Filter";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

const SquareBarChart = ({
  title,
  dataSet,
}: {
  title: string;
  dataSet: any[];
}) => {
  const labels = [
    "10/2/2023",
    "11/1/2023",
    "13/5/2023",
    "14/6/2011",
    "12/9/2024",
    "16/09/2001",
    "24/07/2022",
    "30/09/2023",
    "12/7/2011",
    "9/7/2002",
    "5/09/2011",
  ];

  const data: any = {
    labels,

    datasets: [
      {
        label: "Dataset 1",
        data: dataSet,
        backgroundColor: "#467FD8",
        barThickness: 15,
        borderRadius: 0,
        tension: 0.2,
        borderColor: "blue",
        fill: true,
      },
    ],
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection={"column"}
      bgcolor={"#FFF"}
      gap={3}
      width="600px"
      height={"100%"}
      maxHeight={"400px"}
      borderRadius={"8px"}
      p={"20px"}
      mt={10}
    >
      <Typography
        variant="h5"
        color={"#000"}
        lineHeight={"21.51px"}
        fontWeight={600}
        display={"flex"}
        textAlign={"start"}
        alignSelf={"flex-start"}
        textTransform={"capitalize"}
      >
        {title}
      </Typography>
      <Filter style={{ alignSelf: "flex-start" }} />
      <Bar id="canva" options={options} data={data} />
    </Box>
  );
};
export default SquareBarChart;

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        drawOnChartArea: false,
        drawBorder: false,
      },
    },
    y: {
      grid: {
        color: "#d3d3d3",
        borderWidth: 2,
      },
      border: {
        dash: [1, 4],
      },
      ticks: {
        beginAtZero: false,
        callback: function (value: string) {
          return value + "%";
        },
      },
    },
  },

  interaction: {
    mode: "nearest" as const,
    axis: "x" as const,
    intersect: false,
  },
  plugins: {
    annotation: {
      annotations: {
        annotation1: {
          type: "line",
          borderColor: "#405270",
          borderWidth: 1,
          label: {
            backgroundColor: "red",
            content: "Test Label",
            display: false,
          },
          scaleID: "y",
          value: 0,
        },
      },
    },

    tooltip: {
      enabled: true,
      usePointStyle: true,
      titleAlign: "center",
      titleColor: "black",
      titleSpacing: 3,
      TitleFont: {
        weight: "bold",
      },
      backgroundColor: "rgba(255,255,255, 0.9)",
      padding: 15,
      width: 30,
      callbacks: {
        title: function (tooltipItem: any) {
          if (tooltipItem) {
            return "30 Jan";
          }
        },
        labelColor: function () {
          return {
            borderColor: "transparent",
            backgroundColor: "gray",
            borderWidth: 0,
            borderRadius: 5,
          };
        },

        labelTextColor: function () {
          return "black";
        },
        padding: 4,
        label: function (context: any) {
          const label = context.dataset.label || "";
          if (label) {
            const team = label.split(": ")[0];
            const dataSet = label.split(": ")[1];
            const data = "12/10/2011";
            return [`Team: ${team}`, `Visits:  ${dataSet}`, `Data: ${data}`];
          }
          return "";
        },
      },
    },
  },
  backgroundColor: "#405270",
};
