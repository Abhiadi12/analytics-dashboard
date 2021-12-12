import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

function PieChart(props) {
  const data = props;

  const configCreator = () => {
    const labels = [];
    const values = [];
    const backGroundColor = [];
    data?.pieData?.data?.result?.data.forEach((record) => {
      labels.push(record.advertiserId);
      values.push(record.CM001_percent);
      backGroundColor.push(
        "#" + Math.floor(Math.random() * 16777215).toString(16)
      );
    });
    return {
      labels,
      datasets: [
        {
          label: "pie Chart",
          backgroundColor: backGroundColor,
          borderWidth: 2,
          data: values,
        },
      ],
    };
  };

  return (
    <div style={{ marginTop: "1em" }}>
      <h4>Pie Chart: </h4>
      <Pie
        data={configCreator()}
        options={{
          title: {
            display: true,
            fontSize: 16,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}
export default PieChart;
