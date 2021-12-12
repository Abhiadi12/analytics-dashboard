import React from "react";
import TableChart from "./TableChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

function DisplayCharts() {
  const classes = useStyles();
  const { data } = useSelector((state) => state.dashboard);
  const [tableData, barData, pieData] = data;
  return (
    <div className={classes.root}>
      {tableData && <TableChart tableData={tableData} />}
      {barData && <BarChart barData={barData} />}
      {pieData && <PieChart pieData={pieData} />}
    </div>
  );
}

export default DisplayCharts;
