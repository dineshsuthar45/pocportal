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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

const LineChart = () => {
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
  const dataset2Data = [50, -30, 50, 40, 50, 80, 70, 29, 30, -10, 66.7];
  const backgroundColors = dataset2Data.map((value) =>
    value >= 0 ? "green" : "red"
  );

  const data: any = {
    labels,

    datasets: [
      {
        label: "Dataset 1",
        data: dataset2Data,
        backgroundColor: backgroundColors,
        barThickness: 10,
        borderRadius: 10,
        tension: 0.2,
        borderColor: "blue",
        fill: true,
      },
    ],
  };

  return (
    <div>
      <div className="chart_demo" style={{ width: "600px" }}>
        <Bar id="canva" options={options} data={data} />
      </div>
    </div>
  );
};
export default LineChart;

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
      // backgroundColor: "midnightblue",
      // bodyColor: "orange",
      // bodyAlign: "center",
      // bodyFont: {
      //   weight: "italic",
      // },
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
            const dataset2Data = label.split(": ")[1];
            const data = "12/10/2011";
            return [
              `Team: ${team}`,
              `Visits:  ${dataset2Data}`,
              `Data: ${data}`,
            ];
          }
          return "";
        },
      },
    },
  },
  backgroundColor: "#405270",
};
