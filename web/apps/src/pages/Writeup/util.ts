export interface tableprops {
  headerName: string;
  width: string;
}

const table: tableprops[] = [
  {
    headerName: "Ticker",

    width: "100px",
  },
  {
    headerName: "Value",

    width: "100px",
  },
  {
    headerName: "Growth",

    width: "100px",
  },
  {
    headerName: "Momentum",

    width: "100px",
  },
];

const tableData: tableprops[] = [
  {
    headerName: "S & P Beta",

    width: "100px",
  },
  {
    headerName: "Barra Beta",

    width: "100px",
  },
  {
    headerName: "SI % Float",

    width: "100px",
  },
];

const table5DData: tableprops[] = [
  {
    headerName: "Ticker",

    width: "100px",
  },
  {
    headerName: "Alpha 5D",

    width: "100px",
  },
  {
    headerName: "Total",

    width: "100px",
  },
  {
    headerName: "Factor",

    width: "100px",
  },
];

const table1MData: tableprops[] = [
  {
    headerName: "Alpha 1M",

    width: "100px",
  },
  {
    headerName: "Total",

    width: "100px",
  },
  {
    headerName: "Factor",

    width: "100px",
  },
];

export { table, table1MData, table5DData, tableData };
