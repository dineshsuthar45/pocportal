export interface textprops {
  id: number;
  label: string;
  sublabel?: string;
  labelColor?: string;
  sublabelColor?: string;
  labelFontSize?: string;
}

const tickertext: textprops[] = [
  {
    id: 1,
    label: "AApl",
    labelColor: "black",
    labelFontSize: "24px",
  },
  {
    id: 2,
    label: "Value",
    sublabel: "(0.5)",
    labelColor: "#467FD8",
    sublabelColor: "#FE464B",
  },
  {
    id: 1,
    label: "Growth",
    sublabel: "(0.1)",
    labelColor: "#467FD8",
    sublabelColor: "#FE464B",
  },
  {
    id: 1,
    label: "Momentum",
    sublabel: "0.1",
    labelColor: "#467FD8",
    sublabelColor: "black",
  },
  {
    id: 1,
    label: "S&P beta",
    sublabel: "1.35",
    labelColor: "#467FD8",
    sublabelColor: "black",
  },
  {
    id: 1,
    label: "Bara Beta",
    sublabel: "0.65",
    labelColor: "#467FD8",
    sublabelColor: "black",
  },
  {
    id: 1,
    label: "Si % Float",
    sublabel: "0.64" + "%",
    labelColor: "#467FD8",
    sublabelColor: "black",
  },
];

const Data5D: textprops[] = [
  {
    id: 1,
    label: "Alpha",
    sublabel: "1.1" + "%",
    labelColor: "black",
    sublabelColor: "#9D8DF6",
  },
  {
    id: 1,
    label: "Total",
    sublabel: "3.3" + "%",
    labelColor: "black",
    sublabelColor: "#95DCFF",
  },
  {
    id: 1,
    label: "Factor",
    sublabel: "4.8" + "%",
    labelColor: "black",
    sublabelColor: "#FEC853",
  },
];

export { tickertext, Data5D };
