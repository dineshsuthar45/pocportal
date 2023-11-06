import { useMemo, useRef } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Filler,
  Tooltip,
  CategoryScale,
  Chart,
  ScriptableContext,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import { Loader } from "../../util/loader";
import moment from "moment";
import Filter from "./Filter";

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Legend,
  Tooltip
);

const LineChart = <
  T extends {
    year: string;
    value?: string | number;
  }
>({
  isLoading,
  title,
}: {
  title: string;
  isLoading: boolean;
}) => {
  const chartRef = useRef<Chart<"line", T[], unknown>>();
  const getFormatedDate = (date: Date | string) => {
    return moment(date).format("YYYY-MM-DD");
  };

  const one_month_alpha = [
    {
      year: "2023-10-12",
      value: 0.0,
    },
    {
      year: "2023-09-12",
      value: 15.153656,
    },
    {
      year: "2023-08-12",
      value: 15.153656,
    },
    {
      year: "2023-07-12",
      value: 10.980917,
    },
    {
      year: "2023-06-12",
      value: 10.980917,
    },
    {
      year: "2023-02-12",
      value: 10,
    },
    {
      year: "2023-01-12",
      value: 0.02534,
    },
  ];

  const data = useMemo(() => {
    return {
      datasets: [
        {
          label: "value",
          tension: 0.3,
          spanGaps: true,
          data: one_month_alpha.map((item) => {
            return {
              ...item,
              date: getFormatedDate(item.year),
            };
          }),
          fill: true,
          borderColor: "#467FD8",
          // backgroundColor: "rgba(70, 127, 216, 0.30)",
          pointBorderColor: "#AAA",
          pointBackgroundColor: "#FEF1F1",
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 25, 0, 300);
            gradient.addColorStop(0, "rgba(70, 127, 216, 0.30)");
            gradient.addColorStop(1, "rgba(35, 82, 155, 0.00)");
            return gradient;
          },
        },
      ],
    };
  }, []);

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      radius: 0,
      scales: {
        x: {
          border: {
            // display: false,
          },
          grid: {
            display: false,
          },
          ticks: {
            min: 0,
            max: 20,
            stepSize: 3,
          },
          label: "date",
        },
        y: {
          border: {
            display: false,
          },
          ticks: {
            beginAtZero: false,
            callback: function (value: string) {
              return value + "%";
            },
          },
          grid: {
            drawBorder: false,
            display: false,
          },
          label: "value",
        },
      },
      parsing: {
        xAxisKey: "year",
        yAxisKey: "value",
      },
      interaction: {
        mode: "nearest" as const,
        axis: "x" as const,
        intersect: false,
      },
      plugins: {
        tooltip: {
          enabled: true,
          usePointStyle: true,
          titleFont: {
            weight: "bold",
          },
        },
        title: {
          display: false,
          text: "Last year price graph",
          color: "red",
        },
        legend: {
          display: false,
          usePointStyle: false,
        },
      },
    }),
    []
  );

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

      <Loader isLoading={isLoading} />
      <Line ref={chartRef} options={options} data={data} />
    </Box>
  );
};

export default LineChart;
