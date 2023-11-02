import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Box } from "@mui/material";
import "./table.scss";
import { IGlobalTableProps } from "../../types";

const Table = ({ row, list }: IGlobalTableProps) => {
  return (
    <Box height={"10vh"} width={"100%"} className="ag-theme-alpine">
      <AgGridReact rowData={row} columnDefs={list} />
    </Box>
  );
};

export default Table;
