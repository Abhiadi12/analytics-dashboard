import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const columns = ["publisherId", "impressions_offered"];
export default function TableChart(props) {
  const { tableData } = props;

  return (
    <div
      style={{
        border: "1px dotted blue",
        marginBottom: "1em",
      }}
    >
      <h4>Table Chart: </h4>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((row, idx) => (
                <TableCell key={idx}>{row}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData?.data?.result?.data?.map((row) => (
              <TableRow
                key={row.publisherId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row[columns[0]]}</TableCell>
                <TableCell>{row[columns[1]]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
